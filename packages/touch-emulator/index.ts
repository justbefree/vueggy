/*
* @Author: Just be free
* @Date:   2020-10-27 16:04:06
* @Last Modified by:   Just be free
* @Last Modified time: 2020-10-27 17:14:20
* @E-mail: justbefree@126.com
*/
export {}
let eTarget: null|EventTarget = null;
const supportTouch = "ontouchstart" in window;
if (!document.createTouch) {
  document.createTouch = function(view: any, target: Event, identifier: any, pageX: number, pageY: number, screenX: number, screenY: number) {
  }
}
function Touch(this: Touch, target: Event, identifier: any, pos: any, deltaX: number, deltaY: number): void {
  deltaX = deltaX || 0;
  deltaY = deltaY || 0;
  this.identifier = identifier;
  this.target = target;
  this.clientX = pos.clientX + deltaX;
  this.clientY = pos.clientY + deltaY;
  this.screenX = pos.screenX + deltaX;
  this.screenY = pos.screenY + deltaY;
  this.pageX = pos.pageX + deltaX;
  this.pageY = pos.pageY + deltaY;
}
