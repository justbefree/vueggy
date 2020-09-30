/*
* @Author: Just be free
* @Date:   2020-09-28 11:18:21
* @Last Modified by:   Just be free
* @Last Modified time: 2020-09-30 11:36:22
* @E-mail: justbefree@126.com
*/
import VueGgy, { mixins, props, Options } from "../component/VueGgy";
import { hyphenate } from "../utils";
import { h, VNode } from "vue";
// export type SpinType = "snake" | "rotate" | "triple-bounce";
const Props = props({
  type: {
    type: String,
    default: "snake"
  },
  size: {
    type: [Number, String],
    default: 28
  },
  color: {
    type: String,
    default: "#007aff"
  }
});
@Options({
  name: "VgSpin"
})
export default class VgSpin extends mixins(VueGgy, Props) {
  public static componentName = "VgSpin";
  createSpinner(): VNode {
    const capitalizeName = hyphenate(this.type);
    let component = "span";
    try {
      component = require(`./shapes/${capitalizeName}/index.ts`)["default"];
    } catch (err) {
      console.warn(`There is no ${capitalizeName} as VgSpin type's value`);
      return h(component, {}, []);
    }
    return h(component, { size: Number(this.size), color: this.color }, []);
  }
  render() {
    return h("span", {}, [this.createSpinner()]);
  }
}
