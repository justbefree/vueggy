/*
* @Author: Just be free
* @Date:   2020-11-30 13:42:13
* @Last Modified by:   Just be free
* @Last Modified time: 2020-11-30 13:50:25
* @E-mail: justbefree@126.com
*/
import VueGgy, { mixins, props, Options } from "../component/VueGgy";
import { h } from "vue";
const Props = props({});
@Options({
  name: "VgSubmitBarPopupContent"
})
export default class VgSubmitBarPopupContent extends mixins(Props, VueGgy) {
  public static componentName = "VgSubmitBarPopupContent";
  render() {
    return h("div", { class: ["vg-submit-action-popup-content"] }, {
      default: () => [this.getSlots()]
    });
  }
}
