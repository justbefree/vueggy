/*
* @Author: Just be free
* @Date:   2020-09-22 16:20:15
* @Last Modified by:   Just be free
* @Last Modified time: 2021-04-15 16:56:40
* @E-mail: justbefree@126.com
*/
export const hasOwnProperty = (obj: any, props: string): boolean => {
  return Object.prototype.hasOwnProperty.call(obj, props);
};
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
export const isObject = (value: any): boolean => {
  const type = typeof value;
  return value !== null && type === "object";
};
export const isDef = (value: any): boolean => {
  return value !== undefined && value !== null;
};
export const getCharLength = (str: string): number => {
  return str.replace(/[\u0391-\uFFE5]/g, "aa").length;
};
export const drop = (arr: string[]|string, ele: string[]|string): void => {
  if (Array.isArray(arr)) {
    if (Array.isArray(ele)) {
      ele.forEach(item => {
        let index = arr.indexOf(item);
        if (index > -1) {
          arr.splice(index, 1);
        }
      });
    } else {
      let index = arr.indexOf(ele);
      if (index > -1) {
        arr.splice(index, 1);
      }
    }
  }
};
export const push = (arr: string[]|string, ele: string[]|string): void => {
  if (Array.isArray(arr)) {
    if (Array.isArray(ele)) {
      ele.forEach(item => {
        if (arr.indexOf(item) < 0) {
          arr.push(item);
        }
      });
    } else {
      if (arr.indexOf(ele) < 0) {
        arr.push(ele);
      }
    }
  }
};
export const getProperty = <T extends object, K extends keyof T>(o: T, attr: K): T[K] => {
  return o[attr];
};
export const setProperty = <T extends object, K extends string, V extends any>(o: T, k: K, v: V): void => {
  Object.defineProperty(o, k, {
    value: v,
    writable: true
  });
};
// 判断是否是中文
export const isChineseCharacters = (str: string): boolean => {
  return /^[\u4e00-\u9fa5]+$/i.test(str);
};
export const throttle = (callback: Function, delay: number = 800): Function => {
  let timer: null|number = null;
  return function() {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      callback(...arguments);
      timer = null;
    }, delay);
  };
};
