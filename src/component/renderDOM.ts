/*
* @Author: Just be free
* @Date:   2020-09-25 10:13:20
* @Last Modified by:   Just be free
* @Last Modified time: 2020-09-27 15:50:03
* @E-mail: justbefree@126.com
*/

import { h, render, DefineComponent, AllowedComponentProps, VNode } from "vue";
export function renderDOM(component: any, props: any, children: any) {
  const vnode: VNode = h(component, { ...props }, children);
  const dom = document.createElement("div");
  console.log("renderDOM ", vnode, render(vnode, dom));
  render(vnode, dom);
  return vnode.component;
}
