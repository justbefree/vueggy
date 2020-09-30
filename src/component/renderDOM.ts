/*
* @Author: Just be free
* @Date:   2020-09-25 10:13:20
* @Last Modified by:   Just be free
* @Last Modified time: 2020-09-30 14:32:59
* @E-mail: justbefree@126.com
*/

import { h, render, VNode } from "vue";
export function renderDOM(component: any, props: any, children: any) {
  const vnode: VNode = h(component, { ...props }, children);
  const dom: HTMLElement = document.createElement("div");
  const a = render(vnode, dom);
  console.log("render(vnode, dom)", vnode);
  return vnode.component;
}
