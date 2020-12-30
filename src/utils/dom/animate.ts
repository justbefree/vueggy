/*
* @Author: Just be free
* @Date:   2020-11-25 15:53:24
* @Last Modified by:   Just be free
* @Last Modified time: 2020-12-30 16:33:25
* @E-mail: justbefree@126.com
*/

export const move = (obj: HTMLElement, json: any, fn: Function, div: number = 8): void => {
  let timer: number = -1;
  clearInterval(timer);
  let iCurrent = 0;
  let iSpeed = 0;
  timer = setInterval(() => {
    let finished = true;
    for (let attr in json) {
      let iTarget = json[attr];
      if (attr === "opacity") {
        iCurrent = Math.round(parseFloat(window.getComputedStyle(obj as Element, null).getPropertyValue("opacity")) * 100);
      } else {
        iCurrent = parseInt(window.getComputedStyle(obj as Element, null).getPropertyValue(attr));
      }
      iSpeed = (iTarget - iCurrent) / div;
      iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
      if (iCurrent !== iTarget) {
        finished = false;
        if (attr === "opacity") {
          obj.setAttribute("style", `opacity: ${(iCurrent + iSpeed) / 100}`);
        } else {
          obj.setAttribute("style", `${attr}: ${iCurrent + iSpeed}px`);
        }
      }
    }
    if (finished) {
      clearInterval(timer);
      fn && typeof fn === "function" && fn.call(obj);
    }
  }, 30);
};
