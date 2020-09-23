/*
* @Author: Just be free
* @Date:   2020-09-22 16:20:15
* @Last Modified by:   Just be free
* @Last Modified time: 2020-09-22 18:46:40
* @E-mail: justbefree@126.com
*/
export const capitalize = (str: string): string => {
  return String(str).replace(/\B([A-Z])/g, "-$1").toLowerCase();
};
export const camelize = (str: string, upperCaseFirstLetter: boolean = false): string => {
  let ca = String(str).replace(/-(\w)/g, (_, c) => (c ? c.toUpperCase() : ""));
  if (upperCaseFirstLetter) {
    return ca.replace(/\b\w/g, (f) => f.toUpperCase());
  } else {
    return ca;
  }
};
export const isString = (value: any): boolean => {
  return Object.prototype.toString.call(value) === "[object String]";
};