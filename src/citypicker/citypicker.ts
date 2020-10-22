/*
* @Author: Just be free
* @Date:   2020-10-22 14:42:19
* @Last Modified by:   Just be free
* @Last Modified time: 2020-10-22 17:30:15
* @E-mail: justbefree@126.com
*/

import { h, withDirectives, vShow, VNode, nextTick } from "vue";
import VueGgy, { mixins, props, Options } from "../component/VueGgy";
import { isChineseCharacters, isPromise, throttle } from "../utils";
import VgFlex from "../flex";
import VgFlexItem from "../flex-item";
import VgPopup from "../popup";
import VgIcon from "../icon";
import VgSpin from "../spin";
interface AnyObject {
  [propName: string]: any;
}
const CACHED_ALPHA_BETA = {} as AnyObject;
export interface Tab {
  key: string;
  label: string;
  [propName: string]: any;
}
const Props = props({
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: "标题"
  },
  column: {
    type: [Number, String],
    default: 4,
    validator: (c: any) => {
      return String(c) === "4" || String(c) === "3";
    }
  },
  parse: {
    type: Function,
    default: (city: any): string => {
      return city.CityName as string;
    }
  },
  limited: {
    type: Boolean,
    default: false
  },
  limitedData: {
    type: Array,
    default: () => {
      return [];
    }
  },
  tabs: {
    type: Array,
    default: () => {
      return [
        { label: "中国", key: "mainland-china" },
        { label: "非中国大陆(国际/港澳台)", key: "overseas" }
      ];
    }
  },
  searchable: {
    type: Boolean,
    default: true
  },
  placeholder: {
    type: String,
    default: "请输入城市名称"
  },
  showHistory: {
    type: Boolean,
    default: false
  },
  showHotCity: {
    type: Boolean,
    default: true
  },
  search: {
    type: Object,
    default: () => {
      return {
        params: {},
        action: () => {
          return Promise.resolve();
        },
        parse: (e: any) => {
          return e;
        }
      };
    }
  },
  history: {
    type: Object,
    default: () => {
      return {
        params: {},
        action: () => {
          return Promise.resolve();
        },
        parse: (e: any) => {
          return e;
        },
        title: "历史查询"
      };
    }
  },
  hotCity: {
    type: Object,
    default: () => {
      return {
        params: {},
        action: () => {
          return Promise.resolve();
        },
        parse: (e: any) => {
          return e;
        },
        title: "热门城市"
      };
    }
  },
  alphaBeta: {
    type: Object,
    default: () => {
      return {
        params: {},
        action: () => {
          return Promise.resolve();
        },
        parse: (e: any) => {
          return e;
        },
        title: "按字母查询"
      };
    }
  }
});
@Options({
  name: "VgCitypicker",
  emits: ["update:modelValue", "pick", "beforeenter", "enter", "afterenter", "beforeleave", "leave", "afterleave"],
  watch: {
    tabs: {
      handler() {
        this.caculatedTabs = [] as Array<Tab>;
        this.tabs.forEach((tab: Tab, index: number) => {
          let active;
          if (index === 0) {
            active = true;
            this.currentTab = tab.key;
          } else {
            active = false;
          }
          this.caculatedTabs.push({ ...tab, active });
        });
      },
      immediate: true
    }
  }
})
export default class VgCitypicker extends mixins(VueGgy, Props) {
  public static componentName = "VgCitypicker";
  public isCompose = false;
  public caculatedTabs = [] as Array<Tab>;
  public currentTab = "";
  public selectedAlphaBeta = "";
  public alphaBetaCities = [];
  public hotCityList = [];
  public historyList = [];
  public searchList = [];
  public historyLoading = false;
  public alphaBetaLoading = false;
  public hotCityLoading = false;
  public isSearching = false;
  public keywords = "";
  createTitle() {
    return h("span", { class: ["vg-city-picker-header-title"] }, { default: () => this.title });
  }
  close() {
    this.$emit("update:modelValue", false);
  }
  handlePick(e: any) {
    if (this.isSearching) {
      // 搜索完结果后，点击结果需清空档次搜索记录
      this.clearSearchKeywords();
    }
    this.handleChange(false);
    this.$emit("pick", e);
  }
  clearSearchKeywords(): void {
    this.isSearching = false;
    this.keywords = "";
    (this.$refs.searchInput as HTMLInputElement).value = "";
  }
  handleChange(e: boolean) {
    this.$emit("update:modelValue", e);
  }
  createClose() {
    return h(VgIcon,
      {
        class: ["vg-city-picker-close"],
        name: "close",
        size: 24,
        onClick: this.close
      },
      { default: () => [] }
    );
  }
  textOverflow(text: string = ""): string[] {
    if (!isChineseCharacters(text)) {
      return [];
    }
    const length = text.length;
    if (length > 4) {
      if (length === 5) {
        return ["text-small"];
      } else {
        return ["text-small", "normal-lineheight"];
      }
    } else {
      return [];
    }
  }
  createBlock({ cities, loading }: { cities: any[]; loading: boolean }): VNode {
    if (loading) {
      return h("div", { class: ["vg-city-picker-searched-area"] }, {
        default: () => [
          h(VgSpin, { type: "tripleBounce", size: 30 }, { default: () => [] })
        ]
      });
    } else {
      return h(VgFlex,
        {
          flexWrap: "wrap",
          justifyContent: "spaceBetween",
          class: "vg-city-picker-cities"
        }, {
        default: () => Array.apply(null, cities).map((city, key) => {
          return h(VgFlexItem,
            {
              key,
              on: { click: this.handlePick.bind(this, city) },
              class: ["city-item", `column-${this.column}`,
                ...this.textOverflow(this.parse(city))
              ]
            },
            { default: () => [h("span", {}, { default: () => this.parse(city) })] }
          );
        })
      });
    }
  }
  createBlockTitle(title: string = ""): VNode {
    return h("div", { class: ["vg-city-picker-block-title"] }, {
      default: () => [
        h("span", {}, { default: () => title })
      ]
    });
  }
  createHistoryArea(): VNode[] {
    const result: VNode[] = [];
    if (this.showHistory) {
      if (this.historyList.length > 0) {
        result.push(this.createBlockTitle(this.history.title));
      }
      result.push(this.createBlock({
        cities: this.historyList,
        loading: this.historyLoading
      }))
    }
    return result;
  }
  createHotCityArea(): VNode[] {
    const result: VNode[] = [];
    if (this.showHotCity) {
      result.push(...[
        this.createBlockTitle(this.hotCity.title),
        this.createBlock({
          cities: this.hotCityList,
          loading: this.hotCityLoading
        })
      ]);
    }
    return result;
  }
  setAlphaBetaScrollTop(): void {
    if (this.limited || this.isSearching) {
      return;
    }
    nextTick(() => {
      const scrollElement = (this.$refs[`scrollElement-${this.currentTab}`] as VgFlexItem)
        .$el;
      const lastChild: HTMLElement = scrollElement.lastElementChild;
      scrollElement.scrollTop = lastChild.offsetTop;
    });
  }
  handleClickAlphaBeta(e: string) {
    if (this.selectedAlphaBeta === e) {
      return false;
    }
    this.selectedAlphaBeta = e;
    this.alphaBetaCities = [];
    if (CACHED_ALPHA_BETA[e] && CACHED_ALPHA_BETA[e].length) {
      this.alphaBetaLoading = false;
      this.alphaBetaCities = CACHED_ALPHA_BETA[e];
    } else {
      this.alphaBetaLoading = true;
      const params = { ...this.alphaBeta.params, alphaBeta: e };
      const promise = this.alphaBeta.action(params);
      if (isPromise(promise)) {
        promise.then((res: any) => {
          const data = this.alphaBeta.parse(res, params);
          if (data && data.length) {
            CACHED_ALPHA_BETA[e] = data;
            this.alphaBetaCities = data;
            this.setAlphaBetaScrollTop();
          }
          this.alphaBetaLoading = false;
        });
      } else {
        console.error("The action of alphaBeta's attribute must be a Promise type!");
      }
    }
  }
  createAlphaBeta(): VNode[] {
    return [
      this.createBlockTitle(this.alphaBeta.title),
      h(VgFlex,
        {
          flexWrap: "wrap",
          justifyContent: "spaceBetween",
          class: ["vg-city-picker-alpha-beta"]
        },
        {
          default: () => Array.apply(null, new Array(26)).map((i, key) => {
            const char = String.fromCharCode(65 + key);
            return h(VgFlexItem,
              {
                onClick: this.handleClickAlphaBeta.bind(this, char),
                class: [
                  "alpha-beta",
                  this.selectedAlphaBeta === char ? "active" : ""
                ]
              },
              { default: () => char }
            );
          })
        }
      )
    ];
  }
  createSearchedArea(): VNode {
    return this.createBlock({
      cities: this.alphaBetaCities,
      loading: this.alphaBetaLoading
    });
  }
  createBodyArea(): VNode[] {
    const body: VNode[] = [];
    body.push(...this.createHistoryArea());
    body.push(...this.createHotCityArea());
    body.push(...this.createAlphaBeta());
    body.push(this.createSearchedArea());
    return body;
  }
  createInputSearchList(): VNode {
    return h(
      "ul",
      {},
      {
        default: () => Array.apply(null, this.searchList).map((list, key) => {
          const innerHTML = this.parse(list, "search-result").replace(
            new RegExp(this.keywords, "ig"),
            `<i>${this.keywords}</i>`
          );
          return h("li", { key, onClick: this.handlePick.bind(this, list) }, {
            default: () => [
              h("span", { innerHTML }, { default: () => [] })
            ]
          });
        })
      }
    );
  }
  clearSearchResult(): void {
    this.searchList = [];
  }
  handleTabSwitch(ctab: Tab): void {
    if (ctab.active) {
      return;
    }
    this.clearSearchResult();
    this.caculatedTabs.forEach((tab: Tab) => {
      if (tab.key === ctab.key) {
        tab.active = true;
        if (this.showHistory) {
          this.getHistory(tab.key);
        }
        if (!this.limited && this.showHotCity) {
          this.getHotCity(tab.key);
        }
      } else {
        tab.active = false;
      }
    });
    this.currentTab = ctab.key;
  }
  handleOnSearch(e: any) {
    if (this.isCompose) return;
    throttle(this.searchRequest)(e);
  }
  onComposeStart() {
    this.isCompose = true;
  }
  onComposeEnd(e: any) {
    this.isCompose = false;
    this.handleOnSearch(e);
  }
  creteInputSearchArea(): VNode[] {
    if (this.searchable) {
      return [h(VgFlex,
        {
          justifyContent: "spaceBetween",
          class: ["vg-city-picker-input-search"]
        },
        {
          default: () => [
            h(VgFlexItem, { class: ["icon-box"] }, {
              default: () => [
                h(VgIcon, { name: "search", size: "16" }, { default: () => [] })
              ]
            }),
            h(VgFlexItem, { class: ["input-box", this.isSearching ? "searching" : ""], flex: 1 }, {
              default: () => [
                h("input",
                  {
                    onCompositionstart: this.onComposeStart,
                    onCompositionend: this.onComposeEnd,
                    onInput: this.handleOnSearch,
                    attrs: { placeholder: this.placeholder },
                    ref: "searchInput"
                  },
                  { default: () => [] }
                )
              ]
            }),
            withDirectives(h(VgFlexItem,
              {
                onClick: this.clearSearchKeywords,
                class: ["delete-all"],
              },
              {
                default: () => [
                  h(VgIcon, { name: "clear", size: 16 }, { default: () => [] })
                ]
              }
            ), [[vShow, this.isSearching]])
          ]
        }
      )];
    }
    return [] as Array<VNode>;
  }
  creteHeaderArea(): Array<VNode> {
    const header: VNode[] = [];
    header.push(this.createTitle());
    header.push(this.createClose());
    if (this.caculatedTabs.length === 2) {
      header.push(
        h(VgFlex,
          {
            justifyContent: "spaceAround",
            class: ["vg-city-picker-tab-bar"]
          },
          {
            default: () => Array.apply(null, this.caculatedTabs).map((ele: any, key: number, arr: any[]) => {
              return h(VgFlexItem,
                {
                  key,
                  onClick: this.handleTabSwitch.bind(this, ele),
                  flex: 1,
                  class: ["vg-city-picker-tab-item", ele.active ? "active" : ""]
                },
                {
                  default: () => [h("span", { class: ["vg-city-picker-tab-text"] }, { default: () => ele.label })]
                }
              );
            })
          }
        )
      );
    }
    header.push(...this.creteInputSearchArea());
    return header;
  }
  createDynamicContent(): VNode[] {
    if (this.limited) {
      return [
        h(VgFlexItem, { class: ["vg-city-picker-header"] }, {
          default: () => [
            this.createTitle(),
            this.createClose()
          ]
        }),
        h(VgFlexItem, { flex: 1 }, {
          default: () => [
            this.createBlock({ cities: this.limitedData, loading: false })
          ]
        })
      ];
    } else {
      return [
        h(VgFlexItem,
          { class: ["vg-city-picker-header"] },
          { default: () => this.creteHeaderArea() }
        ),
        withDirectives(h(VgFlexItem,
          {
            class: ["vg-city-picker-body"],
            flex: 1,
            ref: "scrollElement-mainland-china"
          },
          { default: () => [this.createBodyArea()] }
        ), [[vShow, !this.isSearching && this.currentTab === "mainland-china"]]),
        withDirectives(h(VgFlexItem,
          {
            class: ["vg-city-picker-body"],
            flex: 1,
            ref: "scrollElement-overseas"
          },
          { default: () => [this.createBodyArea()] }
        ), [[vShow, !this.isSearching && this.currentTab === "overseas"]]),
        withDirectives(h(VgFlexItem,
          {
            class: ["vg-city-picker-body", "vg-city-picker-input-search-result"],
            flex: 1,
            ref: "scrollElement-searching"
          },
          { default: () => [this.createInputSearchList()] }
        ), [[vShow, this.isSearching]]),
        h(VgFlexItem, { class: ["vg-city-picker-footer"] }, { default: () => [] })
      ];
    }
  }
  getHistory(e: string): void {
    const params = { ...this.history.params, tab: e };
    const promise = this.history.action(params);
    if (isPromise(promise)) {
      this.historyLoading = true;
      promise.then((res: any) => {
        const data = this.history.parse(res, params);
        if (data && data.length) {
          this.historyList = data;
        }
        this.historyLoading = false;
      });
    } else {
      console.error("The action of hotCity's attribute must be a Promise type!");
    }
  }
  getHotCity(e: string): void {
    const params = { ...this.hotCity.params, tab: e };
    const promise = this.hotCity.action(params);
    if (isPromise(promise)) {
      this.hotCityLoading = true;
      promise.then((res: any) => {
        const data = this.hotCity.parse(res, params);
        if (data && data.length) {
          this.hotCityList = data;
        }
        this.hotCityLoading = false;
      });
    } else {
      console.error("The action of hotCity's attribute must be a Promise type!");
    }
  }
  beforeEnter() {
    if (this.showHistory) {
      this.getHistory(this.currentTab);
    }
    if (!this.limited && this.showHotCity) {
      this.getHotCity(this.currentTab);
    }
    this.$emit("beforeenter");
  }
  enter() {
    this.$emit("enter");
  }
  afterEnter() {
    this.$emit("afterenter");
  }
  beforeLeave() {
    this.$emit("beforeleave");
  }
  leave() {
    this.$emit("leave");
  }
  afterLeave() {
    this.$emit("afterleave");
  }
  render() {
    return h("div", { class: ["vg-city-picker"] }, [
      withDirectives(h(VgPopup,
        {
          onBeforeenter: this.beforeEnter,
          onEnter: this.enter,
          onAfterenter: this.afterEnter,
          onBeforeLeave: this.beforeLeave,
          onLeave: this.leave,
          onAfterleave: this.afterLeave,
          position: "bottom",
          style: { height: "90%" }
        },
        {
          default: () => [
            h(VgFlex,
              {
                class: ["vg-city-picker-content", this.limited ? "limited" : ""],
                flexDirection: "column"
              },
              { default: () => this.createDynamicContent() }
            )
          ]
        }
      ), [[vShow, this.modelValue]])
    ]);
  }
}
