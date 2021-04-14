/*
* @Author: Just be free
* @Date:   2020-11-30 13:42:13
* @Last Modified by:   Just be free
* @Last Modified time: 2021-04-14 14:11:05
* @E-mail: justbefree@126.com
*/
import VueGgy, { mixins, Options } from "../component/VueGgy";
import { h } from "vue";
class Props {}
@Options({
  name: "VgSubmitBarPopupContent"
})
export default class VgSubmitBarPopupContent extends mixins(VueGgy).with(Props) {
  public static componentName = "VgSubmitBarPopupContent";
  render() {
    return h("div", { class: ["vg-submit-action-popup-content"] }, {
      default: () => [this.getSlots()]
    });
  }
}
