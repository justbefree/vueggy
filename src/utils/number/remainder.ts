/*
* @Author: Just be free
* @Date:   2020-11-25 15:31:39
* @Last Modified by:   Just be free
* @Last Modified time: 2020-11-26 20:39:47
* @E-mail: justbefree@126.com
*/
export class Remainder {
  private remainder = 1;
  private dir = 0;
  private i = 0;
  constructor(r?: number, i?: number) {
    this.remainder = r || 1;
    this.dir = 1;
    this.i = i || 1;
  }
  next(callback?: Function): Remainder {
    this.dir = 1;
    this.i = this.getNext("absolute");
    callback && typeof callback === "function" && callback(this.i);
    return this;
  }
  previous(callback?: Function): Remainder {
    this.dir = -1;
    this.i = this.getPrevious("absolute");
    callback && typeof callback === "function" && callback(this.i);
    return this;
  }
  getIndex(): number {
    return this.i;
  }
  getPrevious(pos?: string): number {
    let index: number = this.i;
    if (pos === "absolute") {
      index = (index - 1) % this.remainder;
      index = index >= 0 ? index : index + this.remainder;
    } else {
      if (this.dir > 0) {
        index = index === 0 ? this.remainder - 1 : index - 1;
      } else {
        index = (index + 1) % this.remainder;
      }
    }
    return index;
  }
  getNext(pos?: string): number {
    let index: number = this.i;
    if (pos === "absolute") {
      index = (index + 1) % this.remainder;
    } else {
      if (this.dir > 0) {
        index = (index + 1) % this.remainder;
      } else {
        index =
          index - 1 >= 0
            ? index - 1
            : (this.remainder + index) % this.remainder;
      }
    }
    return index;
  }
}
