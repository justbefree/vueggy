/*
* @Author: Just be free
* @Date:   2020-09-23 16:16:39
* @Last Modified by:   Just be free
* @Last Modified time: 2020-09-30 15:41:31
* @E-mail: justbefree@126.com
*/
import VgToast from "./toast";
import { isString } from "../utils";
import { renderDOM } from "../component/renderDOM";
import { nextTick } from "vue";
export interface ToastOptions {
  message: string;
  position: "middle" | "bottom" | "top";
  duration: number;
}
const removeDom = (event: Event) => {
  const target = event.target as HTMLElement;
  if (target.parentNode) {
    target.parentNode.removeChild(target);
  }
};
const Toast = (options: ToastOptions) => {
  const { message, position, duration = 3000 } = options;
  const computedMessage = message || (isString(options) ? options : "");
  const instance = renderDOM(VgToast, { message: computedMessage, position }, []);
  const ctx = instance.ctx;
  ctx.setClosed(false);
  clearTimeout(ctx.timer);
  document.body.appendChild(ctx.getDomTree() as HTMLElement);
  console.log("ctx = ", ctx);
  nextTick(() => {
    ctx.setVisiable(true);
    ctx.getDomTree().removeEventListener("transitionend", removeDom, false);
    ~duration &&
      (ctx.timer = setTimeout(() => {
        if (ctx.closed) {
          return false;
        }
        ctx.close(() => {
          ctx.getDomTree().addEventListener("transitionend", removeDom, false);
        });
      }, duration));
  });
  return ctx;
};

export default Toast;
