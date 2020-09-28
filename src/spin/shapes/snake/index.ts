/*
* @Author: Just be free
* @Date:   2020-09-28 11:35:23
* @Last Modified by:   Just be free
* @Last Modified time: 2020-09-28 14:31:34
* @E-mail: justbefree@126.com
*/
import VueGgy, { mixins, props } from "../../../component/VueGgy";
import { h, computed, ref } from "vue";
const Props = props({
  color: String,
  size: Number
});
export default class Snake extends mixins(VueGgy, Props) {
  render() {
    const color = ref(this.color);
    const spinColor = computed(() => color.value);
    const size = ref(this.size);
    const spinSize = computed(() => `${size.value}px`);

    return h("div",
      {
        class: ["vg-spin-snake"],
        style: {
          borderBottomColor: spinColor.value,
          borderLeftColor: spinColor.value,
          borderTopColor: spinColor.value,
          width: spinSize.value,
          height: spinSize.value
        }
      },
    []);
  }
}