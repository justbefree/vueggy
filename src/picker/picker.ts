/*
* @Author: Just be free
* @Date:   2020-11-05 13:22:24
* @Last Modified by:   Just be free
* @Last Modified time: 2021-04-13 17:32:32
* @E-mail: justbefree@126.com
*/
import VueGgy, { mixins, prop, Options } from "../component/VueGgy";
import { h, vShow, withDirectives, VNode } from "vue";
import { deepClone } from "../utils/deep-clone";
import VgPickerColumn from "./picker-column";
import { ColumnObject } from "./picker-column";
import VgPopup from "../popup";
import VgFlex from "../flex";
import VgFlexItem from "../flex-item";
export interface ChangeCallbackEvent {
  value: any;
  index: number;
  key: number;
}
class Props {
  modelValue!: boolean
  itemHeight = prop<string|number>({ default: 44 })
  columns = prop<Array<any>>({
    default: () => []
  })
  confirmText = prop<string>({ default: "确认" })
  cancelText = prop<string>({ default: "取消" })
  title = prop<string>({ default: "请选择日期" })
  showBack = prop<boolean>({ default: true })
  showClose = prop<boolean>({ default: true })
}

@Options({
  name: "VgPicker",
  emits: ["close", "update:modelValue", "confirm", "change"]
})
export default class VgPicker extends mixins(VueGgy).with(Props) {
  public static componentName = "VgPicker";
  public computedColumn: ColumnObject[] = [];
  public pickColumns = {} as any;
  confirm(): void {
    this.pickColumns = {};
    this.computedColumn.forEach((column: any, key: number) => {
      const pickerColumn = this.$refs[`picker_${key}`] as VgPickerColumn;
      this.pickColumns[`picker_${key}`] = pickerColumn.getSelectedItem();
    });
    this.$emit("confirm", deepClone(this.pickColumns));
    this.$emit("update:modelValue", false);
  }
  close(): void {
    this.$emit("close", false);
    this.$emit("update:modelValue", false);
  }
  getContent(type: string = "back"): VNode[] {
    if (type === "back") {
      return [h("span", { class: ["vg-picker-cancel"] }, { default: () => this.cancelText })];
    } else {
      return [h("span", { class: ["vg-picker-confirm"] }, { default: () => this.confirmText })];
    }
  }
  getData(): void {
    const { columns } = this;
    if (columns.length > 0) {
      const item = columns[0];
      if (item.value && Array.isArray(item.value) && item.value.length > 0) {
        this.computedColumn = columns;
      } else {
        this.computedColumn = [{ value: columns, defaultIndex: 0 }];
      }
    } else {
      this.computedColumn = [];
    }
  }
  change(value: any, index: number, key: number): void {
    this.$emit("change", { value, index, key });
  }
  getColumns() {
    const columns: VNode[] = [];
    this.computedColumn.forEach((column: any, key: number) => {
      columns.push(
        h(VgFlexItem,
          {
            ref: `scrollColumn_${key}`,
            class: ["vg-picker-column-wapper"],
            key,
            flex: 1
          },
          {
            default: () => [
              h(VgPickerColumn,
                {
                  ref: `picker_${key}`,
                  onChange: (value: any, index: number) => {
                    this.change(value, index, key);
                  },
                  defaultIndex: column.defaultIndex || 0,
                  columns: column.value,
                  itemHeight: this.itemHeight
                },
                { default: () => [] }
              )
            ]
          }
        )
      );
    });
    return columns;
  }
  createHeaderArea(): VNode {
    return h("div", { class: ["vg-picker-header"] }, {
      default: () => [
        h(VgFlex,
          { justifyContent: "spaceBetween" },
          {
            default: () => [
              withDirectives(h(VgFlexItem,
                {
                  onClick: this.close,
                  class: ["vg-picker-header-back"],
                },
                {
                  default: () => this.getContent("back")
                }
              ), [[vShow, this.showBack]]),
              h(VgFlexItem,
                {
                  class: [
                    "vg-picker-header-title",
                    this.showBack ? "" : "ml30",
                    this.showClose ? "" : "mr30",
                  ],
                  flex: 1,
                },
                { default: () => this.title }
              ),
              withDirectives(h(VgFlexItem,
                {
                  onClick: this.confirm,
                  class: ["vg-picker-header-close"],
                },
                {
                  default: () => this.getContent("close")
                }
              ), [[vShow, this.showClose]])
            ]
          }
        ),
      ]
    });
  }
  createScrollArea(): VNode {
    return h("div", { class: ["vg-picker-container"] }, {
      default: () => [
        h(VgFlex,
          {
            style: { height: "100%" },
            justifyContent: "spaceBetween",
            alignContent: "center",
            alignItems: "center"
          },
          { default: () => this.getColumns() }
        ),
        h(
          "div",
          { class: ["vg-picker-mask"], style: {}, ref: "pickerMask" },
          { default: () => [] }
        ),
        h("div", { class: ["scroll-viewer-window"] }, { default: () => [] }),
      ]
    });
  }
  beforeEnter() {
    this.getData();
  }
  mounted() {
    (this.$refs.pickerMask as HTMLDivElement).style.backgroundSize = `100% ${Number(this.itemHeight) * 2}px`;
  }
  render() {
    return h("div", { class: ["vg-picker"] }, {
      default: () => [
        withDirectives(h(VgPopup, { position: "bottom", onBeforeenter: this.beforeEnter, onInput: this.close }, {
          default: () => [
            this.createHeaderArea(),
            this.createScrollArea()
          ]
        }), [[vShow, this.modelValue]])
      ]
    });
  }
}