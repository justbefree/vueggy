/*
* @Author: Just be free
* @Date:   2020-11-30 14:30:08
* @Last Modified by:   Just be free
* @Last Modified time: 2020-11-30 14:39:35
* @E-mail: justbefree@126.com
*/
import VueGgy, { mixins, props, Options } from "../component/VueGgy";
import { h } from "vue";
const Props = props({});
@Options({
  name: "VgSubmitBarValue"
})
export default class VgSubmitBarValue extends mixins(Props, VueGgy) {
  public static componentName = "VgSubmitBarValue";
  render() {
    return h("div", { class: ["vg-submit-action-value"] }, { default: () => [this.getSlots()] });
  }
}
