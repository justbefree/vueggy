/*
* @Author: Just be free
* @Date:   2020-09-22 16:00:52
* @Last Modified by:   Just be free
* @Last Modified time: 2020-09-23 11:54:33
* @E-mail: justbefree@126.com
*/
import { props, mixins, Vue } from "vue-class-component";
import { capitalize, camelize } from "../utils";
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
export default class VgFlexItem extends mixins(Vue, Props) {
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
      ? `align-self-${capitalize(this.alignSelf)}`
      : "align-self-auto";
    return h("div", { class: ["yn-flex-item", className], style: { flex: this.flex, order: this.order } }, [slots]);
  }
}
