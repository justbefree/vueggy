/*
* @Author: Just be free
* @Date:   2020-09-23 16:16:46
* @Last Modified by:   Just be free
* @Last Modified time: 2020-09-28 10:07:50
* @E-mail: justbefree@126.com
*/
import VueGgy from "../component/VueGgy";
import { Transition, h, withDirectives, vShow } from "vue";
export default class VgToast extends VueGgy {
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
