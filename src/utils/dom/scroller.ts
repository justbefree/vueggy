/*
* @Author: Just be free
* @Date:   2020-10-15 11:21:20
* @Last Modified by:   Just be free
* @Last Modified time: 2020-10-15 14:14:01
* @E-mail: justbefree@126.com
*/
const overflowScrollReg = /scroll|auto/i;
export const getScroller = (el: HTMLElement): HTMLElement => {
  let node = el as HTMLElement;
  while (
    node &&
    node.tagName !== "HTML" &&
    node.nodeType === 1
  ) {
    const { overflowY } = window.getComputedStyle(node);
    if (overflowScrollReg.test(overflowY)) {
      if (node.tagName !== "BODY") {
        return node;
      }
      // see: https://github.com/youzan/vant/issues/3823
      const { overflowY: htmlOverflowY } = window.getComputedStyle(node.parentNode as HTMLElement);
      if (overflowScrollReg.test(htmlOverflowY)) {
        return node;
      }
    }
    node = node.parentNode as HTMLElement;
  }
  return node;
};