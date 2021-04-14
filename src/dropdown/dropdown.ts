/*
* @Author: Just be free
* @Date:   2021-02-23 15:21:59
* @Last Modified by:   Just be free
* @Last Modified time: 2021-04-14 14:27:06
* @E-mail: justbefree@126.com
*/

import VueGgy, { mixins, prop, Options } from "../component/VueGgy";
import { h, VNode, vShow, withDirectives } from "vue";
import { renderDOM } from "../component/renderDOM";
import VgPopup from "../popup";

class Props {
  borderRadius?: number
  direction = prop<string>({
    default: "down",
    validator: (dir: string): boolean => {
      return ["down", "up", "right", "left"].indexOf(dir) > -1;
    }
  })
}
@Options({
  name: "VgDropdown",
  emits: ["beforeenter", "afterenter", "beforeleave", "afterleave"],
  computed: {
    position() {
      const map = { up: "bottom", down: "top", left: "right", right: "left" };
      return map[this.direction as keyof typeof map] || "bottom";
    }
  }
})
export default class VgDropdown extends mixins(VueGgy).with(Props) {
  public static componentName = "VgDropdown";
  public status = false;
  public show = false;
  public toggle(): void {
    this.show = !this.show;
  }
  public handleBeforeEnter(): void {
    this.$emit("beforeenter");
    this.status = true;
    const target = this.getSlots("target");
    const targetWrapper = this.$el.getElementsByClassName("$dropdown-target");
    const dom = targetWrapper[0].children[0] as HTMLElement;
    const rect = dom.getBoundingClientRect();
    const dropdownPopup = this.$refs.dropdownPopup as HTMLElement;
    if (this.direction === "up") {
      dropdownPopup.style.bottom = `${
        window.innerHeight - rect.top
      }px`;
    } else if (this.direction === "down") {
      dropdownPopup.style.top = `${rect.bottom}px`;
    } else if (this.direction === "left") {
      dropdownPopup.style.right = `${
        window.innerWidth - rect.left
      }px`;
    } else if (this.direction === "right") {
      dropdownPopup.style.left = `${rect.right}px`;
    }
  }
  public handleAfterEnter(): void {
    this.$emit("afterenter");
  }
  public handleBeforeLeave(): void {
    this.$emit("beforeleave");
  }
  public handleAfterLeave(): void {
    this.$emit("afterleave");
    this.status = false;
  }
  render() {
    const target = this.getSlots("target");
    const content = this.getSlots("content");
    return h("div", { class: ["vg-dropdown"] }, {
      default: () => [
        h("div", { class: ["$dropdown-target"] }, { default: () => [target] }),
        withDirectives(h(
          "div",
          {
            class: [
              "vg-dropdown-popup",
              this.direction,
              this.status ? "z-index" : "",
            ],
            ref: "dropdownPopup",
          },
          {
            default: () => [
              h(VgPopup,
                {
                  onBeforeenter: this.handleBeforeEnter,
                  onAfterenter: this.handleAfterEnter,
                  onBeforeleave: this.handleBeforeLeave,
                  onAfterleave: this.handleAfterLeave,
                  style: { position: "absolute" },
                  modelValue: this.show,
                  singleton: true,
                  position: this.position,
                  borderRadius: this.borderRadius,
                },
                { default: () => [content] }
              ),
            ]
          }
        ), [[vShow, this.status]]),
      ]
    });
  }
}
