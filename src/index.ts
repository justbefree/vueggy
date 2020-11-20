/*
* @Author: Just be free
* @Date:   2020-09-22 15:24:16
* @Last Modified by:   Just be free
* @Last Modified time: 2020-11-19 18:07:14
* @E-mail: justbefree@126.com
*/
import { version } from "../package.json";
// TOOLS
import { deepClone } from "./utils/deep-clone";
const Tools = {
  deepClone
}
import "./index.scss";
import VgButton from "./button";
import VgFlex from "./flex";
import VgFlexItem from "./flex-item";
import VgToast from "./toast";
import VgSpin from "./spin";
import VgPopup from "./popup";
import VgIcon from "./icon";
import VgCheckbox from "./checkbox";
import VgRadiobox from "./radiobox";
import Dialog, { VgDialog } from "./dialog";
import VgSticky from "./sticky";
import VgCalendar from "./calendar";
import VgLayout from "./layout";
import VgCitypicker from "./citypicker";
import VgIndicator from "./indicator";
import VgSlider from "./slider";
import VgActionSheet from "./action-sheet";
import VgPickyStepper from "./picky-stepper";
import VgCounter from "./counter";
import VgPullRefresh from "./pull-refresh";
import VgSkeleton from "./skeleton";
import VgPicker from "./picker";
import VgDatePicker from "./date-picker";
import VgTabs from "./tabs";
import VgTabItem from "./tab-item";
import VgAnimationList from "./animation-list";
import VgAnimationListItem from "./animation-list-item";
export interface VueggyConfigOptions {
  [propName: string]: any;
}
const configOptions = {} as VueggyConfigOptions;
const components = [VgAnimationListItem, VgAnimationList, VgTabItem, VgTabs, VgDatePicker, VgPicker, VgSkeleton, VgPullRefresh, VgCounter, VgPickyStepper, VgActionSheet, VgSlider, VgCitypicker, VgLayout, VgCalendar, VgSticky, VgButton, VgFlex, VgFlexItem, VgSpin, VgPopup, VgIcon, VgCheckbox, VgRadiobox, VgDialog];

const install = (app: any, options: any) => {
  components.map(component => {
    const merge = (component as any).extendData;
    if (merge && typeof merge === "function") {
      merge(configOptions[component.componentName]);
    }
    if (component.componentName) {
      app.component(component.componentName, component);
    }
  });
  app.config.globalProperties.Toast = VgToast;
  app.config.globalProperties.Dialog = Dialog;
  app.config.globalProperties.Indicator = VgIndicator;
  app.config.isCustomElement = (tag: string) => tag.startsWith("vg-");
};
const config = (options: VueggyConfigOptions) => {
  Object.keys(options).forEach((attr: string) => {
    configOptions[attr] = options[attr];
  });
};
const Vueggy = { install, version, config, Tools };
export { VgTabItem, VgTabs, VgDatePicker, VgPicker, VgSkeleton, VgPullRefresh, VgCounter, VgPickyStepper, VgActionSheet, VgSlider, VgIndicator, VgCitypicker, VgLayout, VgCalendar, VgSticky, VgButton, VgFlex, VgFlexItem, VgToast, VgSpin, VgPopup, VgIcon, VgCheckbox, VgRadiobox, VgDialog };
export default Vueggy;
