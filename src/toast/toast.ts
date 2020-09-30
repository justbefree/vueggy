/*
* @Author: Just be free
* @Date:   2020-09-23 16:16:46
* @Last Modified by:   Just be free
* @Last Modified time: 2020-09-30 14:48:05
* @E-mail: justbefree@126.com
*/
import VueGgy, { Options } from "../component/VueGgy";
import { Transition, h, withDirectives, vShow } from "vue";
@Options({
  name: "VgToast"
})
export default class VgToast extends VueGgy {
  public static componentName = "VgToast";
  public visible = false;
  public position = "middle";
  public closed = false;
  public timer = 0;
  public message = "";
  setPosition(position = "bottom"): void {
    const validPosition = ["bottom", "middle", "top"];
    if (validPosition.indexOf(position) > -1) {
      this.position = position;
    }
  }
  setVisiable(v: boolean): void {
    this.visible = v;
  }
  setMessage(m: string): void {
    this.message = m;
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
    return h(Transition, { name: "yn-toast-pop" }, [
      withDirectives(h(
        "div",
        {
          class: ["yn-toast-container", `located-at-${this.position}`]
        },
        [h("span", { class: "toast-text" }, [this.message])]
      ), [[vShow, this.visible]])
    ]);
  }
}
