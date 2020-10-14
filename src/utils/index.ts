/*
* @Author: Just be free
* @Date:   2020-09-22 16:20:15
* @Last Modified by:   Just be free
* @Last Modified time: 2020-10-14 11:21:31
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
export const isPromise = (obj: any): boolean => {
  return (
    !!obj &&
    (typeof obj === "object" || typeof obj === "function") &&
    typeof obj.then === "function"
  );
};