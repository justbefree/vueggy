/*
* @Author: Just be free
* @Date:   2020-09-23 17:32:46
* @Last Modified by:   Just be free
* @Last Modified time: 2020-12-01 10:30:04
* @E-mail: justbefree@126.com
*/
const pkg = require("../../package.json");
import { Vue, mixins, props, emits, createDecorator, setup, Options } from "vue-class-component";
import { VNode } from "vue";
import { EventBus } from "../utils/event/bus";
import { on } from "../utils/event";
import { throttle } from "../utils";
export type VisibilityChangeStatus = "hidden" | "visible";
export default class VueGgy extends Vue {
  [propName: string]: any;
  public static windowEventsinitialized = false;
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
  public static visibilitychange(): void {
    on(window, "visibilitychange", () => {
      const status = document.visibilityState;
      EventBus.emit("window:visibilitychange", status as VisibilityChangeStatus);
    });
  }
  public static resize(): void {
    on(window, "resize", (ev: Event) => {
      throttle(() => {
        EventBus.emit("window:resize", ev);
      })();
    });
  }
  beforeCreate() {
    if (!VueGgy.windowEventsinitialized) {
      VueGgy.windowEventsinitialized = true;
      VueGgy.resize();
      VueGgy.visibilitychange();
    }
  }
}
export { Vue, mixins, props, emits, createDecorator, setup, Options };