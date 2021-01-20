/*
* @Author: Just be free
* @Date:   2021-01-20 09:54:38
* @Last Modified by:   Just be free
* @Last Modified time: 2021-01-20 10:28:52
* @E-mail: justbefree@126.com
*/
import VueGgy, { mixins, props, Options } from "../component/VueGgy";
import { h } from "vue";

const Props = props({});
@Options({
  name: "VgSubmitBarText"
})
export default class VgSubmitBarText extends mixins(Props, VueGgy) {
  public static componentName = "VgSubmitBarText";
  render() {
    return h("div", { class: ["vg-submit-bar-text"] }, {
      default: () => this.getSlots()
    });
  }
}
