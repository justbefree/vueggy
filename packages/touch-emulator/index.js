/*
* @Author: Just be free
* @Date:   2020-10-27 17:19:56
* @Last Modified by:   Just be free
* @Last Modified time: 2020-10-27 17:20:06
* @E-mail: justbefree@126.com
*/
/* eslint-disable */
// https://github.com/hammerjs/touchemulator/blob/master/touch-emulator.js
let eventTarget;
const supportTouch = "ontouchstart" in window;

// polyfills
if (!document.createTouch) {
  document.createTouch = function(
    view,
    target,
    identifier,
    pageX,
    pageY,
    screenX,
    screenY
  ) {
    // auto set
    return new Touch(
      target,
      identifier,
      {
        pageX,
        pageY,
        screenX,
        screenY,
        clientX: pageX - window.pageXOffset,
        clientY: pageY - window.pageYoffset
      },
      0,
      0
    );
  };
}

if (!document.createTouchList) {
  document.createTouchList = function() {
    let touchList = new TouchList();
    for (let i = 0; i < arguments.length; i++) {
      touchList[i] = arguments[i];
    }
    touchList.length = arguments.length;
    return touchList;
  };
}

const Touch = function(target, identifier, pos, deltaX, deltaY) {
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
};
const TouchList = function() {
  let touchList = [];
  touchList["item"] = function(index) {
    return this[index] || null;
  };
  touchList["identifiedTouch"] = function(id) {
    return this[id + 1] || null;
  };
  return touchList;
};
let initiated = false;
const onMouse = function(touchType) {
  return function(ev) {
    if (ev.type === "mousedown") {
      initiated = true;
    }
    if (ev.type === "mouseup") {
      initiated = false;
    }
    if (ev.type === "mousemove" && !initiated) {
      return;
    }
    if (
      ev.type === "mousedown" ||
      !eventTarget ||
      (eventTarget && !eventTarget.dispatchEvent)
    ) {
      eventTarget = ev.target;
    }
    triggerTouch(touchType, ev);
    if (ev.type === "mouseup") {
      eventTarget = null;
    }
  };
};
const triggerTouch = function(eventName, mouseEv) {
  const touchEvent = document.createEvent("Event");
  touchEvent.initEvent(eventName, true, true);
  touchEvent.altKey = mouseEv.altKey;
  touchEvent.ctrlKey = mouseEv.ctrlKey;
  touchEvent.metaKey = mouseEv.metaKey;
  touchEvent.shiftKey = mouseEv.shiftKey;
  touchEvent.touches = getActiveTouches(mouseEv);
  touchEvent.targetTouches = getActiveTouches(mouseEv);
  touchEvent.changedTouches = createTouchList(mouseEv);
  eventTarget.dispatchEvent(touchEvent);
};

const createTouchList = function(mouseEv) {
  const touchList = new TouchList();
  touchList.push(new Touch(eventTarget, 1, mouseEv, 0, 0));
  return touchList;
};

const getActiveTouches = function(mouseEv) {
  if (mouseEv.type === "mouseup") {
    return new TouchList();
  }
  return createTouchList(mouseEv);
};
const TouchEmulator = function() {
  window.addEventListener("mousedown", onMouse("touchstart"), true);
  window.addEventListener("mousemove", onMouse("touchmove"), true);
  window.addEventListener("mouseup", onMouse("touchend"), true);
};
TouchEmulator["multiTouchOffset"] = 75;
if (!supportTouch) {
  new TouchEmulator();
}
