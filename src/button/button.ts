/*
* @Author: Just be free
* @Date:   2020-10-12 15:56:53
* @Last Modified by:   Just be free
* @Last Modified time: 2020-11-30 15:54:41
* @E-mail: justbefree@126.com
*/
import VueGgy, { mixins, props, Options } from "../component/VueGgy";
import VgIcon from "../icon";
import { h } from "vue";
const Props = props({
  size: {
    type: String,
    default: "default"
  },
  type: {
    type: String,
    default: "default"
  },
  disabled: {
    type: Boolean,
    default: false
  },
  danger: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  textHideWhenLoading: {
    type: Boolean,
    default: false
  }
});
@Options({
  name: "VgButton"
})
export default class VgButton extends mixins(VueGgy, Props) {
  public static componentName = "VgButton";
  validType(type: string): boolean {
    return ["default", "primary", "dashed"].indexOf(type) > -1;
  }
  validSize(size: string): boolean {
    return ["default", "large"].indexOf(size) > -1;
  }
  render() {
    const slots = this.getSlots();
    let className = [];
    if (this.validSize(this.size)) {
      className.push(this.size);
    }
    if (this.validType(this.type)) {
      className.push(`vg-button-${this.type}`);
    }
    if (this.danger) {
      className.push("vg-button-danger");
    }
    if (this.loading) {
      className.push("loading");
    }
    return h("button", { type: "button", class: ["vg-button", ...className], disabled: this.disabled }, {
      default: () => [
        this.loading && (
          h(VgIcon, { name: "loading", size: 16, adjustColor: true, class: ["vg-button-loading"] }, { default: () => "" })
        ),
        (!this.textHideWhenLoading || this.textHideWhenLoading && !this.loading) && (
          h("span", {}, { default: () => slots })
        )
      ]
    });
  }
}