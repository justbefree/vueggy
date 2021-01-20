/*
* @Author: Just be free
* @Date:   2020-11-30 11:11:58
* @Last Modified by:   Just be free
* @Last Modified time: 2021-01-20 11:08:30
* @E-mail: justbefree@126.com
*/
import VueGgy, { mixins, props, Options } from "../component/VueGgy";
import VgFlex from "../flex";
import VgFlexItem from "../flex-item";
import VgPopup from "../popup";
import VgIcon from "../icon";
import VgButton from "../button";
import { h, withDirectives, vShow, VNode } from "vue";
const VALID_POPUP_CONTENT_COMPONENT = "VgSubmitBarPopupContent";
const VALID_VALUE_COMPONENT = "VgSubmitBarValue";
const VALID_TEXT_COMPONENT = "VgSubmitBarText";

const Props = props({
  submitText: {
    type: String,
    default: "提交",
  },
  label: {
    type: String,
    default: "",
  },
  value: {
    type: String,
    default: "0",
  },
  valueDescription: {
    type: String,
    default: ""
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
  emits: ["trigger", "beforeenter", "afterleave", "submit"]
})
export default class VgSubmitBar extends mixins(Props, VueGgy) {
  public static componentName = "VgSubmitBar";
  public showPopup = false;
  public popupStatus = false;
  public submitStatus = "resolved";
  toggle() {
    this.showPopup = !this.showPopup;
    this.$emit("trigger", this.showPopup);
  }
  genValue(): VNode|VNode[] {
    const value = this.getCustomSlotsByTagName(VALID_VALUE_COMPONENT);
    if (Array.isArray(value) && value.length > 0) {
      return value;
    } else {
      const hasDescription = this.valueDescription !== "";
      // return h("span", { class: ["vg-submit-action-currency"] }, {
      //   default: () => [
      //     h("small", { innerHTML: this.currencySymbol }, { default: () => [] }),
      //     h("b", {}, { default: () => [this.value] }),
      //   ]
      // });
      return h(VgFlex, { class: ["custom-value", hasDescription ? "initial-line-height" : ""], flexDirection: "column", justifyContent: "spaceBetween" }, {
        default: () => [
          h(VgFlexItem, { flex: 2 }, { default: () => [
            h(
              "span",
              {
                class: [
                  "vg-submit-action-currency",
                  hasDescription ? "line-height-26" : "inherit-line-height",
                ],
              },
              [
                h(
                  "small",
                  { innerHTML: this.currencySymbol },
                  { default: () => [] }
                ),
                h("b", {}, { default: () => [this.value] }),
                hasDescription && this.genIcon(),
              ]
            ),
          ] }),
          hasDescription && h(VgFlexItem, { class: ["vg-submit-value-description"], flex: 1 }, {
            default: () => [this.valueDescription]
          })
        ]
      })
    }
  }
  genIcon(): undefined|VNode {
    if (this.showIcon) {
      const iconName = this.showPopup
        ? "arrow-down"
        : "arrow-up";
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
  afterLeave(): void {
    this.popupStatus = false;
    this.$emit("afterleave");
    if (this.submitStatus === "pendding") {
      this.$emit("submit");
      this.submitStatus = "resolved";
    }
  }
  submit(): void {
    if (this.popupStatus) {
      this.submitStatus = "pendding";
      this.toggle();
    } else {
      this.$emit("submit");
    }
  }
  view() {
    this.showPopup = true;
  }
  render() {
    const popupContent = this.getCustomSlotsByTagName(VALID_POPUP_CONTENT_COMPONENT);
    const hasPopup = popupContent && Array.isArray(popupContent) && popupContent.length > 0;
    const hasDescription = this.valueDescription !== "";
    const hasLabel = this.label !== "";
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
            },
            {
              default: () => [
                hasPopup && h(VgPopup,
                  {
                    style: { position: "absolute" },
                    modelValue: this.showPopup,
                    singleton: true,
                    onBeforeenter: this.beforeEnter,
                    onAfterleave: this.afterLeave,
                    onInput: this.toggle
                  },
                  {
                    default: () => [
                      h("div", { class: ["vg-submit-action-content"] }, {
                        default: () => popupContent
                      })
                    ]
                  }
                ),
              ]
            }
          ), [[vShow, this.popupStatus]]),
          h(VgFlex, { class: ["vg-submit-action-flex"] }, {
            default: () => [
              hasLabel && h(VgFlexItem,
                { flex: this.leftFlex, onClick: this.toggle },
                {
                  default: () => [
                    h(VgFlex, { alignItems: "center" }, {
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
                        h(VgFlexItem, {}, { default: () => [this.genValue()] }),
                        h(VgFlexItem, {}, { default: () => [hasPopup && !hasDescription && this.genIcon()] }),
                      ]
                    }),
                  ]
                }
              ),
              !hasLabel && h(VgFlexItem, { flex: this.leftFlex }, {
                default: () => [
                  this.getCustomSlotsByTagName(VALID_TEXT_COMPONENT)
                ]
              }),
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
