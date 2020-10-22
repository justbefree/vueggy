/*
* @Author: Just be free
* @Date:   2020-09-22 15:24:16
* @Last Modified by:   Just be free
* @Last Modified time: 2020-10-21 15:20:54
* @E-mail: justbefree@126.com
*/
import { version } from "../package.json";
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
export interface VueggyConfigOptions {
  [propName: string]: any;
}
const configOptions = {} as VueggyConfigOptions;
const components = [VgLayout, VgCalendar, VgSticky, VgButton, VgFlex, VgFlexItem, VgSpin, VgPopup, VgIcon, VgCheckbox, VgRadiobox, VgDialog];

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
  app.config.isCustomElement = (tag: string) => tag.startsWith("vg-");
};
const config = (options: VueggyConfigOptions) => {
  Object.keys(options).forEach((attr: string) => {
    configOptions[attr] = options[attr];
  });
};
const Vueggy = { install, version, config };
export { VgLayout, VgCalendar, VgSticky, VgButton, VgFlex, VgFlexItem, VgToast, VgSpin, VgPopup, VgIcon, VgCheckbox, VgRadiobox, VgDialog };
export default Vueggy;
