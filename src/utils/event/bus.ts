/*
* @Author: Just be free
* @Date:   2020-11-19 15:29:20
* @Last Modified by:   Just be free
* @Last Modified time: 2020-11-19 17:46:31
* @E-mail: justbefree@126.com
*/
// https://github.com/vuejs/rfcs/blob/master/active-rfcs/0020-events-api-change.md
class Bus {
  private eventHub = new Map();
  on(eventName: string, callback: Function): void {
    let events = [];
    if (!this.eventHub.has(eventName)) {
      events.push(callback);
    } else {
      events.push(...this.eventHub.get(eventName));
      events.push(callback);
    }
    this.eventHub.set(eventName, events);
  }
  off(eventName: string, callback?: Function): void {
    if (!this.eventHub.has(eventName)) {
      return;
    }
    if (!callback) {
      this.eventHub.delete(eventName);
    } else {
      const events = this.eventHub.get(eventName);
      if (events) {
        events.splice(events.indexOf(callback), 1);
      }
    }
  }
  emit(eventName: string, ...args: any): void {
    if (this.eventHub.has(eventName)) {
      const events = this.eventHub.get(eventName);
      events.forEach((fn: Function, key: number) => {
        fn(...args);
      });
    }
  }
}
export const EventBus = new Bus();