/*
* @Author: Just be free
* @Date:   2020-10-30 09:51:13
* @Last Modified by:   Just be free
* @Last Modified time: 2020-11-02 10:41:58
* @E-mail: justbefree@126.com
*/

import { isDef, isObject } from "../";
interface AnyObject {
  [propName: string]: any;
}

function assignKey(to: AnyObject, from: AnyObject, key: keyof AnyObject): void {
  const val = from[key];
  if (isDef(val)) {
    if (!Object.prototype.hasOwnProperty.call(to, key) || !isObject(val)) {
      to[key] = val;
    } else {
      // eslint-disable-next-line no-use-before-define
      to[key] = deepAssign(Object(to[key]), from[key]);
    }
  }
}
export function deepAssign(to: AnyObject, from: AnyObject): AnyObject {
  Object.keys(from).forEach((key: string, index: number, arr: string[]) => {
    assignKey(to, from, key as keyof AnyObject);
  });
  return to;
}
export function deepClone(obj: AnyObject): AnyObject {
  if (Array.isArray(obj)) {
    return obj.map((item: any) => deepClone(item));
  }
  if (typeof obj === "object") {
    return deepAssign({}, obj);
  }
  return obj;
}
