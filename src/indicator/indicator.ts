/*
* @Author: Just be free
* @Date:   2020-10-23 11:32:56
* @Last Modified by:   Just be free
* @Last Modified time: 2021-04-13 16:58:34
* @E-mail: justbefree@126.com
*/
import { h, withDirectives, vShow, VNode, nextTick, Transition } from "vue";
import VueGgy, { mixins, prop, Options } from "../component/VueGgy";
import VgSpin from "../spin";
class Props {
  text?: string
  spinType?: string
  spinColor?: string
  background?: string
  size?: string|number
  lockScreen?: boolean
  transparent?: boolean
}
@Options({
  name: "VgIndicator"
})
export default class VgIndicator extends mixins(VueGgy).with(Props) {
  public static componentName = "VgIndicator";
  public visible = false;
  setVisible(status: boolean): void {
    this.visible = status;
  }
  render() {
    return h(Transition, { name: "vg-indicator" }, {
      default: () => [
        withDirectives(h("div", { class: ["vg-indicator"] }, {
          default: () => [
            h("div", { class: ["vg-indicator-mask", this.transparent ? "transparent" : ""] }, {
              default: () => []
            }),
            h("div", {
                class: ["vg-indicator-wrapper"],
                style: { padding: this.text ? "20px" : "15px", background: this.background }
              },
              {
                default: () => [
                  h(VgSpin,
                    {
                      size: this.size, type: this.spinType, color: this.spinColor,
                      class: ["vg-indicator-spin"]
                    },
                    { default: () => [] }
                  ),
                  withDirectives(h("span", {
                    class: ["vg-indicator-text"],
                    innerHTML: this.text
                  }), [[vShow, this.text]])
                ]
              }
            )
          ]
        }), [[vShow, this.visible]])
      ]
    });
  }
}