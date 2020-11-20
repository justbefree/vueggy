/*
* @Author: Just be free
* @Date:   2020-11-19 17:53:44
* @Last Modified by:   Just be free
* @Last Modified time: 2020-11-20 15:36:46
* @E-mail: justbefree@126.com
*/
import VueGgy, { mixins, props, Options } from "../component/VueGgy";
import { h, VNode } from "vue";
import VgFlex from "../flex";
import VgFlexItem from "../flex-item";
// const VALID_CHILD_COMPONENT = "animation-list-item";
const Props = props({
  dataList: {
    type: Array,
    default: () => {
      return [];
    }
  },
  animation: {
    type: Boolean,
    default: true,
  }
});
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
export default class VgAnimationList extends mixins(VueGgy, Props) {
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
    const slots = this.getSlots();
    const children = slots && slots[0] && slots[0].children;
    if (this.animation) {
      this.infinite(children);
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
