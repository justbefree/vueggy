/*
* @Author: Just be free
* @Date:   2020-11-05 13:44:32
* @Last Modified by:   Just be free
* @Last Modified time: 2021-04-13 17:31:54
* @E-mail: justbefree@126.com
*/
export interface ColumnObject {
  value: any[];
  defaultIndex: number;
  disabled?: boolean;
  [propName: string]: any;
}
import VueGgy, { mixins, prop, Options } from "../component/VueGgy";
import { EventEmulator, EventCallbackOptions } from "../component/EventEmulator";
import { deepClone } from "../utils/deep-clone";
import { getElementsTranslate } from "../utils/dom";
import { isObject } from "../utils";
import { h } from "vue";
const DEFAULT_DURATION = 200;
const MOMENTUM_LIMIT_TIME = 300;
const MOMENTUM_LIMIT_DISTANCE = 15;
const range = (num: number, min: number, max: number): number => {
  return Math.min(Math.max(num, min), max);
}
function isOptionDisabled(column: ColumnObject): boolean|undefined {
  return isObject(column) && column.disabled;
}
const polyfill = (arr: any[]): any[] => {
  if (arr.length === 1 && typeof arr[0] === "number") {
    return [String(arr[0])];
  }
  return arr;
}
class Props {
  columns = prop<Array<any>>({
    default: () => []
  })
  defaultIndex!: number
  itemHeight = prop<string|number>({
    default: 44
  })
  // visibleItemCount = prop<string|number>({ default: 6 })
  swipeDuration = prop<string|number>({ default: 1000 })
}
@Options({
  name: "VgPickerColumn",
  emits: ["change"],
  watch: {
    defaultIndex(val) {
      this.setIndex(val);
    },
    columns: "setOptions"
  },
  computed: {
    baseOffset() {
      return (this.itemHeight * (this.count - 1)) / 2;
    },
    count() {
      return this.columns.length;
    }
  }
})
export default class VgPickerColumn extends mixins(VueGgy, EventEmulator).with(Props) {
  public static componentName = "VgPickerColumn";
  public options = deepClone(this.columns);
  public currentIndex = this.defaultIndex;
  public duration = 0;
  public offset = 0;
  onTransitionEnd() {
    this.stopMomentum();
  }
  stopMomentum() {
    this.moving = false;
    this.duration = 0;
    if (this.transitionEndTrigger) {
      this.transitionEndTrigger();
      this.transitionEndTrigger = null;
    }
  }
  handleItemClick(index: number): void {
    if (this.moving) {
      return;
    }
    this.duration = DEFAULT_DURATION;
    this.setIndex(index, true);
  }
  adjustIndex(index: number): number|undefined {
    index = range(index, 0, this.count);

    for (let i = index; i < this.count; i++) {
      if (!isOptionDisabled(this.options[i])) return i;
    }

    for (let i = index - 1; i >= 0; i--) {
      if (!isOptionDisabled(this.options[i])) return i;
    }
  }
  setOptions(options: any): void {
    if (JSON.stringify(options) !== JSON.stringify(this.options)) {
      this.options = deepClone(options);
      this.setIndex(this.defaultIndex);
    }
  }
  getSelectedItem(): ColumnObject {
    return this.options[this.currentIndex];
  }
  getIndexByOffset(offset: number): number {
    return range(Math.round(-offset / Number(this.itemHeight)), 0, this.count - 1);
  }
  momentum(distance: number, duration: number): void {
    const speed = Math.abs(distance / duration);
    distance = this.offset + (speed / 0.003) * (distance < 0 ? -1 : 1);
    const index = this.getIndexByOffset(distance);
    this.duration = +this.swipeDuration;
    this.setIndex(index, true);
  }
  setIndex(index: number, emitChange?: boolean): void {
    index = this.adjustIndex(index) || 0;
    const offset = -index * Number(this.itemHeight);
    const trigger = () => {
      if (index !== this.currentIndex) {
        this.currentIndex = index;
        if (emitChange) {
          this.$emit("change", this.options[index], index);
        }
      }
    };
    // trigger the change event after transitionend when moving
    if (this.moving && offset !== this.offset) {
      this.transitionEndTrigger = trigger;
    } else {
      trigger();
    }
    this.offset = offset;
  }
  drag() {
    const el = this.$refs.pickerColumn;
    if (!el) {
      return;
    }
    const that = this;
    this.bindEvent(el as EventTarget, {
      start() {
        if (that.moving) {
          const translateY = getElementsTranslate(that.$refs.wrapper as HTMLElement).y;
          that.offset = Math.min(0, translateY - that.baseOffset);
          that.startOffset = that.offset;
        } else {
          that.startOffset = that.offset;
        }
        that.duration = 0;
        that.transitionEndTrigger = null;
        that.touchStartTime = Date.now();
        that.momentumOffset = that.startOffset;
      },
      dragging() {
        if (that.direction === "vertical") {
          that.moving = true;
        }

        that.offset = range(
          that.startOffset + that.deltaY,
          -(that.count * Number(that.itemHeight)),
          Number(that.itemHeight)
        );
        const now = Date.now();
        if (now - that.touchStartTime > MOMENTUM_LIMIT_TIME) {
          that.touchStartTime = now;
          that.momentumOffset = that.offset;
        }
      },
      stop() {
        const distance = that.offset - that.momentumOffset;
        const duration = Date.now() - that.touchStartTime;
        const allowMomentum =
          duration < MOMENTUM_LIMIT_TIME &&
          Math.abs(distance) > MOMENTUM_LIMIT_DISTANCE;
        if (allowMomentum) {
          that.momentum(distance, duration);
          return;
        }

        const index = that.getIndexByOffset(that.offset);
        that.duration = DEFAULT_DURATION;
        that.setIndex(index, true);

        // compatible with desktop scenario
        // use setTimeout to skip the click event triggered after touchstart
        setTimeout(() => {
          that.moving = false;
        }, 0);
      }
    });
  }
  created() {
    this.setIndex(this.currentIndex);
  }
  mounted() {
    this.drag();
  }
  render() {
    const style = {
      transform: `translate3d(0, ${this.offset + this.baseOffset}px, 0)`,
      transitionDuration: `${this.duration}ms`,
      transitionProperty: this.duration ? "all" : "none",
      lineHeight: `${this.itemHeight}px`
    };
    return h("div", { class: "vg-picker-column", ref: "pickerColumn" }, {
      default: () => [
        h(
          "ul",
          { style, ref: "wrapper", onTransitionend: this.onTransitionEnd },
          Array.apply(null, polyfill(this.columns)).map((column: any, key: number, arr: any[]) => {
            const isObj = isObject(column);
            return h(
              "li",
              { onClick: this.handleItemClick.bind(this, key), key, class: [isObj && column.disabled ? "disabled" : ""] },
              { default: () => isObj ? column.value : column }
            );
          })
        )
      ]
    });
  }
}