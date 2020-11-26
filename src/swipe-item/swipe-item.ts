/*
* @Author: Just be free
* @Date:   2020-11-25 14:12:12
* @Last Modified by:   Just be free
* @Last Modified time: 2020-11-25 15:01:54
* @E-mail: justbefree@126.com
*/
import VueGgy, { mixins, props, Options } from "../component/VueGgy";
import { h } from "vue";
const Props = props({});
@Options({
  name: "VgSwipeItem",
  inject: ["swipeParent"]
})
export default class VgSwipeItem extends mixins(Props, VueGgy) {
  public static componentName = "VgSwipeItem";
  public loaded = true;
  render() {
    const { vertical, width, height } = this.swipeParent;
    return h(
      "div",
      {
        style: { width: `${width}px`, height: `${height}px` },
        class: [
          "vg-swipe-item",
          this.loaded ? "loaded" : "loading",
          vertical ? "vertical" : "horizontal"
        ]
      },
      this.loaded ? this.getSlots() : []
    );
  }
}