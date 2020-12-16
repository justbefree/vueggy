/*
* @Author: Just be free
* @Date:   2020-11-19 17:56:43
* @Last Modified by:   Just be free
* @Last Modified time: 2020-12-16 09:48:52
* @E-mail: justbefree@126.com
*/
import VueGgy, { mixins, props, Options } from "../component/VueGgy";
import { h, Transition, withDirectives, vShow, VNode } from "vue";
const Props = props({
  height: [String, Number]
});
@Options({
  name: "VgAnimationListItem",
  inject: ["parentList"],
  computed: {
    animation() {
      return this.parentList.animation;
    }
  }
})
export default class VgAnimationListItem extends mixins(VueGgy, Props) {
  public static componentName = "VgAnimationListItem";
  public show = false;
  private entered = false;
  handleAfterEnter(): void {
    this.entered = true;
  }
  mounted() {
    if (this.animation) {
      const timer = setTimeout(() => {
        this.show = true;
        clearTimeout(timer);
      }, 1);
    }
  }
  beforeUnmount() {
    this.show = false;
  }
  render() {
    return h(Transition, {
      name: this.animation ? "vg-slide-in" : "",
      onAfterEnter: this.handleAfterEnter
    }, {
      default: () => [
        withDirectives(h("div", { class: ["vg-animation-list-item", this.entered ? "no-transform" : ""], style: { height: `${this.height}px` } }, {
          default: () => this.getSlots()
        }), [[vShow, (this.show || !this.animation)]])
      ]
    });
  }
}
