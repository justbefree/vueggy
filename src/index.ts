/*
* @Author: Just be free
* @Date:   2020-09-22 15:24:16
* @Last Modified by:   Just be free
* @Last Modified time: 2020-10-12 12:00:14
* @E-mail: justbefree@126.com
*/
import { version } from "../package.json";
import "./index.scss";
import VgFlex from "./flex";
import VgFlexItem from "./flex-item";
import VgToast from "./toast";
import VgSpin from "./spin";
import VgPopup from "./popup";
import VgIcon from "./icon";
import VgCheckbox from "./checkbox";
export interface VueggyConfigOptions {
  [propName: string]: any;
}
const configOptions = {} as VueggyConfigOptions;
const components = [VgFlex, VgFlexItem, VgSpin, VgPopup, VgIcon, VgCheckbox];

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
  app.config.isCustomElement = (tag: string) => tag.startsWith("vg-");
};
const config = (options: VueggyConfigOptions) => {
  Object.keys(options).forEach((attr: string) => {
    configOptions[attr] = options[attr];
  });
};
const Vueggy = { install, version, config };
export { VgFlex, VgFlexItem, VgToast, VgSpin, VgPopup, VgIcon };
export default Vueggy;
