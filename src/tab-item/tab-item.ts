/*
* @Author: Just be free
* @Date:   2020-11-10 10:45:01
* @Last Modified by:   Just be free
* @Last Modified time: 2020-12-01 10:18:13
* @E-mail: justbefree@126.com
*/
import VueGgy, { mixins, props, Options } from "../component/VueGgy";
import { h, withDirectives, vShow } from "vue";
const Props = props({
  title: String,
  disabled: Boolean,
  name: {
    type: String,
    required: true
  }
});
@Options({
  name: "VgTabItem",
  emits: [],
  inject: ["parentTab"]
})
export default class VgTabItem extends mixins(VueGgy, Props) {
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
