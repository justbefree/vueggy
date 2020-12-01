/*
* @Author: Just be free
* @Date:   2020-11-25 14:12:12
* @Last Modified by:   Just be free
* @Last Modified time: 2020-11-30 17:00:24
* @E-mail: justbefree@126.com
*/
import VueGgy, { mixins, props, Options } from "../component/VueGgy";
import { loadImageAsync } from "../utils/lazyload";
import { h } from "vue";
const Props = props({});
@Options({
  name: "VgSwipeItem",
  inject: ["swipeParent"]
})
export default class VgSwipeItem extends mixins(Props, VueGgy) {
  public static componentName = "VgSwipeItem";
  public loaded = false;
  mounted() {
    const $el = this.$refs.swipeItem as HTMLElement;
    if (!$el) {
      return;
    }
    const imgs = $el.getElementsByTagName("img");
    const imgDOMs = Array.from(imgs);
    if (imgDOMs.length > 0) {
      loadImageAsync(imgDOMs).then(() => {
        this.loaded = true;
      }).catch(err => {
        console.error("There was an error while loading image:", err);
      });
    } else {
      this.loaded = true;
    }
  }
  render() {
    const { vertical, width, height, loadingText } = this.swipeParent;
    return h(
      "div",
      {
        ref: "swipeItem",
        style: { width: `${width}px`, height: `${height}px` },
        class: [
          "vg-swipe-item",
          this.loaded ? "loaded" : "loading",
          vertical ? "vertical" : "horizontal"
        ]
      },
      {
        default: () => [
          this.getSlots(),
          (!this.loaded) && h("div", { class: ["loading-mask"], style: { lineHeight: `${height}px` } }, { default: () => loadingText })
        ]
      }
    );
  }
}