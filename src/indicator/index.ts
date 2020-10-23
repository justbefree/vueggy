/*
* @Author: Just be free
* @Date:   2020-10-23 11:33:06
* @Last Modified by:   Just be free
* @Last Modified time: 2020-10-23 15:40:50
* @E-mail: justbefree@126.com
*/
import { renderDOM } from "../component/renderDOM";
import VgIndicator from "./indicator";
import { nextTick } from "vue";
let ctx: null|VgIndicator = null;
export interface IndicatorOptions {
  text: string;
  spinType?: string;
  spinColor?: string;
  background?: string;
  size?: number|string;
  lockScreen?: boolean;
  transparent?: boolean;
}
export default {
  bodyOverflow: "",
  lockScreen: false,
  open(options: IndicatorOptions): void {
    const defaultOptions = { text: "", spinColor: "#ccc", spinType: "snake", background: "", size: 40, lockScreen: false, transparent: true };
    const props = Object.assign(defaultOptions, options);
    const instance = renderDOM(VgIndicator, props, () => {});
    this.lockScreen = options.lockScreen as boolean;
    ctx = instance.ctx;
    if (options.lockScreen) {
      this.bodyOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
    }
    document.body.appendChild((ctx as VgIndicator).getDomTree());
    nextTick(() => {
      (ctx as VgIndicator).setVisible(true);
    });
  },
  close(): void {
    if (ctx) {
      if (this.lockScreen) {
        document.body.style.overflow = this.bodyOverflow;
      }
      (ctx as VgIndicator).setVisible(false);
    }
  }
}
