/*
* @Author: Just be free
* @Date:   2021-01-20 09:54:38
* @Last Modified by:   Just be free
* @Last Modified time: 2021-04-14 14:11:23
* @E-mail: justbefree@126.com
*/
import VueGgy, { mixins, Options } from "../component/VueGgy";
import { h } from "vue";
class Props {}
@Options({
  name: "VgSubmitBarText"
})
export default class VgSubmitBarText extends mixins(VueGgy).with(Props) {
  public static componentName = "VgSubmitBarText";
  render() {
    return h("div", { class: ["vg-submit-bar-text"] }, {
      default: () => this.getSlots()
    });
  }
}
