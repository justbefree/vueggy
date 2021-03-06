/*
* @Author: Just be free
* @Date:   2020-09-22 15:24:40
* @Last Modified by:   Just be free
* @Last Modified time: 2020-10-15 10:57:02
* @E-mail: justbefree@126.com
*/
import VueGgy, { mixins, props, Options } from "../component/VueGgy";
import VgIcon from "../icon";
import { h, computed, ref } from "vue";
const Props = props({
  size: {
    type: [Number, String],
    default: 26
  },
  modelValue: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
});
@Options({
  emits: ["update:modelValue"],
  name: "VgCheckbox"
})
export default class VgCheckbox extends mixins(VueGgy, Props) {
  public static componentName = "VgCheckbox";
  public status = ref(this.modelValue).value;
  toggle(): void {
    if (this.disabled) {
      return;
    }
    if (this.status) {
      this.status = false;
    } else {
      this.status = true;
    }
    this.$emit("update:modelValue", this.status);
  }
  render() {
    const modelValue = ref(this.modelValue);
    const nameComputed = computed(() => `checkbox-${modelValue.value ? "" : "un"}checked`);
    return h(VgIcon, { class: ["vg-checkbox"], size: this.size, name: nameComputed.value, onClick: this.toggle, cursor: "pointer" }, { default: () => [] });
  }
}