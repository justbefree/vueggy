/*
* @Author: Just be free
* @Date:   2020-09-23 16:16:46
* @Last Modified by:   Just be free
* @Last Modified time: 2021-04-13 15:29:33
* @E-mail: justbefree@126.com
*/
import VueGgy, { Options, mixins, prop } from "../component/VueGgy";
import Base642Svg from "../utils/dom/base642svg";
import { getPropertyValue } from "../utils/dom/style";
import { h } from "vue";
import svgs from "./svgs";
class Props {
  name!: string
  size = prop<string|number>({ default: 26 })
  cursor = prop<string>({ default: "auto" })
  adjustColor = prop<boolean>({ default: false })
}
@Options({
  name: "VgIcon"
})
export default class VgIcon extends mixins(VueGgy).with(Props) {
  public static componentName = "VgIcon";
  public static svgs = svgs;
  public svgbase64 = VgIcon.svgs[this.name as string];
  public static extend(options: typeof svgs) {
    VgIcon.svgs = { ...VgIcon.svgs, ...options };
  }
  adjustColorHandler(): void {
    if (this.adjustColor) {
      const color: string = getPropertyValue(this.$el.parentNode, "color");
      this.svgbase64 = Base642Svg.fill(this.svgbase64, color);
    }
  }
  mounted() {
    this.adjustColorHandler();
  }
  render() {
    let svgString = VgIcon.svgs[this.name as string];
    if (this.adjustColor) {
      svgString = this.svgbase64;
    }
    return h("i", { class: ["vg-iconfont-wrap", this.cursor] }, {
      default: () => [
        h("img", { src: svgString, class: ["vg-iconfont", `vg-iconfont-size-${this.size}`] }, { default: () => "" })
      ] 
    });
  }
}
