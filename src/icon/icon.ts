/*
* @Author: Just be free
* @Date:   2020-09-23 16:16:46
* @Last Modified by:   Just be free
* @Last Modified time: 2020-09-30 17:02:58
* @E-mail: justbefree@126.com
*/
import VueGgy, { Options, mixins, props } from "../component/VueGgy";
import { Transition, h, withDirectives, vShow } from "vue";
import svgs from "./svgs";
const Props = props({
  name: String,
  size: {
    type: [Number, String],
    default: 26
  }
});
@Options({
  name: "VgIcon"
})
export default class VgIcon extends mixins(VueGgy, Props) {
  public static componentName = "VgIcon";
  private svgs = svgs;
  handleClick(): void {
    this.$emit("click");
  }
  getSvg() {}
  render() {
    return h("i", { class: ["vg-iconfont-wrap"] },
      [
        h("img", { src: this.svgs[this.name as string], class: ["vg-iconfont", `vg-iconfont-size-${this.size}`] }, [])
      ]
    );
  }
}
