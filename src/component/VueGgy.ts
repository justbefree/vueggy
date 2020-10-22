/*
* @Author: Just be free
* @Date:   2020-09-23 17:32:46
* @Last Modified by:   Just be free
* @Last Modified time: 2020-10-22 11:02:11
* @E-mail: justbefree@126.com
*/
const pkg = require("../../package.json");
import { Vue, mixins, props, emits, createDecorator, setup, Options } from "vue-class-component";
import { VNode } from "vue";
export default class VueGgy extends Vue {
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
}
export { Vue, mixins, props, emits, createDecorator, setup, Options };