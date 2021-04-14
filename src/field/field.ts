/*
* @Author: Just be free
* @Date:   2020-12-07 14:36:07
* @Last Modified by:   Just be free
* @Last Modified time: 2021-04-14 14:24:54
* @E-mail: justbefree@126.com
*/
import VueGgy, { mixins, prop, Options } from "../component/VueGgy";
import { h, VNode, vShow, withDirectives } from "vue";
import { encrypt } from "../utils/string";
import VgFlex from "../flex";
import VgFlexItem from "../flex-item";
import VgIcon from "../icon";
const VALID_TYPE = ["number", "textarea", "password", "text", "email", "tel"];
class Props {
  modelValue = prop<string|number>({ default: "" })
  label?: string
  placeholder?: string
  maxlength?: number|string
  readonly = prop<boolean>({ default: false })
  autofocus = prop<boolean>({ default: false })
  required = prop<boolean>({ default: false })
  disabled = prop<boolean>({ default: false })
  clearable = prop<boolean>({ default: false })
  interactive = prop<string>({ default: "address" })
  type = prop<string>({ default: "text" })
  iconName?: string
  showTextareaCounter = prop<boolean>({ default: false })
  encrypted = prop<boolean>({ default: false })
  display = prop<string>({ default: "row" })
  pattern?: string
  encrypt = prop<Function>({ default: encrypt })
}

@Options({
  name: "VgField",
  emits: ["blur", "update:modelValue", "focus", "click"],
  computed: {
    isColumnDisplay() {
      return this.display === "column";
    }
  }
})
export default class VgField extends mixins(VueGgy).with(Props) {
  public static componentName = "VgField";
  public target: null|HTMLInputElement = null;
  public showIcon = false;
  public showEncryptInput = false;
  public originalText = this.modelValue;
  public inputing = false;
  handleIconClick(): void {
    if (this.clearable) {
      // (this.target as HTMLInputElement).value = "";
      this.$emit("update:modelValue", "");
      this.showIcon = false;
    }
  }
  handleOnFocus(e: InputEvent): void {
    this.target = e.target as HTMLInputElement;
    this.$emit("focus", e);
    this.$emit("click", e);
    if (this.encrypted) {
      // (e.target as HTMLInputElement).value = "";
      this.$emit("update:modelValue", "");
    }
  }
  handleInput(e: InputEvent): void {
    if (this.clearable && (e.target as HTMLInputElement).value) {
      this.showIcon = true;
    } else {
      this.showIcon = false;
    }
    this.inputing = true;
    this.$emit("update:modelValue", (e.target as HTMLInputElement).value);
  }
  handleOnBlur(e: InputEvent): void {
    this.inputing = false;
    if (this.encrypted) {
      if (this.modelValue === "") {
        this.$emit("update:modelValue", this.originalText);
        // this.$emit("update:modelValue", this.encrypt(this.originalText));
      } else {
        this.originalText = (this.target as HTMLInputElement).value;
      }
    }
    this.$emit("blur", e);
  }
  createIcon(): VNode[] {
    const icon = [] as VNode[];
    const name = this.clearable ? "clear" : this.iconName as string;
    if (this.clearable || this.iconName) {
      if (this.modelValue !== "") {
        this.showIcon = true;
      }
      icon.push(
        withDirectives(h(VgFlexItem,
          {
            onClick: this.handleIconClick,
          },
          {
            default: () => [h(VgIcon, { name, size: "16", cursor: "pointer" }, { default: () => [] })]
          }
        ), [[vShow, this.showIcon]]
      ));
    }
    return icon;
  }
  createInput(): VNode[] {
    const maxlength = this.maxlength ? Number(this.maxlength) : null;
    const area = [] as VNode[];
    const attrs = {
      readonly: this.readonly,
      placeholder: this.placeholder,
      autofocus: this.autofocus,
      value: this.encrypted && !this.inputing ? this.encrypt(this.modelValue) : this.modelValue,
      // value: this.modelValue,
      required: this.required,
      disabled: this.disabled,
      maxlength,
      pattern: this.pattern,
    } as any;
    const events = {
      onFocus: this.handleOnFocus,
      onBlur: this.handleOnBlur,
      onInput: this.handleInput,
    };
    const className = [] as Array<string>;
    if (this.disabled) {
      className.push("disable");
    }
    const columnDisplayClass = this.isColumnDisplay ? "column-flex-item" : "";
    if (VALID_TYPE.indexOf(this.type) > -1) {
      if (this.type === "textarea") {
        area.push(
          h(VgFlexItem,
            { class: ["vg-field-textarea", columnDisplayClass], flex: 1 },
            {
              default: () => [
                h(
                  "textarea",
                  {
                    class: ["textarea-ele", ...className],
                    ...events,
                    ...attrs,
                  },
                  { default: () => [] }
                ),
                withDirectives(h(
                  "div",
                  {
                    class: ["vg-field-textarea-counter"],
                  },
                  {
                    default: () => [
                      h("span", {}, { default: () => `${String(this.modelValue).length}/${this.maxlength}` })
                    ]
                  }
                ), [[vShow, this.showTextareaCounter]]),
              ]
            }
          )
        );
      } else {
        area.push(
          h(VgFlexItem,
            { class: ["vg-field-input", columnDisplayClass], flex: 1 },
            {
              default: () => [
                h(
                  "input",
                  {
                    ...events,
                    class: ["input-ele", ...className],
                    type: this.type,
                    ...attrs,
                  },
                  { default: () => [] }
                ),
              ]
            }
          )
        );
      }
    }
    return area;
  }
  genLabel(label: string): VNode {
    const limitLabelWidth = this.isColumnDisplay ? "column-flex-item" : "limit-label-width";
    return h(VgFlexItem, { class: ["vg-field-label", limitLabelWidth] }, {
      default: () => [
        h("div", { class: ["label-wrapper"] }, label),
      ]
    });
  }
  render() {
    const slots = this.getSlots("label");
    const label = [] as VNode[];
    if (slots && String(slots).length > 0) {
      label.push(this.genLabel(String(slots)));
    } else if (this.label) {
      label.push(this.genLabel(this.label));
    }
    return h("div", { class: ["vg-field", "border-top-bottom", this.isColumnDisplay ? "vg-field-column" : ""] }, {
      default: () => [
        h(VgFlex,
          {
            flexDirection: this.display,
            class: ["vg-field-container"],
          },
          {
            default: () => [...label, ...this.createInput(), ...this.createIcon()]
          }
        ),
      ]
    });
  }
}
