/*
* @Author: Just be free
* @Date:   2020-09-22 15:24:40
* @Last Modified by:   Just be free
* @Last Modified time: 2020-10-22 11:11:25
* @E-mail: justbefree@126.com
*/
import VueGgy, { mixins, props, Options } from "../component/VueGgy";
import { hyphenate, camelize } from "../utils";
import { ValidFlexAttribute } from "./types";
import { h } from "vue";
const Props = props({
  flexDirection: String,
  flexWrap: String,
  justifyContent: String,
  alignItems: String,
  alignContent: String,
  xs: String,
  sm: String,
  md: String,
  lg: String,
  fixBottomLine: {
    type: Boolean,
    default: false
  }
});
@Options({
  name: "VgFlex"
})
export default class VgFlex extends mixins(VueGgy, Props) {
  public static componentName = "VgFlex";
  isValidColumnsAttribute(key: ValidFlexAttribute): boolean {
    const validates = ["xs", "sm", "md", "lg"];
    return validates.indexOf(key) > -1;
  }
  isValidColumnNumber(v: number): boolean {
    const value = Math.abs(v);
    return value >= 1 && value <= 12;
  }
  isValidFlexAttributeAndValue(key: ValidFlexAttribute, value: string) {
    const validates = {
      flexDirection: ["row", "rowReverse", "column", "columnReverse"],
      flexWrap: ["nowrap", "wrap", "wrapReverse"],
      justifyContent: [
        "flexStart",
        "flexEnd",
        "center",
        "spaceBetween",
        "spaceAround"
      ],
      alignItems: ["flexStart", "flexEnd", "center", "baseline", "stretch"],
      alignContent: [
        "flexStart",
        "flexEnd",
        "center",
        "spaceBetween",
        "spaceAround",
        "stretch"
      ]
    };
    return (key in validates) && validates[key].indexOf(value) > -1;
  }
  translateAttrsToClassName(prefix = "vg-"): Array<string> {
    const className: string[] = [];
    for (let [attribute, value] of Object.entries(this.$props)) {
      if (this.isValidColumnsAttribute(attribute as ValidFlexAttribute)) {
        if (this.isValidColumnNumber(parseInt(value as string))) {
          className.push(`${prefix}${attribute}-col-${value}`);
        }
      } else {
        if (this.isValidFlexAttributeAndValue(attribute as ValidFlexAttribute, camelize(value as string))) {
          className.push(`${prefix}${hyphenate(attribute as string)}-${hyphenate(value as string)}`);
        }
      }
    }
    return className;
  }
  render() {
    const className = this.translateAttrsToClassName();
    const fix = this.fixBottomLine ? "vg-flex-fix-bottom-line" : "";
    return h("div", { class: ["vg-flex", ...className, fix] }, { default: () => this.getSlots() });
  }
}