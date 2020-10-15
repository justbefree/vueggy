/*
* @Author: Just be free
* @Date:   2020-09-28 18:14:16
* @Last Modified by:   Just be free
* @Last Modified time: 2020-10-15 11:38:45
* @E-mail: justbefree@126.com
*/

const hasClass = (dom: HTMLElement, className: string): boolean => {
  return !!dom.className.match(new RegExp("(\\s|^)" + className + "(\\s|$)"));
};
export const addClass = (dom: HTMLElement, className: string): void=> {
  if (!hasClass(dom, className)) {
    dom.className += " " + className;
  }
};
const remove = (dom: HTMLElement, className: string): void => {
  if (hasClass(dom, className)) {
    const reg = new RegExp("(\\s|^)" + className + "(\\s|$)");
    dom.className = dom.className.replace(reg, " ");
  }
};
// 获取scrollTop值
export const getScrollTop = (dom: HTMLElement): number => {
  if (dom && dom.nodeType && dom.nodeType === 9) {
    return Math.max(document.documentElement.scrollTop, window.pageYOffset, document.body.scrollTop);
  }
  let t = dom.scrollTop;
  while (dom.offsetParent) {
    dom = dom.offsetParent as HTMLElement;
    t += dom.scrollTop;
  }
  return t;
};
export interface OffsetValue {
  top: number;
  left: number;
}
export const getOffset = (element: HTMLElement): OffsetValue => {
  let top = element.offsetTop;
  let left = element.offsetLeft;
  let current = element.offsetParent as HTMLElement;
  while (current !== null) {
    let translate = getElementsTranslate(current);
    top += (current.offsetTop + translate.y);
    left += (current.offsetLeft + translate.x);
    current = current.offsetParent as HTMLElement;
  }
  return { top, left };
};
export interface TranslateVlue {
  x: number;
  y: number;
}
// 获取translateY的值
export const getElementsTranslate = (element: HTMLElement): TranslateVlue => {
  const style = window.getComputedStyle(element);
  const transform = style.transform || style.webkitTransform;
  if (transform !== "none") {
    const translateY = transform.slice(7, transform.length - 1).split(", ")[5];
    const translateX = transform.slice(7, transform.length - 1).split(", ")[4];
    return { y: Number(translateY), x: Number(translateX) };
  } else {
    return { y: 0, x: 0 };
  }
};
export const removeClass = (dom: HTMLElement, className: string): void => {
  if (Array.isArray(className)) {
    className.forEach(c => {
      remove(dom, c);
    });
  } else {
    remove(dom, className);
  }
};
