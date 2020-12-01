/*
* @Author: Just be free
* @Date:   2020-11-10 10:41:55
* @Last Modified by:   Just be free
* @Last Modified time: 2020-12-01 10:30:47
* @E-mail: justbefree@126.com
*/
import VueGgy, { mixins, props, Options } from "../component/VueGgy";
import { h, VNode } from "vue";
import VgFlex from "../flex";
import VgFlexItem from "../flex-item";
const VALID_CHILD_COMPONENT = "VgTabItem";
export interface Tab {
  value: string;
  disabled: boolean|undefined;
  index: number;
  name: string;
}
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
  getTitles(slots: VNode[] = []): Tab[] {
    const tabs: Tab[] = [];
    slots.forEach((slot: any, index: number) => {
      const { title, disabled, name } = slot.props;
      tabs.push({ value: title, disabled, index, name });
    });
    return tabs;
  }
  handleTabClick(tab: Tab): void {
    this.$emit("click", tab);
    if (tab.disabled) {
      return;
    }
    if (this.currentTab !== tab.name) {
      this.$emit("change", tab);
    }
    this.currentTab = tab.name;
  }
  getStatus(tab: Tab): string {
    if (tab.disabled) {
      return "disabled";
    }
    if (tab.name === this.currentTab) {
      return "active";
    }
    return "";
  }
  render() {
    const slots = this.getCustomSlotsByTagName(VALID_CHILD_COMPONENT);
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
                  key: tab.name
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
