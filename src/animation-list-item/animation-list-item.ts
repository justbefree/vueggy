/*
* @Author: Just be free
* @Date:   2020-11-19 17:56:43
* @Last Modified by:   Just be free
* @Last Modified time: 2021-04-14 13:53:05
* @E-mail: justbefree@126.com
*/
import VueGgy, { mixins, prop, Options } from "../component/VueGgy";
import { h, Transition, withDirectives, vShow, VNode } from "vue";

class Props {
  height?: string|number
}
@Options({
  name: "VgAnimationListItem",
  inject: ["parentList"],
  computed: {
    animation() {
      return this.parentList.animation;
    }
  }
})
export default class VgAnimationListItem extends mixins(VueGgy).with(Props) {
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
