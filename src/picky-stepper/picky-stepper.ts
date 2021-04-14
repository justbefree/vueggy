/*
* @Author: Just be free
* @Date:   2020-10-28 14:38:23
* @Last Modified by:   Just be free
* @Last Modified time: 2021-04-13 17:09:17
* @E-mail: justbefree@126.com
*/
import VueGgy, { mixins, prop, Options } from "../component/VueGgy";
import { hyphenate, isPromise, hasOwnProperty } from "../utils";
import { h, VNode, withDirectives, vShow } from "vue";
import VgPopup from "../popup";
import VgButton from "../button";
import VgIcon from "../icon";
import VgFlex from "../flex";
import VgFlexItem from "../flex-item";
import VgRadiobox from "../radiobox";
import VgCheckbox from "../checkbox";
export interface StepItemObject {
  label?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  [propName: string]: any;
}
export interface CreateCustomeElementOptions {
  item: StepItemObject; 
  step: StepItemObject;
  stepIndex: number;
  key: string|number;
  display: string;
  [propName: string]: any;
}
class Props {
  modelValue = prop<boolean>({ default: false })
  steps = prop<Array<any>>({ default: () => [] })
  submit = prop<Function>({
    default: () => {}
  })
  confirmText = prop<string>({ default: "确认" })
  closeOnClickModal = prop<boolean>({ default: false })
}
@Options({
  name: "VgPickyStepper",
  emits: ["update:modelValue", "input", "beforeenter", "enter", "afterenter", "beforeleave", "leave", "afterleave", "success"],
  watch: {
    steps: "initData"
  }
})
export default class VgPickyStepper extends mixins(VueGgy).with(Props) {
  public static componentName = "VgPickyStepper";
  public title = "";
  public caculateSteps = [] as any;
  public currentStep = {} as any;
  public submitLoading = false;
  handleChange(e: boolean): void {
    this.$emit("update:modelValue", e);
  }
  handleBeforeEnter() {
    if (this.caculateSteps.length === 0) {
      this.initData();
    }
    this.$emit("beforeenter");
  }
  initData() {
    const steps: Array<StepItemObject> = [];
    this.steps.forEach((step: StepItemObject, index: number) => {
      if (!step.key) {
        step.key = index;
      }
      step.list.forEach((item: StepItemObject, key: number) => {
        if (!item.key) {
          item.key = key;
        }
      });
      steps.push(step);
    });
    this.caculateSteps = this.bindChain(steps);
    this.currentStep = this.caculateSteps[0];
  }
  bindChain(steps: Array<StepItemObject> = []): Array<StepItemObject> {
    return Array.apply(null, steps).map((step: any, index: number, arr: any[]) => {
      step.previousNode = steps[index - 1] ? steps[index - 1].key : null;
      step.nextNode = steps[index + 1] ? steps[index + 1].key : null;
      return step;
    });
  }
  handleEnter() {
    this.$emit("enter");
  }
  handleAfterEnter() {
    this.$emit("afterenter");
  }
  handleBeforeLeave() {
    this.$emit("beforeleave");
  }
  handleLeave() {
    this.$emit("leave");
  }
  handleAfterLeave() {
    this.$emit("afterleave");
  }
  handleInput(): void {
    if (this.closeOnClickModal) {
      this.handleChange(false);
    }
  }
  close() {
    this.handleChange(false);
  }
  stepBack() {
    const { previousNode } = this.currentStep;
    const { caculateSteps } = this;
    this.currentStep = caculateSteps.find((step: StepItemObject) => {
      return step.key === previousNode;
    });
  }
  createBack(): VNode[] {
    const { previousNode } = this.currentStep;
    if (
      previousNode !== null &&
      previousNode !== undefined &&
      previousNode !== ""
    ) {
      return [h(VgIcon,
        {
          class: ["vg-picky-stepper-back"],
          name: "back",
          size: 20,
          onClick: this.stepBack
        },
        { default: () => [] }
      )];
    }
    return [];
  }
  createTitle() {
    return h(
      "span",
      { class: ["vg-picky-stepper-title"] },
      { default: () => this.currentStep.title }
    );
  }
  createClose(): VNode {
    return h(VgIcon,
      {
        class: ["vg-picky-stepper-close"],
        name: "close",
        size: 24,
        cursor: "pointer",
        onClick: this.close,
      },
      { default: () => [] }
    );
  }
  createHeader(): VNode {
    return h("div", { class: ["vg-picky-stepper-header"] }, {
      default: () => [
        ...this.createBack(),
        this.createTitle(),
        this.createClose(),
      ]
    });
  }
  handleCustomeInput(args: any, event: Event) {
    const { item, e } = args;
    item.value = (event.target as HTMLInputElement).value;
    item.count = item.value.length;
    this.updateNode(e);
  }
  createCustomeElement({ item, step, stepIndex, key, display }: CreateCustomeElementOptions) {
    if (item.type && item.type === "input" && display === "inline") {
      return h(VgFlexItem, { flex: 1 }, {
        default: () => [
          h(
            "input",
            {
              onInput: this.handleCustomeInput.bind(this, {
                item,
                e: {
                  step,
                  stepIndex,
                  listItem: item,
                  listIndex: key,
                },
              }),
              class: ["input", item.value !== "" ? "active" : ""],
              placeholder: item.placeholder,
              maxlength: item.maxlength
            },
            []
          ),
        ]
      });
    } else if (
      item.type &&
      item.type === "textarea" &&
      display === "column"
    ) {
      const { count = 0 } = item;
      return h("div", { class: "textarea-wapper" }, [
        h("textarea", { class: ["textarea", item.value !== "" ? "active" : ""], onInput: this.handleCustomeInput.bind(this, {
          item,
          e: {
            step,
            stepIndex,
            listItem: item,
            listIndex: key
          }
        }), placeholder: item.placeholder, maxlength: item.maxlength }, []),
        withDirectives(h("div", { class: "textarea-counter" }, [`${count}/${item.maxlength}`]), [[vShow, item.counter && item.maxlength > 0]])
      ]);
    }
  }
  replace(arr: any[] = [], index: number, node: any): Array<any> {
    arr.splice(index, 1, node);
    return arr;
  }
  updateNode(e: StepItemObject): void {
    const { step, stepIndex, listItem, listIndex } = e;
    const stepNode = this.caculateSteps.find((item: StepItemObject) => {
      return item.key === step.key;
    });
    const listNode = stepNode.list.find((item: StepItemObject) => {
      return listItem.key === item.key;
    });
    this.replace(stepNode.list, listIndex, listNode);
    this.replace(this.caculateSteps, stepIndex, stepNode);
  }
  getSelectedData(): Array<StepItemObject> {
    const { caculateSteps } = this;
    const results: StepItemObject[] = [];
    caculateSteps.forEach((step: StepItemObject) => {
      const list: StepItemObject[] = [];
      step.list.forEach((item: StepItemObject) => {
        if (item.checked) {
          list.push(item);
        }
      });
      results.push({ list, key: step.key });
    });
    return results;
  }
  destroyData(): void {
    this.caculateSteps = [];
  }
  handleStepConfirm() {
    const { currentStep, caculateSteps } = this;
    if (currentStep.nextNode) {
      this.currentStep = caculateSteps.find((step: StepItemObject) => {
        return step.key === currentStep.nextNode;
      });
    } else {
      this.submitLoading = true;
      const result = this.getSelectedData();
      if (this.submit && typeof this.submit === "function") {
        const promise = this.submit(result);
        if (isPromise(promise)) {
          promise.then((res: any) => {
            this.close();
            this.$emit("success", result, res);
            this.submitLoading = false;
            this.destroyData();
          });
        } else {
          this.submitLoading = false;
          this.close();
          this.$emit("success", result);
        }
      } else {
        this.submitLoading = false;
        this.close();
        this.$emit("success", result);
      }
    }
  }
  handlePickyClick(e: StepItemObject): void {
    const { listItem, step } = e;
    if (step.multiple) {
      listItem.checked = !listItem.checked;
    } else {
      step.list.forEach((list: StepItemObject) => {
        if (list.key === listItem.key) {
          list.checked = true;
        } else {
          list.checked = false;
        }
      });
    }
    this.updateNode(e);
  }
  createPickerList(step: StepItemObject, stepIndex: number): VNode {
    const show: boolean = step.key === this.currentStep.key;
    return h(
      "div",
      {
        class: ["vg-picky-stepper-content", show ? "show" : "hide"]
      },
      {
        default: () => [
          h(
            "ul",
            { class: [] },
            {
              default: () => Array.apply(null, step.list).map((item: any, key: number, arr: any[]) => {
                return h(
                  "li",
                  {
                    onClick: this.handlePickyClick.bind(this, {
                      step,
                      stepIndex,
                      listItem: item,
                      listIndex: key,
                    }),
                    key
                  },
                  {
                    default: () => [
                      h(VgFlex, {}, {
                        default: () => [
                          h(VgFlexItem, {}, {
                            default: () => [
                              step.multiple
                                ? h(VgCheckbox,
                                    { modelValue: item.checked, size: 20 },
                                    { default: () => [] }
                                  )
                                : h(VgRadiobox,
                                    { modelValue: item.checked, size: 20 },
                                    { default: () => [] }
                                  )
                            ]
                          }),
                          h(VgFlexItem, {}, {
                            default: () => [
                              h("span", { class: ["text"] }, { default: () => item.label }),
                            ]
                          }),
                          this.createCustomeElement({
                            item,
                            step,
                            stepIndex,
                            key,
                            display: "inline",
                          }),
                        ]
                      }),
                      this.createCustomeElement({
                        item,
                        step,
                        stepIndex,
                        key,
                        display: "column",
                      }),
                    ]
                  }
                );
              })
            }
          ),
        ]
      }
    );
  }
  createSteps() {
    return Array.apply(null, this.caculateSteps).map((step: any, index: number, arr: any[]) => {
      return this.createPickerList(step, index);
    });
  }
  getDisabledStatus(): boolean {
    const { currentStep } = this;
    let actived;
    if (currentStep && currentStep.list && currentStep.list.length > 0) {
      actived = currentStep.list.find((item: StepItemObject) => {
        if (["input", "textarea"].indexOf(item.type as string) > -1) {
          const required = hasOwnProperty(item, "required") ? item.required : true;
          return item.checked && (required ? item.value !== "" : true);
        } else {
          return item.checked;
        }
      });
    }
    return this.submitLoading || !actived;
  }
  createFooter(): VNode {
    return h("div", { class: ["vg-picky-stepper-footer"] }, {
      default: () => [
        h(VgButton,
          {
            onClick: this.handleStepConfirm,
            class: ["step-confirm"],
            size: "large",
            type: "primary",
            loading: this.submitLoading,
            disabled: this.getDisabledStatus(),
            loadingColor: "#fff"
          },
          { default: () => this.confirmText }
        )
      ]
    });
  }
  render() {
    return h("div", { class: ["vg-picky-stepper"] }, [
     withDirectives(h(VgPopup,
        {
          onInput: this.handleInput,
          onBeforeenter: this.handleBeforeEnter,
          onEnter: this.handleEnter,
          onAfterenter: this.handleAfterEnter,
          onBeforeleave: this.handleBeforeLeave,
          onLeave: this.handleLeave,
          onAfterleave: this.handleAfterLeave,
          position: "bottom",
          style: { "max-height": "80%" },
        },
        { default: () => [this.createHeader(), ...this.createSteps(), this.createFooter()] }
      ), [[vShow, this.modelValue]])
    ]);
  }
}
