/*
* @Author: Just be free
* @Date:   2020-09-23 17:32:46
* @Last Modified by:   Just be free
* @Last Modified time: 2021-04-14 14:58:51
* @E-mail: justbefree@126.com
*/
const pkg = require("../../package.json");
import { Vue, mixins, prop, createDecorator, setup, Options } from "vue-class-component";
import { VNode } from "vue";
import { EventBus } from "../utils/event/bus";
import { on, off } from "../utils/event";
import { throttle } from "../utils";
export type VisibilityChangeStatus = "hidden" | "visible";
class Props {}
export default class VueGgy extends Vue.with(Props) {
  [propName: string]: any;
  private version = pkg.version;
  public static componentName = "VueGgy";
  getVersion(): string {
    return this.version;
  }
  getDomTree(): HTMLElement {
    return this.$el;
  }
  getSlots(slotName: string = "default"): VNode {
    const slots = this.$slots[slotName] && (typeof this.$slots[slotName] === "function") && (this.$slots[slotName] as Function)();
    return slots;
  }
  protected getFragmentChildren(tagName: string, children: VNode[]): VNode[] {
    const result = [] as VNode[];
    children && Array.isArray(children) && children.forEach((node: VNode) => {
      if (node && typeof node.type === "object") {
        if ((node.type as any).name === tagName) {
          result.push(node);
        }
      }
    });
    return result;
  }
  getCustomSlotsByTagName(tagName: string): VNode[] {
    const slots = this.getSlots();
    const components = [] as VNode[];
    slots && Array.isArray(slots) && slots.forEach((slot: VNode) => {
      if (slot && typeof slot.type === "object") {
        if ((slot.type as any).name === tagName) {
          components.push(slot);
        }
      } else if (slot && typeof slot.type === "symbol") {
        if (slot.type.toString() === "Symbol(Fragment)") {
          components.push(...this.getFragmentChildren(tagName, slot.children as Array<VNode>));
        }
      }
    });
    return components;
  }
  private visibilityChangeEvent(): void {
    const status = document.visibilityState;
    EventBus.emit("window:visibilitychange", status as VisibilityChangeStatus);
  }
  public bindVisibilityChange(): void {
    on(window, "visibilitychange", this.visibilityChangeEvent);
  }
  public unbindVisibilityChange(): void {
    off(window, "visibilitychange", this.visibilityChangeEvent);
  }
  private resizeEvent(ev: Event): void {
    throttle(() => {
      EventBus.emit("window:resize", ev);
    })();
  }
  public bindResize(): void {
    on(window, "resize", this.resizeEvent);
  }
  public unbindResize(): void {
    off(window, "resize", this.resizeEvent);
  }
}
export { Vue, mixins, prop, createDecorator, setup, Options };