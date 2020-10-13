/*
* @Author: Just be free
* @Date:   2020-09-28 14:57:46
* @Last Modified by:   Just be free
* @Last Modified time: 2020-10-13 12:21:34
* @E-mail: justbefree@126.com
*/
/**
references
https://v3.vuejs.org/guide/migration/v-model.html
*/
import VueGgy, { mixins, props, Options } from "../component/VueGgy";
import { h, Transition, withDirectives, vShow, VNode } from "vue";
const VALIDATE_POSITION_VALUE = ["left", "right", "top", "bottom", "middle"];
// import PopupManager from "../component/popupManager.js";
import PopupManager from "../component/popupManager";
import { addClass } from "../utils/dom";
let idSeed = 1;
const closeIcon = require("./close.svg");
const Props = props({
  modelValue: {
    type: Boolean,
    default: false
  },
  position: {
    type: String,
    default: "bottom"
  },
  closeOnClickModal: {
    type: Boolean,
    default: true
  },
  borderRadius: {
    type: Number,
    default: 10
  },
  lockScreen: {
    type: Boolean,
    default: true
  },
  showCloseIcon: {
    type: Boolean,
    default: false
  },
  singleton: {
    type: Boolean,
    default: false
  },
  fixed: Boolean
});
@Options({
  name: "VgPopup"
})
export default class VgPopup extends mixins(VueGgy, Props) {
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
  removeModal() {}
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
    this.$emit("before-enter");
  }
  handleEnter() {
    this.$emit("enter");
  }
  handleAfterEneter() {
    this.$emit("after-enter");
  }
  handleBeforeLeave() {
    this.$emit("before-leave");
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
    this.$emit("after-leave");
  }
  close() {
    this.$emit("update:modelValue", false);
  }
  createCloseIcon(): VNode {
    return h("div", { class: ["vg-popup-closeicon", this.fixed ? "fixed" : ""] }, {
      default: () => [
        h("img", { src: closeIcon, onClick: this.close }, { default: () => [] })
      ]
    });
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
    const slots = this.$slots.default && (typeof this.$slots.default === "function") && this.$slots.default();
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
            { default: () => [this.createCloseIcon(), slots] }
          ), [[vShow, this.modelValue]])
        ]
      }
    );
  }
}
