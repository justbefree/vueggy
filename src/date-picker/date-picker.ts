/*
* @Author: Just be free
* @Date:   2020-11-09 17:02:32
* @Last Modified by:   Just be free
* @Last Modified time: 2020-11-09 17:58:33
* @E-mail: justbefree@126.com
*/
import VueGgy, { mixins, props, Options } from "../component/VueGgy";
import { h } from "vue";
import { VgDateInstance, validateFormatedDate } from "../utils/vg-date";
import { ColumnObject } from "../picker/picker-column";
import { ChangeCallbackEvent } from "../picker/picker";
import VgPicker from "../picker";
const now = VgDateInstance().getToday();
const year = now.getFullYear();
const m = now.getMonth();
const month = m < 10 ? `0${m}` : m;
const d = now.getDate();
const date = d < 10 ? `0${d}` : d;
const Props = props({
  modelValue: Boolean,
  start: {
    type: String,
    default: `${year - 100}-${month}-${date}`,
  },
  end: {
    type: String,
    default: `${year}-${month}-${date}`,
  },
  defaultDate: String
});
@Options({
  name: "VgDatePicker",
  emits: ["update:modelValue", "confirm", "beforeenter", "enter", "afterenter", "beforeleave", "leave", "afterleave"]
})
export default class VgDatePicker extends mixins(VueGgy, Props) {
  public static componentName = "VgDatePicker";
  public year: string|number = "";
  public month: string|number = "";
  public date: string|number = "";
  public dayCount = VgDateInstance(year - 30, month, date).getDaysCountOfMonth();
  public monthStart = 1;
  public monthEnd = 12;
  public dateStart = 1;
  public dateEnd = 31;
  public computedColumns: ColumnObject[] = [];
  public defaultDisplayDate = "";
  close() {
    this.$emit("update:modelValue", false);
  }
  handleOnConfirm(e: any): void {
    console.log("confirm", e);
    this.$emit("confirm", {
      e,
      month: this.month,
      date: this.date,
      year: this.year,
      dateInstance: VgDateInstance(this.year, this.month, this.date),
    });
    this.close();
  }
  updateMonthDayCount() {
    this.dayCount = VgDateInstance(this.year, this.month, "01").getDaysCountOfMonth();
  }
  genDate(startDate: number, endDate: number): void {
    this.updateMonthDayCount();
    const defaultIndex = this.computedColumns[2].defaultIndex;
    const dates = [];
    for (let i = startDate; i <= endDate; i++) {
      dates.push(i);
    }
    if (defaultIndex < dates.length) {
      this.date = dates[defaultIndex];
    } else {
      this.computedColumns[2].defaultIndex = 0;
      this.date = dates[0];
    }
    this.computedColumns[2].value = dates;
  }
  genMonth(startMonth: string|number, endMonth: string|number, extendParams: any = {}): void {
    const defaultIndex = this.computedColumns[1].defaultIndex;
    let i: number = Number(startMonth);
    const months: number[] = [];
    for (; i <= endMonth; i++) {
      months.push(i);
    }
    if (defaultIndex < months.length) {
      this.month = months[defaultIndex];
    } else {
      this.computedColumns[1].defaultIndex = 0;
      this.month = months[0];
    }
    this.computedColumns[1].value = months;
    if (extendParams.trigger) {
      if (extendParams.trigger === "start") {
        if (this.month === startMonth) {
          this.genDate(extendParams.startDate, this.dayCount);
        } else {
          this.genDate(1, this.dayCount);
        }
      } else if (extendParams.trigger === "end") {
        if (this.month === endMonth) {
          this.genDate(1, extendParams.endDate);
        } else {
          this.genDate(1, this.dayCount);
        }
      }
    } else {
      this.genDate(1, this.dayCount);
    }
  }
  handleChange({ value, index, key }: ChangeCallbackEvent): void {
    const [startYear, startMonth, startDate] = this.start.split("-");
    const [endYear, endMonth, endDate] = this.end.split("-");
    if (key === 1) {
      // 月变化
      this.month = value;
      if (Number(value) === Number(startMonth)) {
        this.genDate(startDate, this.dayCount);
      } else if (Number(value) === Number(endMonth)) {
        this.genDate(1, endDate);
      } else {
        this.genDate(1, this.dayCount);
      }
    } else if (key === 0) {
      // 年变化
      this.year = value;
      if (Number(startYear) === Number(endYear)) {
        this.genMonth(startMonth, endMonth);
      } else {
        if (Number(value) === Number(startYear)) {
          this.genMonth(Number(startMonth), 12, {
            trigger: "start",
            startDate,
          });
        } else if (Number(value) === Number(endYear)) {
          this.genMonth(1, Number(endMonth), { trigger: "end", endDate });
        } else {
          this.genMonth(1, 12);
        }
      }
    } else if (key === 2) {
      // 日变化
      this.date = value;
    }
  }
  getDefaultIndex(arr: any[], type: string): number {
    const index = arr.indexOf(Number(this[type]));
    if (index < 0) {
      this[type] = arr[0];
    }
    return index > -1 ? index : 0;
  }
  genColumns(): ColumnObject[] {
    const columns: ColumnObject[] = [];
    if (
      !validateFormatedDate(this.start) ||
      !validateFormatedDate(this.end)
    ) {
      return columns;
    }
    const year = [];
    const month = [];
    const date = [];
    const [startYear] = this.start.split("-");
    const [endYear] = this.end.split("-");
    for (let i = startYear; i <= endYear; i++) {
      // 创建年集合
      year.push(i);
    }
    columns.push({
      value: year,
      defaultIndex: this.getDefaultIndex(year, "year"),
    });
    for (let i = this.monthStart; i <= this.monthEnd; i++) {
      month.push(i);
    }
    columns.push({
      value: month,
      defaultIndex: this.getDefaultIndex(month, "month"),
    });
    for (let i = this.dateStart; i <= this.dateEnd; i++) {
      date.push(i);
    }
    columns.push({
      value: date,
      defaultIndex: this.getDefaultIndex(date, "date"),
    });
    return columns;
  }
  initData(): void {
    if (validateFormatedDate(this.defaultDate)) {
      this.defaultDisplayDate = this.defaultDate;
    } else {
      this.defaultDisplayDate = this.end;
    }
    const [y, m, d] = this.defaultDisplayDate.split("-");
    this.year = Number(y);
    this.month = Number(m);
    this.date = Number(d);
    // const [, startMonth, startDate] = this.start.split("-");
    // this.monthStart = 1;
    // this.dateStart = 1;
    const [, endMonth, endDate] = this.end.split("-");
    this.monthEnd = Number(endMonth);
    this.dateEnd = Number(endDate);
  }
  handleBeforeEnter() {
    this.$emit("beforeenter");
  }
  handleEnter() {
    this.$emit("enter");
  }
  handleAfterEnter() {
    this.$emit("afterenter");
  }
  handleBeforeLeave() {
    this.$emit("beforeleave");
  }
  handleLeave() {
    this.$emit("leave");
  }
  handleAfterLeave() {
    this.$emit("afterleave");
  }
  created() {
    this.initData();
    this.computedColumns = this.genColumns();
  }
  render() {
    return h("div", { class: ["vg-date-picker"] }, {
      default: () => [
        h(VgPicker,
          {
            onConfirm: this.handleOnConfirm,
            onClose: this.close,
            onChange: this.handleChange,
            onBeforeEnter: this.handleBeforeEnter,
            onEnter: this.handleEnter,
            onAfterEnter: this.handleAfterEnter,
            onBeforeLeave: this.handleBeforeLeave,
            onLeave: this.handleLeave,
            onAfterLeave: this.handleAfterLeave,
            columns: this.computedColumns,
            modelValue: this.modelValue
          },
          { default: () => [] }
        ),
      ]
    })
  }
}
