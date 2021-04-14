/*
* @Author: Just be free
* @Date:   2020-09-22 16:00:52
* @Last Modified by:   Just be free
* @Last Modified time: 2021-04-13 15:29:19
* @E-mail: justbefree@126.com
*/
import VueGgy, { mixins, prop, Options } from "../component/VueGgy";
import { hyphenate, camelize } from "../utils";
import { h } from "vue";
class Props {
  alignSelf = prop<string>({ default: "auto" })
  flex = prop<string|number>({ default: "initial" })
  order = prop<number>({ default: 0 })
}
@Options({
  name: "VgFlexItem"
})
export default class VgFlexItem extends mixins(VueGgy).with(Props) {
  public static componentName = "VgFlexItem";
  isValidAlignSelfValue(): boolean {
    const VALIDE_ALIGN_SELF_VALUE = [
      "auto",
      "flexStart",
      "center",
      "flexEnd",
      "baseline",
      "stretch"
    ];
    return VALIDE_ALIGN_SELF_VALUE.indexOf(camelize(this.alignSelf)) > -1;
  }
  render() {
    const className = this.isValidAlignSelfValue()
      ? `align-self-${hyphenate(this.alignSelf)}`
      : "align-self-auto";
    return h("div", { class: ["vg-flex-item", className], style: { flex: this.flex, order: this.order } }, {
      default: () => this.getSlots()
    });
  }
}
