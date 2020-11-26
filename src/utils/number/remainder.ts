/*
* @Author: Just be free
* @Date:   2020-11-25 15:31:39
* @Last Modified by:   Just be free
* @Last Modified time: 2020-11-26 13:39:44
* @E-mail: justbefree@126.com
*/
const getData = (context: any, attr: string): any => {
  return context[attr];
};
const setData = (context: any, attr: string, value: any): void => {
  context[attr] = value;
};
export class Remainder {
  private remainder = 1;
  private dir = 0;
  private i = 0;
  private context: any = null;
  private hasContext = true;
  private attr = "";
  constructor(r: number, i: string|number, context?: any) {
    this.remainder = r;
    this.dir = 1;
    if (context && Object.prototype.hasOwnProperty.call(context, i)) {
      this.i = getData(context, (i as string)) as number;
      this.attr = i as string;
      this.context = context;
      this.hasContext = true;
    } else {
      this.i = (i as number) || 0;
      this.hasContext = false;
    }
  }
  next(callback: Function): Remainder {
    this.dir = 1;
    this.i = this.getNext("absolute");
    if (this.hasContext) {
      setData(this.context, this.attr, this.i);
    }
    callback && typeof callback === "function" && callback(this.i);
    return this;
  }
  previous(callback: Function): Remainder {
    this.dir = -1;
    this.i = this.getPrevious("absolute");
    if (this.hasContext) {
      setData(this.context, this.attr, this.i);
    }
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
