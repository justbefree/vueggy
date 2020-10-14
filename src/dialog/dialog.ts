/*
* @Author: Just be free
* @Date:   2020-09-23 16:16:46
* @Last Modified by:   Just be free
* @Last Modified time: 2020-10-14 18:46:19
* @E-mail: justbefree@126.com
*/
import VueGgy, { Options, mixins, props, emits } from "../component/VueGgy";
import { Transition, h, withDirectives, vShow, VNode } from "vue";
import { addClass } from "../utils/dom";
import { isPromise } from "../utils";
import VgButton from "../button";
const Emits = emits([
  "update:modelValue",
  "modal-click",
  "before-enter",
  "after-enter",
  "before-leave",
  "after-leave",
  "button-click"
]);
const Props = props({
  beforeOpen: null,
  opened: null,
  beforeClose: null,
  closed: null,
  modelValue: {
    type: Boolean,
    default: false
  },
  className: [String, Array],
  zIndex: {
    type: [String, Number],
    default: 2
  },
  closeModelOnClick: {
    type: Boolean,
    default: false
  },
  message: String,
  title: String,
  showCancelButton: {
    type: Boolean,
    default: true
  },
  cancelButtonText: {
    type: String,
    default: "取消"
  },
  showConfirmButton: {
    type: Boolean,
    default: true
  },
  confirmButtonText: {
    type: String,
    default: "确定"
  },
  textHideWhenLoading: {
    type: Boolean,
    default: false
  }
});
// @Options({
//   name: "VgDialog"
// })
export default class VgDialog extends mixins(VueGgy, Emits, Props) {
  public static componentName = "VgDialog";
  public bodyOverflow = "";
  public events = {} as any;
  public renderedAsComponent = true;
  public show = false;
  public action = "";
  public loading = false;
  handleBeforeEnter(node: any) {
    this.$emit("before-enter", node);
    this.beforeOpen && (typeof this.beforeOpen === "function") && this.beforeOpen();
    this.bodyOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const parent = node.parentNode;
    const modal = document.createElement("div");
    modal.style.zIndex = `${Number(this.zIndex) - 1}`;
    modal.onclick = () => {
      if (this.closeModelOnClick) {
        if (this.renderedAsComponent) {
          this.$emit("update:modelValue", false);
        } else {
          this.show = false;
        }
      } else {
        this.$emit("modal-click");
      }
    };
    addClass(modal, "v-vgdialog-modal");
    parent.insertBefore(modal, node);
    // this.$emit("before-enter");
    this.events["doClose"] = () => {
      parent.removeChild(modal);
      document.body.style.overflow = this.bodyOverflow;
    };
  }
  close() {
    this.events["doClose"]();
    delete this.events["doClose"];
    if (!this.renderedAsComponent) {
      this.removeDOM();
    }
  }
  removeDOM() {
    const el = this.getDomTree() as HTMLElement;
    const parent = el.parentNode as HTMLElement;
    parent.removeChild(el);
  }
  handleAfterEnter(node: any) {
    this.$emit("after-enter", node);
    this.opened && (typeof this.opened === "function") && this.opened();
  }
  handleBeforeLeave(node: any) {
    this.$emit("before-leave", node);
    this.beforeClose && (typeof this.beforeClose === "function") && this.beforeClose();
  }
  handleAfterLeave(node: any) {
    this.$emit("after-leave", node);
    this.close();
    this.closed && (typeof this.closed === "function") && this.closed();
  }
  getLoadingStatus(e: string): boolean {
    return this.loading && this.action === e;
  }
  getDisableStatus(e: string): boolean {
    return this.loading && this.action !== e;
  }
  handleButtonClick(e: string): void {
    this.action = e;
    const { beforeClose } = this;
    if (beforeClose && typeof beforeClose === "function") {
      const promise = beforeClose(e);
      if (isPromise(promise)) {
        this.loading = true;
        promise.then((res: any) => {
          this.show = false;
          this.$emit("update:modelValue", false);
          this.$emit("button-click", e, res);
        });
      } else {
        this.show = false;
        this.$emit("update:modelValue", false);
        this.$emit("button-click", e);
      }
    } else {
      this.$emit("button-click", e);
      this.show = false;
      this.$emit("update:modelValue", false);
    }
  }
  setVisible(val: boolean): void {
    this.show = val;
  }
  setRenderedAsComponent(val: boolean): void {
    this.renderedAsComponent = val;
  }
  genButtons(): Array<VNode> {
    const buttons = [];
    if (this.showCancelButton) {
      buttons.push(
        h(
          VgButton,
          {
            textHideWhenLoading: this.textHideWhenLoading,
            disabled: this.getDisableStatus("cancel"),
            loading: this.getLoadingStatus("cancel"),
            onClick: this.handleButtonClick.bind(this, "cancel"),
            class: ["vg-dialog-cancel-button"]
          },
          { default: () => this.cancelButtonText }
        )
      );
    }
    if (this.showConfirmButton) {
      const className = buttons.length === 1 ? "vertical-line" : "";
      buttons.push(
        h(
          VgButton,
          {
            textHideWhenLoading: this.textHideWhenLoading,
            disabled: this.getDisableStatus("confirm"),
            loading: this.getLoadingStatus("confirm"),
            onClick: this.handleButtonClick.bind(this, "confirm"),
            class: ["vg-dialog-confirm-button", className]
          },
          { default: () => this.confirmButtonText }
        )
      );
    }
    return buttons;
  }
  render() {
    const buttons = this.genButtons();
    const className = Array.isArray(this.className) ? this.className : [this.className];
    return h(Transition, {
      name: "vg-dialog-bounce",
      onBeforeEnter: this.handleBeforeEnter,
      onAfterEnter: this.handleAfterEnter,
      onBeforeLeave: this.handleBeforeLeave,
      onAfterLeave: this.handleAfterLeave
    }, { default: () => [
      withDirectives(h(
        "div",
        {
          class: ["vg-dialog", ...className],
          style: { zIndex: this.zIndex }
        },
        { default: () => [
            this.title && (
              h("div", { class: ["vg-dialog-title"] }, { default: () => this.title })
            ),
            h("div", { class: "vg-dialog-content" }, { default: () => [this.renderedAsComponent && this.getSlots() || this.message] }),
            buttons.length > 0 && (
              h("div", { class: ["vg-dialog-buttons"] }, { default: () => buttons })
            )
          ]
        }
      ), [[vShow, this.modelValue || this.show]])
    ] });
  }
}
