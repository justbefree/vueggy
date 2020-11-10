/*
* @Author: Just be free
* @Date:   2020-11-10 10:45:01
* @Last Modified by:   Just be free
* @Last Modified time: 2020-11-10 18:32:05
* @E-mail: justbefree@126.com
*/
import VueGgy, { mixins, props, Options } from "../component/VueGgy";
import { h, withDirectives, vShow } from "vue";
const Props = props({
  title: String,
  disabled: Boolean
});
@Options({
  name: "VgTabItem",
  emits: [],
  inject: ["parentTab"],
  computed: {
    indexKey() {
      return this.parentTab.children.indexOf(JSON.stringify(this.getSlots()));
    }
  }
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
    ), [[vShow, currentTab === this.indexKey]]);
  }
}
