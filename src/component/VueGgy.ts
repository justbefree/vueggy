/*
* @Author: Just be free
* @Date:   2020-09-23 17:32:46
* @Last Modified by:   Just be free
* @Last Modified time: 2020-10-12 16:19:15
* @E-mail: justbefree@126.com
*/
const pkg = require("../../package.json");
import { Vue, mixins, props, emits, createDecorator, setup, Options } from "vue-class-component";
export default class VueGgy extends Vue {
  private version = pkg.version;
  public static componentName = "VueGgy";
  // Toast(options: any): void {}
  // Indicator(): void {}
  // Dialog(): void {}
  getVersion(): string {
    return this.version;
  }
  getDomTree(): HTMLElement {
    return this.$el;
  }
  getSlots(): any {
    const slots = this.$slots.default && (typeof this.$slots.default === "function") && this.$slots.default();
    return slots;
  }
}
export { Vue, mixins, props, emits, createDecorator, setup, Options };