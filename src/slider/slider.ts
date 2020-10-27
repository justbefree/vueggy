/*
* @Author: Just be free
* @Date:   2020-10-23 16:35:16
* @Last Modified by:   Just be free
* @Last Modified time: 2020-10-27 18:28:05
* @E-mail: justbefree@126.com
*/
import { h, withDirectives, vShow, VNode, nextTick, Transition } from "vue";
import VueGgy, { mixins, props, Options } from "../component/VueGgy";
import { EventEmulator, EventCallbackOptions } from "../component/EventEmulator";
import { isObject, getCharLength, hasOwnProperty } from "../utils";
import { preventDefault } from "../utils/event";
import { getOffset } from "../utils/dom";
const Props = props({
  modelValue: [Number, Object],
  tip: Boolean,
  dragIcon: String,
  min: {
    type: [String, Number],
    default: 0
  },
  max: {
    type: [String, Number],
    default: 100
  },
  step: {
    type: [String, Number],
    default: 1
  },
  parse: {
    type: Function,
    default: (e: any): any => {
      return e;
    }
  }
});
@Options({
  name: "VgSlider",
  emits: ["update:modelValue"],
  computed: {
    maxVlue() {
      return Number(this.max) - Number(this.min);
    },
    startRoundValue() {
      return Math.round((Number(this.max) * this.startLeft) / this.width);
    },
    endRoundValue() {
      return Math.round((Number(this.max) * this.endLeft) / this.width);
    },
    startBarStyle() {
      const transition = this.dragging ? "none 0s ease 0s" : null;
      return {
        width: `${Math.round((100 * this.startLeft) / this.width)}%`,
        transition
      };
    },
    endBarStyle() {
      const transition = this.dragging ? "none 0s ease 0s" : null;
      return {
        width: `${Math.round((100 * this.endLeft) / this.width)}%`,
        transition
      };
    }
  }
})
export default class VgSlider extends mixins(VueGgy, Props, EventEmulator) {
  public static componentName = "VgSlider";
  public startLeft = 0;
  public endLeft = 0;
  public width = 0;
  public dragging = false;
  public disStep = 0;
  public startValue = 0;
  public endValue = 0;
  public tipValueSize = 0;
  genSider(type: string): VNode[] {
    if (type === "start") {
      if (!isObject(this.modelValue)) {
        return [];
      }
    }
    const dragIcon = this.dragIcon
      ? h("img", { src: this.dragIcon }, [])
      : "";
    const tipValue = this.parse(this[`${type}Value`]);
    const tipValueSize = getCharLength(String(tipValue)) * 7;
    const slider = this.$refs[`${type}Slider`];
    const sliderOffsetWidth = (slider && (slider as HTMLElement).offsetWidth) || 0;
    let tip: null|VNode = null;
    if (this.tip) {
      tip = h(
        "div",
        {
          style: {
            width: `${tipValueSize}px`,
            left: `${(-1 * tipValueSize) / 2 + sliderOffsetWidth / 2 - 3}px`
          },
          class: ["vg-slider-button-tip"]
        },
        [h("span", {}, { default: () => tipValue })]
      );
    }
    return [h(
      "div",
      {
        ref: `${type}SliderBar`,
        class: ["vg-slider-bar", type],
        style: this[`${type}BarStyle`]
      },
      {
        default: () => [
          h(
            "div",
            {
              ref: `${type}Slider`,
              class: ["vg-slider-button", this.dragIcon ? "drag-icon" : ""]
            },
            {
              default: () => [dragIcon, tip]
            }
          )
        ]
      }
    )];
  }
  transformValueToDistance(value = 0): number {
    return (this.width * value) / this.maxVlue;
  }
  transformDistanceToValue(distance = 0): number {
    return Math.round((this.maxVlue * distance) / this.width);
  }
  getNearestDirection(real: number): string {
    const right = this.endLeft - real;
    const left = real - this.startLeft;
    return Math.min(left, right) === right ? "end" : "start";
  }
  set(value = 0): void {
    this.$emit("update:modelValue", value);
  }
  handleBarClick() {
    const that = this;
    this.bindEvent(this.$el, {
      stop(event: EventCallbackOptions) {
        preventDefault(event.e, true);
        if (event.e && (event.e as TouchEvent).changedTouches && (event.e as TouchEvent).changedTouches[0]) {
          const disX =
            (event.e as TouchEvent).changedTouches[0].clientX - getOffset(event.target).left;
          let real = Math.round(disX / that.disStep) * that.disStep;
          // 防止滑块超出范围
          if (real >= that.width) {
            real = that.width;
          } else if (real <= 0) {
            real = 0;
          }
          const value = that.transformDistanceToValue(real);
          if (isObject(that.modelValue)) {
            if (value >= that.endValue) {
              that.endValue = value;
              that.endLeft = real;
            } else if (value <= that.startValue) {
              that.startValue = value;
              that.startLeft = real;
            } else if (value > that.startValue && value < that.endValue) {
              const direction = that.getNearestDirection(real);
              that[`${direction}Value`] = value;
              that[`${direction}Left`] = real;
            }
          } else {
            that.endValue = value;
            that.endLeft = real;
          }
          that.emit();
        }
      }
    });
  }
  drag(type: string): void {
    const el = this.$refs[`${type}Slider`];
    if (!el) {
      return;
    }
    const that = this;
    let barWidth = 0;
    const value = this.modelValue;
    const width = this.$el.offsetWidth;
    let iValue;
    if (isObject(value)) {
      if (hasOwnProperty(value, "start") && hasOwnProperty(value, "end")) {
        iValue = this.modelValue[type];
      } else {
        return;
      }
    } else {
      iValue = this.modelValue;
    }
    that[`${type}Value`] = iValue;
    this.disStep =
      Math.round(width / (Number(this.max) - 1)) * Number(this.step);
    this.width = width;
    this[`${type}Left`] = this.transformValueToDistance(iValue);
    this.bindEvent(el, {
      start(event: EventCallbackOptions) {
        preventDefault(event.e, true);
        barWidth = (that.$refs[`${type}SliderBar`] as HTMLElement).offsetWidth;
      },
      dragging(event: EventCallbackOptions) {
        preventDefault(event.e, true);
        that.dragging = true;
        that[`${type}Left`] =
          Math.round((barWidth + that.deltaX) / that.disStep) * that.disStep;
        if (that[`${type}Left`] >= that.width) {
          that[`${type}Left`] = that.width;
        }
        if (that[`${type}Left`] <= 0) {
          that[`${type}Left`] = 0;
        }
        if (isObject(that.value)) {
          if (type === "start") {
            if (that.startLeft >= that.endLeft) {
              that.startLeft = that.endLeft;
            }
          } else if (type === "end") {
            if (that.endLeft <= that.startLeft) {
              that.endLeft = that.startLeft;
            }
          }
        }
        that[`${type}Value`] = that[`${type}RoundValue`];
        that.emit();
      },
      stop(event: EventCallbackOptions) {
        preventDefault(event.e, true);
        that.dragging = false;
        that.emit();
      }
    });
  }
  emit() {
    if (isObject(this.modelValue)) {
      this.$emit("update:modelValue", {
        start: this.startRoundValue,
        end: this.endRoundValue
      });
    } else {
      this.$emit("update:modelValue", this.endRoundValue);
    }
  }
  init() {
    this.drag("start");
    this.drag("end");
    this.handleBarClick();
  }
  mounted() {
    this.init();
  }
  render() {
    return h("div", { class: ["vg-slider"] }, {
      default: () => [
        this.genSider("start"),
        this.genSider("end")
      ]
    });
  }
}
