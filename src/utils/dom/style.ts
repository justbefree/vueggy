/*
* @Author: Just be free
* @Date:   2020-10-14 15:14:37
* @Last Modified by:   Just be free
* @Last Modified time: 2020-10-14 16:28:24
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
export const getStyle = (element: HTMLElement, attr: string): string => {
  const compStyles = getComputedStyle(element);
  const value = compStyles.getPropertyValue(attr);
  return rgb2hex(value);
}
