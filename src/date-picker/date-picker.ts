/*
* @Author: Just be free
* @Date:   2020-11-09 17:02:32
* @Last Modified by:   Just be free
* @Last Modified time: 2021-04-13 18:23:36
* @E-mail: justbefree@126.com
*/
import VueGgy, { mixins, prop, Options } from "../component/VueGgy";
import { h } from "vue";
import { VgDateInstance, validateFormatedDate } from "../utils/vg-date";
import { ColumnObject } from "../picker/picker-column";
import { ChangeCallbackEvent } from "../picker/picker";
import VgPicker from "../picker";
const isEqual = (d1: string|number, d2: string|number): boolean => {
  return Number(d1) === Number(d2);
}
const now = VgDateInstance().getToday();
const year = now.getFullYear();
const m = now.getMonth() + 1;
const month = m < 10 ? `0${m}` : m;
const d = now.getDate();
const date = d < 10 ? `0${d}` : d;

class Props {
  modelValue!: boolean
  start = prop<string>({ default: `${year - 100}-${month}-${date}` })
  end = prop<string>({ default: `${year}-${month}-${date}` })
  defaultDate?: string
  confirmText?: string
  cancelText?: string
  title?: string
}
@Options({
  name: "VgDatePicker",
  emits: ["update:modelValue", "confirm", "beforeenter", "enter", "afterenter", "beforeleave", "leave", "afterleave"]
})
export default class VgDatePicker extends mixins(VueGgy).with(Props) {
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
    // this.updateMonthDayCount();
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
      this.updateMonthDayCount();
      if (isEqual(this.year, startYear)) {
        if (isEqual(value, startMonth)) {
          this.genDate(Number(startDate), this.dayCount);
        } else {
          this.genDate(1, this.dayCount);
        }
      } else if (isEqual(this.year, endYear)) {
        if (isEqual(value, endMonth)) {
          this.genDate(1, Number(endDate));
        } else {
          this.genDate(1, this.dayCount);
        }
      } else {
        this.genDate(1, this.dayCount);
      }
    } else if (key === 0) {
      // 年变化
      this.year = value;
      this.updateMonthDayCount();
      if (isEqual(startYear, endYear)) {
        this.genMonth(startMonth, endMonth);
      } else {
        if (isEqual(value, startYear)) {
          this.genMonth(Number(startMonth), 12, {
            trigger: "start",
            startDate,
          });
        } else if (isEqual(value, endYear)) {
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
    for (let i = Number(startYear); i <= Number(endYear); i++) {
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
    if (validateFormatedDate(this.defaultDate as string)) {
      this.defaultDisplayDate = this.defaultDate as string;
    } else {
      this.defaultDisplayDate = this.end;
    }
    const [displayY, displayM, displayD] = this.defaultDisplayDate.split("-");
    this.year = Number(displayY);
    this.month = Number(displayM);
    this.date = Number(displayD);
    this.updateMonthDayCount();
    const [startYear, startMonth, startDate] = this.start.split("-");
    const [endYear, endMonth, endDate] = this.end.split("-");
    if (!isEqual(displayY, startYear) && !isEqual(displayY, endYear)) {
      this.monthStart = 1;
      this.monthEnd = 12;
      this.dateStart = 1;
      this.dateEnd = this.dayCount;
    } else if (isEqual(displayY, startYear)) {
      this.monthStart = Number(startMonth);
      this.monthEnd = 12;
      if (isEqual(displayM, startMonth)) {
        this.dateStart = Number(startDate);
        this.dateEnd = this.dayCount;
      } else {
        this.dateStart = 1;
        this.dateEnd = this.dayCount;
      }
    } else if (isEqual(displayY, endYear)) {
      this.monthStart = 1;
      this.monthEnd = Number(endMonth);
      if (isEqual(displayM, endMonth)) {
        this.dateStart = 1;
        this.dateEnd = Number(endDate);
      } else {
        this.dateStart = 1;
        this.dateEnd = this.dayCount;
      }
    }
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
            title: this.title,
            confirmText: this.confirmText,
            cancelText: this.cancelText,
            modelValue: this.modelValue
          },
          { default: () => [] }
        ),
      ]
    })
  }
}
