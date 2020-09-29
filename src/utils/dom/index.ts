/*
* @Author: Just be free
* @Date:   2020-09-28 18:14:16
* @Last Modified by:   Just be free
* @Last Modified time: 2020-09-28 18:17:43
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
export const removeClass = (dom: HTMLElement, className: string): void => {
  if (Array.isArray(className)) {
    className.forEach(c => {
      remove(dom, c);
    });
  } else {
    remove(dom, className);
  }
};
