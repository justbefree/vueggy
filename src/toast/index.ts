/*
* @Author: Just be free
* @Date:   2020-09-23 16:16:39
* @Last Modified by:   Just be free
* @Last Modified time: 2020-09-30 13:11:31
* @E-mail: justbefree@126.com
*/
import VgToast from "./toast";
import { isString } from "../utils";
import { renderDOM } from "../component/renderDOM";
export interface ToastOptions {
  message: string;
  position: "middle" | "bottom" | "top";
  duration: number;
}
const toastPool: Array<typeof VgToast> = [];
const getInstance = () => {
  if (toastPool.length > 0) {
    const instance = toastPool[0];
    toastPool.splice(0, 1);
    return instance;
  }
  return renderDOM(VgToast, {}, []);
};
const removeDom = (event: Event) => {
  const target = event.target as HTMLElement;
  if (target.parentNode) {
    target.parentNode.removeChild(target);
  }
};
const Toast = (options: ToastOptions) => {
  const { message, position, duration = 3000 } = options;
  const instance = getInstance() as any;
  console.log("instance", instance);
  const ctx = instance.ctx;
  ctx.setClosed(false);
  clearTimeout(ctx.timer);
  ctx.setMessage(message || (isString(options) ? options : ""));
  ctx.setPosition(position);
  console.log(ctx, ctx.$el);
  document.body.appendChild(ctx.$el as HTMLElement);
  ctx.$nextTick(() => {
    ctx.setVisiable(true);
    ctx.$el.removeEventListener("transitionend", removeDom, false);
    ~duration &&
      (ctx.timer = setTimeout(() => {
        if (ctx.closed) {
          return false;
        }
        ctx.close(() => {
          ctx.$el.addEventListener("transitionend", removeDom, false);
        });
      }, duration));
  });
  return ctx;
};

export default Toast;
