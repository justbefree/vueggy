/*
* @Author: Just be free
* @Date:   2020-09-28 11:18:21
* @Last Modified by:   Just be free
* @Last Modified time: 2021-04-13 16:20:03
* @E-mail: justbefree@126.com
*/
import VueGgy, { mixins, prop, Options } from "../component/VueGgy";
import { hyphenate } from "../utils";
import { getScroller } from "../utils/dom/scroller";
import { getOffset, getScrollTop } from "../utils/dom";
import { h, VNode } from "vue";
const fixedStyle = /fixed/i;

class Props {
  offsetTop = prop<string|number>({ default: 0 })
  zIndex = prop<string|number>({ default: 0 })
  container!: HTMLElement
  sticky = prop<boolean>({ default: true })
}
@Options({
  name: "VgSticky",
  emits: ["scroll"]
})
export default class VgSticky extends mixins(VueGgy).with(Props) {
  public static componentName = "VgSticky";
  public fixed = false;
  public top = 0;
  public containerTop = 0;
  public scrollElement = <HTMLElement>(document.createElement("div"));
  mounted() {
    const el = this.getDomTree();
    this.scrollElement = getScroller(el);
    this.top = getOffset(el).top;
    this.scrollElement.addEventListener("scroll", this.handleScroll, false);
  }
  handleScroll(e: Event) {
    const dom = this.getDomTree();
    const { position } = window.getComputedStyle(dom);
    if (!fixedStyle.test(position)) {
      this.top = getOffset(dom).top;
    }
    const { container, offsetTop } = this;
    const scrollTop = getScrollTop(e.target as HTMLElement);
    const diff = this.top - scrollTop;
    this.$emit("scroll", { el: dom, scrollTop, offsetTop: diff });
    if (container && (container as HTMLElement).nodeType && (container as HTMLElement).nodeType === 1) {
      this.containerTop = getOffset(container as HTMLElement).top;
      const clientHeight = container.clientHeight;
      if (
        this.containerTop - scrollTop <= 0 &&
        this.containerTop +
          clientHeight -
          scrollTop -
          this.$el.clientHeight >=
          0
      ) {
        this.fixed = true;
      } else {
        this.fixed = false;
      }
    } else {
      if (diff <= offsetTop) {
        this.fixed = true;
      } else {
        this.fixed = false;
      }
    }
  }
  render() {
    const slots = this.getSlots();
    return h(
      "div",
      {
        style: { top: `${this.offsetTop}px`, zIndex: this.zIndex },
        class: ["vg-sticky", this.sticky && this.fixed ? "vg-sticky-fixed" : ""]
      },
      { default: () => slots }
    );
  }
}
