/*
* @Author: Just be free
* @Date:   2020-11-02 17:10:04
* @Last Modified by:   Just be free
* @Last Modified time: 2020-11-02 17:51:59
* @E-mail: justbefree@126.com
*/
import VueGgy, { mixins, props, Options } from "../component/VueGgy";
import { EventEmulator, EventCallbackOptions } from "../component/EventEmulator";
import { preventDefault } from "../utils/event";
import { getScroller } from "../utils/dom/scroller";
import { getScrollTop } from "../utils/dom";
import { h } from "vue";
import VgSpin from "../spin";
const Props = props({
  loadingText: String,
  draggingTip: {
    type: String,
    default: "松手下拉刷新",
  },
  loading: Boolean
});
@Options({
  name: "VgPullRefresh"
})
export default class VgPullRefresh extends mixins(VueGgy, Props, EventEmulator) {
  public static componentName = "VgPullRefresh";
  public className = "";
  public dragging = false;
  public scrollElement: null|HTMLElement = null;
  public scrollTop = 0;
  genLoading() {
    if (this.loading) {
      return h("div", { class: ["vg-pull-refresh-loading"] }, {
        default: () => [
          h("span", {}, [this.loadingText]),
          h(VgSpin, { type: "tripleBounce", size: 40 }, { default: () => [] }),
        ]
      });
    }
  }
  genDraggingText() {
    if (this.dragging && this.deltaY >= 20) {
      return h("div", { class: ["vg-pull-refresh-draggin-text"] }, {
        default: () => [
          h("span", {}, { default: () => [this.draggingTip] }),
        ]
      });
    }
  }
  handleScroll(e: Event) {
    this.scrollTop = getScrollTop(e.target as HTMLElement);
  }
  scroll() {
    this.scrollElement = getScroller(this.$el);
    this.scrollElement.addEventListener("scroll", this.handleScroll, false);
  }
  pull() {
    this.scroll();
    const that = this;
    this.bindEvent(this.$el, {
      dragging(event: EventCallbackOptions) {
        const { target } = event;
        if (!that.loading && that.deltaY > 0 && that.scrollTop <= 10) {
          that.dragging = true;
          that.className = "none dragging";
          target.style.transform = `translate3D(0, ${that.bounceDeltaY}px, 0)`;
        }
      },
      stop(event: EventCallbackOptions) {
        if (!that.loading && that.deltaY > 0 && that.scrollTop <= 10) {
          that.$emit("pullrefresh", true);
          const { target } = event;
          that.className = "";
          that.dragging = false;
          target.style.transform = "translate3D(0, 0, 0)";
        }
      },
    });
  }
  mounted() {
    this.pull();
  }
  beforeUnmount() {
    (this.scrollElement as HTMLElement).removeEventListener("scroll", this.handleScroll, false);
  }
  render() {
    return h("div", { class: ["vg-pull-refresh", this.className] }, {
      default: () => [
        this.genLoading(),
        this.genDraggingText(),
        this.getSlots()
      ]
    });
  }
}
