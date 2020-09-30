/*
* @Author: Just be free
* @Date:   2020-09-22 16:00:52
* @Last Modified by:   Just be free
* @Last Modified time: 2020-09-30 11:35:16
* @E-mail: justbefree@126.com
*/
import VueGgy, { mixins, props, Options } from "../component/VueGgy";
import { hyphenate, camelize } from "../utils";
import { h } from "vue";
const Props = props({
  alignSelf: {
    type: String,
    default: "auto"
  },
  flex: {
    type: [String, Number],
    default: "initial"
  },
  order: {
    type: Number,
    default: 0
  }
});
@Options({
  name: "VgFlexItem"
})
export default class VgFlexItem extends mixins(VueGgy, Props) {
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
    const slots = this.$slots.default && (typeof this.$slots.default === "function") && this.$slots.default();
    const className = this.isValidAlignSelfValue()
      ? `align-self-${hyphenate(this.alignSelf)}`
      : "align-self-auto";
    return h("div", { class: ["vg-flex-item", className], style: { flex: this.flex, order: this.order } }, [slots]);
  }
}
