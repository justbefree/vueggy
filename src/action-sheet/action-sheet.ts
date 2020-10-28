/*
* @Author: Just be free
* @Date:   2020-10-28 12:10:05
* @Last Modified by:   Just be free
* @Last Modified time: 2020-10-28 14:26:12
* @E-mail: justbefree@126.com
*/
import { h, withDirectives, vShow, VNode } from "vue";
import VueGgy, { mixins, props, Options } from "../component/VueGgy";
import VgFlex from "../flex";
import VgFlexItem from "../flex-item";
import VgPopup from "../popup";
import VgSpin from "../spin";
const Props = props({
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: "标题"
  },
  actions: {
    type: Array,
    default: () => {
      return [];
    }
  },
  showCancel: {
    type: Boolean,
    default: false
  },
  cancelText: {
    type: String,
    default: "取消"
  },
  loading: {
    type: Boolean,
    default: false
  },
  iconType: {
    type: String,
    default: "tripleBounce"
  },
  iconSize: {
    type: Number,
    default: 36
  },
  iconColor: String
});
@Options({
  name: "VgActionSheet",
  emits: ["update:modelValue", "getselected", "beforeenter", "enter", "afterenter", "beforeleave", "leave", "afterleave"]
})
export default class VgActionSheet extends mixins(VueGgy, Props) {
  public static componentName = "VgActionSheet";
  handleChange(e: boolean): void {
    this.$emit("update:modelValue", e);
  }
  handleCancel(): void {
    this.handleChange(false);
  }
  handleItemClick(e: any) {
    if (e && e.disable) {
      return false;
    }
    this.$emit("getselected", e);
    this.handleChange(false);
  }
  createList(): VNode[] {
    const list = [];
    if (this.loading) {
      list.push(
        h("li", { class: ["vg-action-sheet-loading-warpper"] }, [
          h(VgSpin,
            {
              class: ["loading"],
              type: this.iconType,
              size: this.iconSize,
              color: this.iconColor
            },
            { default: () => [] }
          )
        ])
      );
    } else {
      this.actions.forEach((action: any, index: number) => {
        const className = Array.isArray(action.className)
          ? action.className
          : [action.className];
        const key = action.key || index;
        const disable = action.disable ? "disable" : "";
        list.push(
          h(
            "li",
            {
              key: key,
              class: [...className, disable],
              onClick: this.handleItemClick.bind(this, action)
            },
            [h("span", { class: [`${disable}-text`] }, { default: () => action.name })]
          )
        );
      });
    }
    if (this.showCancel) {
      list.push(
        h(
          "li",
          {
            class: ["vg-action-sheet-cancel"],
            onClick: this.handleCancel
          },
          { default: () => [h("span", {}, { default: () => this.cancelText })] }
        )
      );
    }
    return list;
  }
  handleBeforeEnter() {
    this.$emit("beforeenter");
  }
  handleEnter() {
    this.$emit("enter");
  }
  handleAfterEnter() {
    this.$emit("afterenter");
  }
  handleBeforeLeave() {
    this.$emit("beforeleave");
  }
  handleLeave() {
    this.$emit("leave");
  }
  handleAfterLeave() {
    this.$emit("afterleave");
  }
  handleInput(): void {
    this.handleChange(false);
  }
  render() {
    return h("div", { class: ["vg-action-sheet"] }, [
      withDirectives(h(VgPopup,
        {
          onInput: this.handleInput,
          onBeforeenter: this.handleBeforeEnter,
          onEnter: this.handleEnter,
          onAfterenter: this.handleAfterEnter,
          onBeforeleave: this.handleBeforeLeave,
          onLeave: this.handleLeave,
          onAfterleave: this.handleAfterLeave,
          position: "bottom",
          style: { "max-height": "80%" }
        },
        {
          default: () => [
            h("h3", { class: ["vg-action-sheet-title"] }, { default: () => this.title }),
            h("ul", { class: ["vg-action-sheet-content"] }, {
              default: () => [this.createList()]
            })
          ]
        }
      ), [[vShow, this.modelValue]])
    ]);
  }
}