/*
* @Author: Just be free
* @Date:   2020-10-14 15:14:37
* @Last Modified by:   Just be free
* @Last Modified time: 2021-01-07 18:24:04
* @E-mail: justbefree@126.com
*/
const hex = (c: string): string => {
  const value = parseInt(c).toString(16).slice(-2);
  // 防止颜色值为0的时候hex值错误
  return value === "0" ? "00" : value;
}
const rgb2hex = (color: string): string => {
  const reg = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/;
  const rgb = color.match(reg) as Array<string>;
  if (reg.test(color)) {
    return `#${hex(rgb[1])}${hex(rgb[2])}${hex(rgb[3])}`;
  }
  return color;
}
export const getStyle = (element: HTMLElement) => {
  return window.getComputedStyle(element);
}
export const getPropertyValue = (element: HTMLElement, attr: string): string => {
  const compStyles = getStyle(element);
  const value = compStyles.getPropertyValue(attr);
  return rgb2hex(value);
}
