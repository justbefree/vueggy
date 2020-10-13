/*
* @Author: Just be free
* @Date:   2020-09-23 16:16:46
* @Last Modified by:   Just be free
* @Last Modified time: 2020-10-12 15:49:19
* @E-mail: justbefree@126.com
*/
import VueGgy, { Options, mixins, props } from "../component/VueGgy";
import { Transition, h, withDirectives, vShow } from "vue";
const Props = props({
  position: {
    type: String,
    default: "middle",
    validator: function(value: string) {
      return ["bottom", "middle", "top"].indexOf(value) !== -1;
    }
  },
  message: String
});
@Options({
  name: "VgToast"
})
export default class VgDialog extends mixins(VueGgy, Props) {
  public static componentName = "VgToast";
  public visible = false;
  public closed = false;
  public timer = 0;
  setVisiable(v: boolean): void {
    this.visible = v;
  }
  setClosed(c: boolean): void {
    this.closed = c;
  }
  close(callback?: () => void): void {
    this.closed = true;
    this.visible = false;
    callback && (typeof callback === "function") && callback();
  }
  render() {
    return h(Transition, { name: "vg-toast-pop" }, [
      withDirectives(h(
        "div",
        {
          class: ["vg-toast-container", `located-at-${this.position}`]
        },
        [h("span", { class: "toast-text" }, [this.message])]
      ), [[vShow, this.visible]])
    ]);
  }
}
