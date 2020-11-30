/*
* @Author: Just be free
* @Date:   2020-11-30 11:11:58
* @Last Modified by:   Just be free
* @Last Modified time: 2020-11-30 14:45:36
* @E-mail: justbefree@126.com
*/
import VueGgy, { mixins, props, Options } from "../component/VueGgy";
import VgFlex from "../flex";
import VgFlexItem from "../flex-item";
import VgPopup from "../popup";
import VgIcon from "../icon";
import VgButton from "../button";
import { h, withDirectives, vShow, VNode } from "vue";
const VALIDE_POPUP_CONTENT_COMPONENT = "VgSubmitBarPopupContent";
const VALIDE_VALUE_COMPONENT = "VgSubmitBarValue";

const Props = props({
  submitText: {
    type: String,
    default: "提交",
  },
  label: {
    type: String,
    default: "总计:",
  },
  value: {
    type: String,
    default: "0",
  },
  currencySymbol: {
    type: String,
    default: "&yen;",
  },
  showIcon: {
    type: Boolean,
    default: true,
  },
  fixed: Boolean,
  disabled: {
    type: Boolean,
    default: false
  },
  leftFlex: {
    type: [String, Number],
    default: 2
  },
  rightFlex: {
    type: [String, Number],
    default: 1
  }
});
@Options({
  name: "VgSubmitBar",
  emits: ["trigger", "beforeenter"]
})
export default class VgSubmitBar extends mixins(Props, VueGgy) {
  public static componentName = "VgSubmitBar";
  public showPopup = false;
  public popupStatus = false;
  public submitStatus = "resolved";
  toggle() {
    console.log("点击了");
    this.showPopup = !this.showPopup;
    this.$emit("trigger", this.showPopup);
  }
  getValideContent(tagName: string, slots: VNode[]): VNode[] {
    // return this.getSlots();
    const components = [] as VNode[];
    if (slots && Array.isArray(slots)) {
      slots.forEach((slot: VNode) => {
        if (typeof slot.type === "object") {
          if (tagName === (slot.type as any).name) {
            components.push(slot);
          }
        }
      });
    }
    return components;
  }
  genValue(slots: VNode[]) {
    // const value = this.getValideContent("value", slots);
    const value = this.getValideContent(VALIDE_VALUE_COMPONENT, slots);
    if (Array.isArray(value) && value.length > 0) {
      return value;
    } else {
      return h("span", { class: ["vg-submit-action-currency"] }, {
        default: () => [
          h("small", { innerHTML: this.currencySymbol }, { default: () => [] }),
          h("b", {}, { default: () => [this.value] }),
        ]
      });
    }
  }
  genIcon(): undefined|VNode {
    if (this.showIcon) {
      const iconName = this.showPopup
        ? "iconl-arrow-down-line"
        : "iconl-arrow-up-line";
      return h("span", { class: ["vg-submit-action-icon"] }, {
        default: () => [
          h(VgIcon,
            { name: iconName, size: 12 },
            { default: () => [] }
          )
        ]
      });
    }
  }
  setActionPopupStyle(): void {
    const rect = this.$el.getBoundingClientRect();
    (this.$refs.actionPopup as HTMLElement).style.bottom = `${
      window.innerHeight - rect.top
    }px`;
  }
  beforeEnter(): void {
    this.$emit("beforeenter");
    this.popupStatus = true;
    this.setActionPopupStyle();
  }
  afterLeave(): void {}
  submit(): void {}
  render() {
    const slots = this.getSlots();
    // console.log("slots = ", slots);
    slots.forEach((slot: any) => {
      console.log("slot = ", slot.type);
    });
    return h(
      "div",
      { class: ["vg-submit-action", this.fixed ? "fixed" : ""] },
      {
        default: () => [
          withDirectives(h(
            "div",
            {
              class: ["vg-submit-action-popup"],
              ref: "actionPopup",
              // directives: [{ name: "show", value: this.popupStatus }],
            },
            {
              default: () => [
                h(VgPopup,
                  {
                    style: { position: "absolute" },
                    modelValue: this.showPopup,
                    singleton: true,
                    onBeforeenter: this.beforeEnter,
                    onAfterleave: this.afterLeave,
                    onInput: this.toggle
                    // on: {
                    //   beforeEnter: this.handleBeforeEnter,
                    //   afterLeave: this.handleAfterLeave,
                    //   input: this.toggle,
                    // },
                  },
                  {
                    default: () => [
                      h("div", { class: ["vg-submit-action-content"] }, {
                        default: () => [
                          this.getValideContent(VALIDE_POPUP_CONTENT_COMPONENT, slots)
                        ]
                      })
                    ]
                  }
                ),
              ]
            }
          ), [[vShow, this.popupStatus]]),
          h(VgFlex, { class: ["vg-submit-action-flex"] }, {
            default: () => [
              h(VgFlexItem,
                { flex: this.leftFlex, onClick: this.toggle },
                {
                  default: () => [
                    h(VgFlex, {}, {
                      default: () => [
                        h(VgFlexItem, {}, {
                          default: () => [
                            h("span", { class: ["vg-submit-action-total-text"] }, {
                              default: () => [
                                this.label,
                              ]
                            }),
                          ]
                        }),
                        h(VgFlexItem, {}, { default: () => [this.genValue(slots)] }),
                        h(VgFlexItem, {}, { default: () => [this.genIcon()] }),
                      ]
                    }),
                  ]
                }
              ),
              h(VgFlexItem, { flex: this.rightFlex }, {
                default: () => [
                  h(VgButton,
                    {
                      class: ["vg-submit-action-button"],
                      type: "primary",
                      size: "large",
                      disabled: this.disabled,
                      onClick: this.submit,
                    },
                    { default: () => [this.submitText] }
                  ),
                ]
              }),
            ]
          }),
        ]
      }
    );
  }
}
