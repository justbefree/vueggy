/*
* @Author: Just be free
* @Date:   2020-11-19 17:53:44
* @Last Modified by:   Just be free
* @Last Modified time: 2021-04-14 14:01:19
* @E-mail: justbefree@126.com
*/
import VueGgy, { mixins, prop, Options } from "../component/VueGgy";
import { h, VNode } from "vue";
import VgFlex from "../flex";
import VgFlexItem from "../flex-item";
// const VALID_CHILD_COMPONENT = "animation-list-item";

class Props {
  dataList = prop<Array<any>>({ default: () => [] })
  animation = prop<boolean>({ default: true })
}
@Options({
  name: "VgAnimationList",
  provide() {
    return {
      parentList: this
    }
  },
  watch: {
    // dataList: function (newValue, oldValue) {
    dataList: function () {
      this.$nextTick(() => {
        this.init();
      });
    }
  }
})
export default class VgAnimationList extends mixins(VueGgy).with(Props) {
  public static componentName = "VgAnimationList";
  public stackList: VNode[] = [];
  infinite(slots: VNode[]) {
    if (slots.length > 0) {
      const slot = slots.shift();
      this.stackList.push(slot as VNode);
      const timer = setTimeout(() => {
        this.infinite(slots);
        clearTimeout(timer);
      }, 50);
    }
  }
  init() {
    this.stackList = [] as VNode[];
    const slots = this.getSlots() as any;
    const children = slots && slots[0] && slots[0].children;
    if (this.animation) {
      this.infinite(children as VNode[]);
    } else {
      this.stackList = slots;
    }
  }
  mounted() {
    this.init();
  }
  render() {
    return h("div", { class: ["vg-animation-list"] }, {
      default: () => [
        h(VgFlex,
          { flexDirection: "column" },
          {
            default: () => Array.apply(null, this.stackList).map((item: any, key: number, arr: any[]) => {
              return h(VgFlexItem, { key }, { default: () => [item] });
            })
          }
        )
      ]
    });
  }
}
