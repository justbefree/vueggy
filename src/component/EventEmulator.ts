/*
* @Author: Just be free
* @Date:   2020-10-26 14:19:04
* @Last Modified by:   Just be free
* @Last Modified time: 2020-10-27 18:09:16
* @E-mail: justbefree@126.com
*/
import { Vue } from "vue-class-component";
import { bind, preventDefault } from "../utils/event";
// import "../utils/event/touch-emulator";
import "../../packages/touch-emulator/index.js";
const MIN_DISTANCE = 10;
const getDirection = (x: number, y: number): string => {
  if (x > y && x > MIN_DISTANCE) {
    return "horizontal";
  }
  if (y > x && y > MIN_DISTANCE) {
    return "vertical";
  }
  return "";
}
class EventEmulator extends Vue {
  public maxTargetX = 150;
  public maxTargetY = 150;
  public startX = 0;
  public startY = 0;
  public deltaX = 0;
  public deltaY = 0;
  public offsetX = 0;
  public offsetY = 0;
  public direction = "";
  public bindedEvents = {
    unbindtouchstart: [],
    unbindtouchmove: [],
    unbindtouchend: []
  } as any;
  public bounceDeltaX = 0;
  public bounceDeltaY = 0;
  resetTouchStatus() {
    this.startY = 0;
    this.startX = 0;
    this.deltaY = 0;
    this.deltaX = 0;
    this.offsetX = 0;
    this.offsetY = 0;
    this.direction = "";
    this.bounceDeltaX = 0;
    this.bounceDeltaY = 0;
  }
  onTouchStart(e: Event, args: any) {
    preventDefault(e, true);
    this.resetTouchStatus();
    const { start, target } = args;
    this.startX = (e as TouchEvent).touches[0].clientX;
    this.startY = (e as TouchEvent).touches[0].clientY;
    start && typeof start === "function" && start({ e, target });
  }
  onTouchMove(e: Event, args: any) {
    preventDefault(e, true);
    const { dragging, target } = args;
    const itemHeight = (e.target as HTMLElement).offsetHeight;
    const touch = (e as TouchEvent).touches[0];
    this.deltaX = touch.clientX - this.startX;
    this.deltaY = touch.clientY - this.startY;
    const stepY = (this.maxTargetY - this.deltaY) / 8;
    const stepX = (this.maxTargetX - this.deltaX) / 8;
    if (stepY >= 0) {
      this.bounceDeltaY = this.deltaY + stepY;
    }
    if (stepX >= 0) {
      this.bounceDeltaX = this.deltaX + stepY;
    }
    this.offsetX = Math.abs(this.deltaX);
    this.offsetY = Math.abs(this.deltaY);
    this.direction =
      this.direction || getDirection(this.offsetX, this.offsetY);
    dragging &&
      typeof dragging === "function" &&
      dragging({ e, target, itemHeight });
  }
  onTouchEnd(e: Event, args: any) {
    preventDefault(e, true);
    const { stop, target } = args;
    const itemHeight = (e.target as HTMLElement).offsetHeight;
    const scrollHeight = target.offsetHeight;
    stop &&
      typeof stop === "function" &&
      stop({ e, target, itemHeight, scrollHeight });
  }
  bindEvent(el: EventTarget, args: any) {
    const unbindtouchstart = bind(
      el,
      "touchstart",
      this.onTouchStart,
      { ...args, target: el },
      false
    );
    const unbindtouchmove = bind(
      el,
      "touchmove",
      this.onTouchMove,
      { ...args, target: el },
      false
    );
    const unbindtouchend = bind(
      el,
      "touchend",
      this.onTouchEnd,
      { ...args, target: el },
      false
    );
    this.bindedEvents["unbindtouchstart"].push(unbindtouchstart);
    this.bindedEvents["unbindtouchmove"].push(unbindtouchmove);
    this.bindedEvents["unbindtouchend"].push(unbindtouchend);
  }
  unbindAllEvent() {
    for (let attr in this.bindedEvents) {
      while (this.bindedEvents[attr].length > 0) {
        const unbind = this.bindedEvents[attr].pop();
        if (typeof unbind === "function") {
          unbind();
        }
      }
    }
  }
  unbindEvent(type: string): void {
    const unbind = `unbind${type}`;
    const event = this.bindedEvents[unbind];
    while (event.length > 0) {
      const e = event.pop();
      if (e && typeof e === "function") {
        e();
      }
    }
  }
}
export { EventEmulator };
export interface EventCallbackOptions {
  target: HTMLElement;
  e: Event;
  itemHeight?: number;
  scrollHeight?: number;
}
