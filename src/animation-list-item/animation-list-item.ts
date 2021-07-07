/*
* @Author: Just be free
* @Date:   2020-11-19 17:56:43
* @Last Modified by:   Just be free
* @Last Modified time: 2021-07-07 15:08:33
* @E-mail: justbefree@126.com
*/
import VueGgy, { mixins, prop, Options } from "../component/VueGgy";
import { h } from "vue";
class Props {
  height?: string|number
}
@Options({
  name: "VgAnimationListItem"
})
export default class VgAnimationListItem extends mixins(VueGgy).with(Props) {
  public static componentName = "VgAnimationListItem";
  render() {
    return h("div", { class: ["vg-animation-list-item"], style: { height: `${this.height}px` } }, {
      default: () => [this.getSlots()]
    });
  }
}
