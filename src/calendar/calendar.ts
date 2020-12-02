/*
* @Author: Just be free
* @Date:   2020-10-12 15:56:53
* @Last Modified by:   Just be free
* @Last Modified time: 2020-12-02 10:45:49
* @E-mail: justbefree@126.com
*/
import VueGgy, { mixins, props, Options } from "../component/VueGgy";
import VgIcon from "../icon";
import VgPopup from "../popup";
import VgFlex from "../flex";
import VgFlexItem from "../flex-item";
import { VgDate, VgDateInstance } from "../utils/vg-date";
import { h, withDirectives, vShow, VNode } from "vue";
import { push, drop, setProperty } from "../utils";
import { getOffset } from "../utils/dom";
export interface CalendarDateNode {
  key: string;
  className: any[];
  year?: string|number;
  month?: string|number;
  day?: string|number;
  week?: string|number;
  date?: string;
  vgDate?: VgDate;
  mark?: string;
  festival?: string;
}
export interface CalendarMonthNode {
  dates: Array<CalendarDateNode>;
  key: string;
  year: number|string;
  month: number|string;
}
const Props = props({
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: [String, Array],
    default: "日历"
  },
  mode: {
    type: String,
    default: "single"
  },
  doubleModeAllowSameDate: {
    type: Boolean,
    default: true
  },
  crossed: {
    type: Boolean,
    default: true
  },
  before: {
    type: [Number, String],
    default: 1
  },
  after: {
    type: [Number, String],
    default: 1
  },
  unit: {
    type: String,
    default: "days"
  },
  weekText: {
    type: Array,
    default: () => {
      return ["日", "一", "二", "三", "四", "五", "六"];
    }
  },
  defaultDate: {
    type: String,
    default: VgDateInstance().format()
  },
  defaultStartDate: {
    type: String,
    default: VgDateInstance().format()
  },
  defaultEndDate: {
    type: String,
    default: VgDateInstance()
      .add(1, "day")
      .format()
  },
  showConfirmButton: {
    type: Boolean,
    default: false
  },
  confirmText: {
    type: String,
    default: "确认"
  },
  fromDateMark: {
    type: String,
    default: "入住"
  },
  toDateMark: {
    type: String,
    default: "离店"
  },
  todayMark: {
    type: String,
    default: "今天"
  },
  monthTtitleParser: {
    type: Function,
    default: (defaultText: string): string => {
      return defaultText;
    }
  }
});
@Options({
  emits: ["update:modelValue", "getdate", "beforeenter", "enter", "afterenter", "beforeleave", "leave", "afterleave"],
  name: "VgCalendar",
  watch: {
    mode: "highLightDefault"
  }
})
export default class VgCalendar extends mixins(VueGgy, Props) {
  public static componentName = "VgCalendar";
  public changedNode = {} as { [propName: string]: any };
  public fromDate: null|CalendarDateNode = null;
  public toDate: null|CalendarDateNode = null;
  public date: null|CalendarDateNode = null;
  public beginDate: null|string = null;
  public endDate: null|string = null;
  public confirmButtonClassName = "active";
  close() {
    this.$emit("update:modelValue", false);
  }
  getDefaultNodeFromProps(prop: string, className: string[] = []): CalendarDateNode {
    const key = this[prop];
    const [year, month, day] = key.split("-");
    const festival = VgDateInstance().isSame(year, month, day) ? this.todayMark : "";
    const vgDate = VgDateInstance(year, month, day);
    return {
      key,
      vgDate,
      year,
      month,
      day,
      date: key,
      week: vgDate.getDay(),
      className: ["active", "clickable", ...className],
      mark: "",
      festival
    };
  }
  highLightDefault(): void {
    if (this.mode === "double") {
      const startNode = this.getDefaultNodeFromProps("defaultStartDate", [
        "start"
      ]);
      setProperty(startNode, "mark", this.fromDateMark);
      const endNode = this.getDefaultNodeFromProps("defaultEndDate", ["end"]);
      setProperty(endNode, "mark", this.toDateMark);
      this.changedNode = {
        [startNode.key]: startNode,
        [endNode.key]: endNode
      };
      // 当允许选择同一天，并且默认传的起止日期也是同一天则需要重置endNode
      if (this.doubleModeAllowSameDate && startNode.key === endNode.key) {
        endNode.className.push("start");
        setProperty(endNode, "mark", `${this.fromDateMark}-${this.toDateMark}`);
      }
      this.fromDate = startNode;
      this.toDate = endNode;
    } else {
      const node = this.getDefaultNodeFromProps("defaultDate", [
        "single-mode",
        "open-days"
      ]);
      this.changedNode = { [node.key]: node };
    }
  }
  createCloseIcon() {
    return h(VgIcon,
      {
        class: ["vg-calendar-close"],
        name: "close",
        size: 24,
        onClick: this.close
      },
      { default: () => [] }
    );
  }
  getTitle(): string {
    const title = Array.isArray(this.title) ? this.title : [this.title];
    const [defaultTitle = "", firstClickTitle = "", secondClickTitle] = title;
    if (this.mode === "single") {
      return defaultTitle as string;
    } else {
      if (!this.fromDate && !this.toDate) {
        return firstClickTitle as string || defaultTitle as string;
      } else if (this.fromDate && !this.toDate) {
        return secondClickTitle as string || defaultTitle as string;
      } else if (this.fromDate && this.toDate) {
        return defaultTitle as string;
      } else {
        return "";
      }
    }
  }
  createTitle(): VNode {
    return h("div",
      {
        class: ["vg-calendar-header-title"],
        innerHTML: this.getTitle()
      },
      { default: () => [] } 
    );
  }
  createWeekBar(): VNode {
    const bar: Array<VNode> = [];
    for (let i = 0; i < 7; i++) {
      bar.push(
        h(VgFlexItem, { key: i }, {
          default: () => [
            h("span", { innerHTML: this.weekText[i] }, { default: () => [] })
          ]
        })
      );
    }
    return h("div", { class: ["vg-calendar-week-bar"] }, {
      default: () => [
        h(VgFlex,
          { key: "vg_flex_week_bar", justifyContent: "spaceAround" },
          { default: () => bar }
        )
      ]
    });
  }
  createHeaderArea(): VNode {
    return h("div", {}, {
      default: () => [
        this.createCloseIcon(),
        this.createTitle(),
        this.createWeekBar()
      ]
    });
  }
  handleClick(date: CalendarDateNode): void {
    if (date.className.indexOf("clickable") < 0) {
      return;
    }
    if (this.mode === "double") {
      this.haneleDoubleMode(date);
    } else {
      this.haneleSingleMode(date);
    }
  }
  haneleDoubleMode(date: CalendarDateNode): void {
    if (!this.fromDate) {
      this.confirmButtonClassName = "disable";
      push(date.className, ["start", "active"]);
      setProperty(date, "mark", this.fromDateMark);
      this.changedNode = { ...this.changedNode, [date.key]: date };
      this.fromDate = date;
    } else {
      if (!this.toDate) {
        if (date.key === this.fromDate.key) {
          if (this.doubleModeAllowSameDate) {
            this.confirmButtonClassName = "active";
            push(this.changedNode[this.fromDate.key].className, "end");
            setProperty(date, "mark", `${this.fromDateMark}-${this.toDateMark}`);
            this.changedNode = { [date.key]: date };
            this.toDate = date;
            if (!this.showConfirmButton) {
              this.handleOnConfirm();
            }
          } else {
            this.confirmButtonClassName = "disable";
            drop(date.className, ["active", "start"]);
            // this.changedNode = { ...this.changedNode, [date.key]: date };
            this.changedNode = {};
            this.fromDate = null;
          }
        } else {
          if ((this.fromDate.vgDate as VgDate).isAfter(date.vgDate as VgDate)) {
            if (this.crossed) {
              this.confirmButtonClassName = "active";
              drop(this.changedNode[this.fromDate.key].className, "start");
              push(this.changedNode[this.fromDate.key].className, "end");
              setProperty(
                this.changedNode[this.fromDate.key],
                "mark",
                this.toDateMark
              );
              this.toDate = this.fromDate;
              this.fromDate = date;
              push(date.className, "start");
              setProperty(date, "mark", this.fromDateMark);
            } else {
              drop(this.changedNode[this.fromDate.key].className, ["start", "active"]);
              this.changedNode = { [date.key]: date };
              setProperty(date, "mark", this.fromDateMark);
              push(date.className, ["start", "active"]);
              this.fromDate = date;
              return;
            }
          } else {
            this.confirmButtonClassName = "active";
            push(date.className, "end");
            setProperty(date, "mark", this.toDateMark);
            this.toDate = date;
          }
          push(date.className, "active");
          this.changedNode = { ...this.changedNode, [date.key]: date };
          if (!this.showConfirmButton) {
            this.handleOnConfirm();
          }
        }
      } else {
        this.confirmButtonClassName = "disable";
        this.toDate = null;
        drop(date.className, "during-active");
        push(date.className, ["start", "active"]);
        setProperty(date, "mark", this.fromDateMark);
        this.fromDate = date;
        this.changedNode = { [date.key]: date };
      }
    }
  }
  haneleSingleMode(date: CalendarDateNode): void {
    this.changedNode = {};
    push(date.className, ["active", "single-mode"]);
    this.changedNode = { ...this.changedNode, [date.key]: date };
    this.date = date;
    if (!this.showConfirmButton) {
      this.handleOnConfirm();
    }
  }
  getTimePeriod() {
    const beginDate = VgDateInstance().substract(Number(this.before), this.unit);
    const endDate = VgDateInstance().add(Number(this.after), this.unit);
    this.beginDate = beginDate.format();
    this.endDate = endDate.format();
    return VgDateInstance().getMonthPeriod(beginDate, endDate);
  }
  generateDate() {
    const caculatedMonth: string[] = this.getTimePeriod();
    const caculatedDates: CalendarMonthNode[] = [];
    caculatedMonth.forEach(item => {
      const monthObject = {} as CalendarMonthNode;
      monthObject["dates"] = [];
      const [year, month] = item.split("-");
      const daysOfMonth = VgDateInstance(year, month).getDaysCountOfMonth();
      for (let i = 1; i <= daysOfMonth; i++) {
        let j = i < 10 ? `0${i}` : String(i);
        if (j === "01") {
          for (let k = 0; k < VgDateInstance(year, month, j).getDay(); k++) {
            monthObject["dates"].push({
              className: [],
              key: `year_month_date_${k}`
            });
          }
        }
        const className: string[] = [];
        const vgDate = VgDateInstance(year, month, j);
        push(
          className,
          VgDateInstance().isAfter(year, month, j) ? "disable" : "clickable"
        );
        if (this.mode === "double" && this.fromDate && this.toDate) {
          push(
            className,
            VgDateInstance(year, month, j).isBetween(
              this.fromDate.vgDate as VgDate,
              this.toDate.vgDate as VgDate
            )
              ? "during-active"
              : ""
          );
        }
        if (this.beginDate && this.endDate) {
          if (
            VgDateInstance(year, month, j).isBetweenIncludeBoth(
              this.beginDate,
              this.endDate
            )
          ) {
            push(className, ["open-days", "clickable"]);
            drop(className, "disable");
          } else {
            push(className, "disable");
            drop(className, "clickable");
          }
        }
        monthObject["key"] = `${year}-${month}`;
        monthObject["month"] = month;
        monthObject["year"] = year;
        const festival = VgDateInstance().isSame(year, month, j)
          ? this.todayMark
          : "";
        const key = `${year}-${month}-${j}`;
        if (this.changedNode[key]) {
          const node = this.changedNode;
          monthObject["dates"].push({ ...this.changedNode[key] });
        } else {
          monthObject["dates"].push({
            key,
            year,
            month,
            day: j,
            week: vgDate.getDay(),
            date: key,
            className,
            vgDate,
            mark: "",
            festival
          });
        }
      }
      caculatedDates.push(monthObject);
    });
    return caculatedDates;
  }
  createDate() {
    const dates = this.generateDate();
    const caculateDOM: VNode[] = [];
    dates.forEach(monthItem => {
      const { month, year, key } = monthItem;
      caculateDOM.push(
        h("div",
          {
            class: ["vg-calendar-month", month],
            key
          },
          {
            default: () => [
              h(
                "h4",
                {
                  class: ["vg-calendar-month-title"],
                  innerHTML: this.monthTtitleParser(`${year}-${month}`, { year, month })
                },
                { default: () => [] }
              ),
              h(VgFlex,
                {
                  key: `vg_flex_${key}`,
                  class: ["vg-calendar-flex"],
                  flexWrap: "wrap",
                  justifyContent: "spaceAround",
                  fixBottomLine: true
                },
                {
                  default: () => {
                    const dateDom: VNode[] = [];
                    monthItem.dates.forEach((date: CalendarDateNode) => {
                      let ref = "";
                      if (
                        Array.isArray(date.className) &&
                        (date.className.indexOf("single-mode") > -1 ||
                        date.className.indexOf("start") > -1)
                      ) {
                        ref = "scrollPosition";
                      }
                      dateDom.push(h(VgFlexItem, {
                        key: date.key,
                        class: ["vg-calendar-date", ...date.className],
                        ref,
                        onClick: this.handleClick.bind(this, date)
                      }, {
                        default: () => [
                          h(VgFlex, { flexDirection: "column", justifyContent: "spaceBetween" }, {
                            default: () => [
                              h(VgFlexItem, { class: ["vg-calendar-date-festival"] }, {
                                default: () => date.festival
                              }),
                              h(VgFlexItem, { class: ["vg-calendar-date-text"] }, {
                                default: () => date.day
                              }),
                              h(VgFlexItem, { class: ["vg-calendar-date-mark"] }, {
                                default: () => date.mark
                              })
                            ]
                          })
                        ]
                      }));
                    });
                    return dateDom;
                  }
                }
              )
            ]
          }
        )
      );
    });
    return caculateDOM;
  }
  handleOnConfirm(): void {
    if (this.confirmButtonClassName !== "active") {
      return;
    }
    this.close();
    if (this.mode === "double") {
      this.$emit("getdate", { fromDate: this.fromDate, toDate: this.toDate });
    } else {
      this.$emit("getdate", { date: this.date });
    }
  }
  createFooterArea() {
    if (this.showConfirmButton) {
      return h(VgFlexItem,
        {
          class: ["vg-calendar-footer"]
        },
        {
          default: () => [
            h("div", {
              class: [
                "yn-calendar-confirm-button",
                this.confirmButtonClassName
              ],
              onClick: this.handleOnConfirm,
              innerHTML: this.confirmText
            })
          ]
        }
      );
    } else {
      return [];
    }
  }
  setPosition(): void {
    this.$nextTick(() => {
      const el = (this.$refs.scrollPosition as VgFlexItem).$el;
      const parent = (this.$refs.popup as VgPopup).$el;
      // this.$refs.scroller.$el.scrollTop =
      //   getOffset(el).top -
      //   this.$refs.header.$el.offsetHeight -
      //   getOffset(parent).top;
      // 解决iOS 13.4.1 日历显示选择区域异常。
      // 原因是因为在iOS 13.4.1中 获取popup 的translateY的时候有值（按理说这里应该是0）
      // 猜测：可能是iOS 13.4.1的渲染机制跟其他版本浏览器渲染不一致，测试发现跟Vue transition有关系，具体还得查一下
      // 解决方法：延迟30ms，再进行设置scrollTop值
      const timer = setTimeout(() => {
        (this.$refs.scroller as VgFlexItem).$el.scrollTop =
          getOffset(el).top -
          (this.$refs.header as VgFlexItem).$el.offsetHeight -
          getOffset(parent).top;
          clearTimeout(timer);
      }, 30);
    });
  }
  handleBeforeEnter(): void {
    this.$emit("beforeenter");
  }
  handleEnter(): void {
    this.$emit("enter");
  }
  handleAfterEnter(): void {
    this.$emit("afterenter");
    this.setPosition();
  }
  handleBeforeLeave(): void {
    this.$emit("beforeleave");
  }
  handleLeave(): void {
    this.$emit("leave");
  }
  handleAfterLeave(): void {
    this.$emit("afterleave");
  }
  created() {
    this.highLightDefault();
  }
  render() {
    return h("div", { class: ["vg-calendar"] }, { default: () => [
      withDirectives(h(VgPopup,
        {
          onBeforeenter: this.handleBeforeEnter,
          onEnter: this.handleEnter,
          onAfterenter: this.handleAfterEnter,
          onBeforeleave: this.handleBeforeLeave,
          onLeave: this.handleLeave,
          onAfterleave: this.handleAfterLeave,
          onInput: this.close,
          position: "bottom",
          style: { height: "90%" },
          ref: "popup"
        },
        {
          default: () => [
            h(VgFlex,
              {
                class: ["vg-calendar-content"],
                flexDirection: "column"
              },
              {
                default: () => [
                  h(VgFlexItem,
                    { class: ["vg-calendar-header"], ref: "header" },
                    { default: () => [this.createHeaderArea()] }
                  ),
                  h(VgFlexItem,
                    {
                      ref: "scroller",
                      class: ["vg-calendar-body"],
                      flex: 1
                    },
                    { default: () => [h("div", {}, { default: () => this.createDate() })] }
                  ),
                  this.createFooterArea()
                ]
              }
            )
          ]
        }
      ), [[vShow, this.modelValue]])
    ] });
  }
}