/*
* @Author: Just be free
* @Date:   2020-11-10 10:41:55
* @Last Modified by:   Just be free
* @Last Modified time: 2020-11-10 18:31:15
* @E-mail: justbefree@126.com
*/
import VueGgy, { mixins, props, Options } from "../component/VueGgy";
import { h } from "vue";
import VgFlex from "../flex";
import VgFlexItem from "../flex-item";
// const VALID_CHILD_COMPONENT = "tab-item";
const Props = props({
  modelValue: [String, Number]
});
@Options({
  name: "VgTabs",
  emits: ["click", "change"],
  provide() {
    return {
      parentTab: this
    }
  }
})
export default class VgTabs extends mixins(VueGgy, Props) {
  public static componentName = "VgTabs";
  public currentTab = this.modelValue;
  public children = [] as any;
  getTitles(slots = []): any[] {
    const children = (slots[0] as any).children;
    console.log("children", children);
    this.children = children.map((child: any) => JSON.stringify(child.children.default()));
    const tabs: any[] = [];
    children.forEach((slot: any, index: number) => {
      const { title, disabled } = slot.props;
      tabs.push({ value: title, disabled, index: index });
    });
    return tabs;
  }
  handleTabClick(tab: any): void {
    this.$emit("click", tab);
    if (tab.disabled) {
      return;
    }
    if (this.currentTab !== tab.index) {
      this.$emit("change", tab);
    }
    this.currentTab = tab.index;
  }
  getStatus(tab: any): string {
    if (tab.disabled) {
      return "disabled";
    }
    if (tab.index === this.currentTab) {
      return "active";
    }
    return "";
  }
  render() {
    // let validChildComponent = VALID_CHILD_COMPONENT;
    const slots = this.getSlots();
    const tabTitles = this.getTitles(slots);
    const flex = tabTitles.length > 4 ? "0 0 22%" : 1;
    return h("div", { class: ["vg-tabs"] }, [
      h("div", { class: ["vg-tabs-nav"] }, [
        h(VgFlex,
          { style: { overflowX: "auto", userSelect: "none" } },
          {
            default: () => Array.apply(null, tabTitles).map((tab: any, index: number, arr: any[]) => {
              return h(VgFlexItem,
                {
                  style: { textAlign: "center" },
                  flex,
                  onClick: this.handleTabClick.bind(this, tab),
                  key: tab.index
                },
                {
                  default: () => [
                    h(
                      "span",
                      { class: ["vg-tab-text", this.getStatus(tab)] },
                      { default: () => tab.value }
                    )
                  ]
                }
              );
            })
          }
        )
      ]),
      h("div", { class: ["vg-tabs-content"] }, { default: () => slots })
    ]);
  }
}
