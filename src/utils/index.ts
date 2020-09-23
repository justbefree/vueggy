/*
* @Author: Just be free
* @Date:   2020-09-22 16:20:15
* @Last Modified by:   Just be free
* @Last Modified time: 2020-09-23 14:23:38
* @E-mail: justbefree@126.com
*/
export const hyphenate = (str: string): string => {
  return String(str).replace(/\B([A-Z])/g, "-$1").toLowerCase();
};
export const camelize = (str: string): string => {
  return String(str).replace(/-(\w)/g, (_, c) => (c ? c.toUpperCase() : ""));
};
export const capitalize = (str: string): string => {
  return String(str).charAt(0).toUpperCase() + str.slice(1);
};
export const isString = (value: any): boolean => {
  return Object.prototype.toString.call(value) === "[object String]";
};