/*
* @Author: Just be free
* @Date:   2020-09-28 14:57:46
* @Last Modified by:   Just be free
* @Last Modified time: 2021-04-13 15:46:23
* @E-mail: justbefree@126.com
*/
/**
references
https://v3.vuejs.org/guide/migration/v-model.html
*/
import VueGgy, { mixins, prop, Options } from "../component/VueGgy";
import { h, Transition, withDirectives, vShow, VNode } from "vue";
import VgIcon from "../icon";
const VALIDATE_POSITION_VALUE = ["left", "right", "top", "bottom", "middle"];
import PopupManager from "../component/popupManager";
import { addClass } from "../utils/dom";
let idSeed = 1;
// const Emits = emits(["update:modelValue", "before-enter", "enter", "after-enter", "before-leave", "leave", "after-leave"]);
class Props {
  modelValue = prop<boolean>({ default: false })
  position = prop<string>({ default: "bottom" })
  closeOnClickModal = prop<boolean>({ default: true })
  borderRadius = prop<number>({ default: 10 })
  lockScreen = prop<boolean>({ default: true })
  showCloseIcon = prop<boolean>({ default: false })
  singleton = prop<boolean>({ default: false })
  fixed?: boolean
}
@Options({
  emits: ["update:modelValue", "beforeenter", "enter", "afterenter", "beforeleave", "leave", "afterleave", "input"],
  name: "VgPopup"
})
export default class VgPopup extends mixins(VueGgy).with(Props) {
  public static componentName = "VgPopup";
  public bodyOverflow = "";
  public time = 0;
  public diff = 0;
  public zIndex = 2000;
  public idSeed = idSeed;
  public events = {
    closeModal: () => {}
  };
  isValidatePositionVlaue(): boolean {
    return VALIDATE_POSITION_VALUE.indexOf(this.position) > -1;
  }
  hanleFastClick() {}
  removeModal() {
    if (this.singleton) {
      document.body.style.overflow = this.bodyOverflow;
    }
    this.events["closeModal"] &&
      typeof this.events["closeModal"] === "function" &&
      this.events["closeModal"]();
    this.events = {
      closeModal: () => {}
    };
  }
  handleBeforeEnter(node: any) {
    this.bodyOverflow = document.body.style.overflow;
    const parentNode = node.parentNode as HTMLElement;
    const modal = document.createElement("div");
    addClass(modal, "v-vgpopup-modal");
    parentNode.insertBefore(modal, node);
    if (this.singleton) {
      modal.style.zIndex = `${this.zIndex + idSeed}`;
      this.$el.style.zIndex = this.zIndex + idSeed + 1;
      if (this.lockScreen) {
        document.body.style.overflow = "hidden";
      }
      this.events["closeModal"] = function() {
        parentNode.removeChild(modal);
      };
      modal.onclick = () => {
        if (this.closeOnClickModal) {
          this.close();
        }
      };
    } else {
      parentNode.insertBefore(modal, node);
      PopupManager.register(idSeed, this);
    }
    this.idSeed = idSeed;
    idSeed++;
    this.$emit("beforeenter");
  }
  handleEnter() {
    this.$emit("enter");
  }
  handleAfterEneter() {
    this.$emit("afterenter");
  }
  handleBeforeLeave() {
    this.$emit("beforeleave");
  }
  handleLeave() {
    if (this.diff < 1000) {
      if (this.singleton) {
        this.removeModal();
      }
    }
    this.$emit("leave");
  }
  handleAfterLeave() {
    if (this.singleton) {
      this.removeModal();
    } else {
      PopupManager.closeModal(this.idSeed);
    }
    this.$emit("afterleave");
  }
  close() {
    this.$emit("update:modelValue", false);
    this.$emit("input", false);
  }
  createCloseIcon(): VNode[] {
    if (this.showCloseIcon) {
      return [h("div", { class: ["vg-popup-closeicon", this.fixed ? "fixed" : ""] }, {
        default: () => [
          h(VgIcon, { name: "close", onClick: this.close }, { default: () => [] })
        ]
      })];
    } else {
      return [];
    }
  }
  genStyle(position: string) {
    if (position === "bottom") {
      return {
        borderRadius: `${this.borderRadius}px ${this.borderRadius}px 0 0`
      };
    } else if (position === "top") {
      return {
        borderRadius: `0 0 ${this.borderRadius}px ${this.borderRadius}px`
      };
    } else {
      return {};
    }
  }
  render() {
    let position = "bottom";
    if (this.isValidatePositionVlaue()) {
      position = this.position;
    } else {
      console.warn(`${this.position} is not a valid value of position props`);
    }
    return h(
      Transition,
      {
        name: `vg-popup-slide-${position}`,
        onBeforeEnter: this.handleBeforeEnter,
        onEnter: this.handleEnter,
        onAfterEnter: this.handleAfterEneter,
        onBeforeLeave: this.handleBeforeLeave,
        onLeave: this.handleLeave,
        onAfterLeave: this.handleAfterLeave
      },
      {
        default: () => [
          withDirectives(h(
            "div",
            {
              class: ["vg-popup", `vg-popup-${position}`],
              style: { ...this.genStyle(position) }
            },
            { default: () => [this.createCloseIcon(), this.getSlots()] }
          ), [[vShow, this.modelValue]])
        ]
      }
    );
  }
}
