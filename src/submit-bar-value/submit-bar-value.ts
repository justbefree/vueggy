/*
* @Author: Just be free
* @Date:   2020-11-30 14:30:08
* @Last Modified by:   Just be free
* @Last Modified time: 2021-04-14 14:11:47
* @E-mail: justbefree@126.com
*/
import VueGgy, { mixins, Options } from "../component/VueGgy";
import { h } from "vue";
class Props {}
@Options({
  name: "VgSubmitBarValue"
})
export default class VgSubmitBarValue extends mixins(VueGgy).with(Props) {
  public static componentName = "VgSubmitBarValue";
  render() {
    return h("div", { class: ["vg-submit-action-value"] }, { default: () => [this.getSlots()] });
  }
}
