/*
* @Author: Just be free
* @Date:   2020-11-10 10:45:01
* @Last Modified by:   Just be free
* @Last Modified time: 2021-04-14 13:51:03
* @E-mail: justbefree@126.com
*/
import VueGgy, { mixins, Options } from "../component/VueGgy";
import { h, withDirectives, vShow } from "vue";
class Props {
  title?: string
  disabled?: boolean
  name!: string
}
@Options({
  name: "VgTabItem",
  emits: [],
  inject: ["parentTab"]
})
export default class VgTabItem extends mixins(VueGgy).with(Props) {
  public static componentName = "VgTabItem";
  render() {
    const { currentTab } = this.parentTab;
    return withDirectives(h(
      "div",
      {
        class: ["vg-tab-item-content"],
      },
      { default: () => this.getSlots() }
    ), [[vShow, currentTab === this.name]]);
  }
}
