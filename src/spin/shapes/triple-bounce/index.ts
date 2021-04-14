/*
* @Author: Just be free
* @Date:   2020-09-28 11:35:23
* @Last Modified by:   Just be free
* @Last Modified time: 2021-04-13 15:38:45
* @E-mail: justbefree@126.com
*/
import VueGgy, { mixins, prop } from "../../../component/VueGgy";
import { h, computed, ref } from "vue";
class Props {
  color!: string
  size!: number
}
export default class Snake extends mixins(VueGgy).with(Props) {
  render() {
    const color = ref(this.color);
    const spinColor = computed(() => color.value);
    const size = ref(this.size as number);
    const spinSize = computed(() => `${size.value / 3}px`);
    const bounceStyle = computed(() => {
      return {
        width: spinSize.value,
        height: spinSize.value,
        backgroundColor: spinColor.value
      }
    });
    return h("div", { class: ["vg-spin-triple-bounce"] }, [
      h("div", { class: "triple-bounce1", style: bounceStyle.value }, []),
      h("div", { class: "triple-bounce2", style: bounceStyle.value }, []),
      h("div", { class: "triple-bounce3", style: bounceStyle.value }, [])
    ]);
  }
}