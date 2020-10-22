/*
* @Author: Just be free
* @Date:   2020-10-21 18:26:11
* @Last Modified by:   Just be free
* @Last Modified time: 2020-10-22 10:21:13
* @E-mail: justbefree@126.com
*/
 /* eslint-disable */ 
let passiveSupported = false;
try {
  let options = Object.defineProperty({}, "passive", {
    get: function() {
      passiveSupported = true;
    }
  });
  window.addEventListener("test", () => {}, options);
} catch (err) {}
export const bind = (dom: EventTarget, type: string, fn: (ev: Event, args: any) => void, args: any, passive = true) => {
  const callback = (e: Event) => {
    fn(e, args);
  };
  dom.addEventListener(
    type,
    callback,
    passiveSupported ? { passive, capture: false } : false
  );
  return () => {
    dom.removeEventListener(type, callback);
  };
};
// https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener
export const on = (dom: EventTarget, type: string, fn: EventListener, passive = true) => {
  dom.addEventListener(
    type,
    fn,
    passiveSupported ? { passive, capture: false } : false
  );
};

export const off = (dom: EventTarget, type: string, fn: EventListener) => {
  dom.addEventListener(type, fn);
};

export const stopPropagation = (event: Event) => {
  event &&
    typeof event.stopPropagation === "function" &&
    event.stopPropagation();
};
export const preventDefault = (evnet: Event, isStopPropagation = false) => {
  if ((event && typeof event.cancelable !== "boolean") || (event as Event).cancelable) {
    (event as Event).preventDefault();
  }
  if (isStopPropagation) {
    stopPropagation(event as Event);
  }
};