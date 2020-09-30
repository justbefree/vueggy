/*
* @Author: Just be free
* @Date:   2020-09-22 15:24:16
* @Last Modified by:   Just be free
* @Last Modified time: 2020-09-30 11:36:50
* @E-mail: justbefree@126.com
*/
import { version } from "../package.json";
import "./index.scss";
import VgFlex from "./flex";
import VgFlexItem from "./flex-item";
import VgToast from "./toast";
import VgSpin from "./spin";
import VgPopup from "./popup";
const components = [VgFlex, VgFlexItem, VgSpin, VgPopup];

const install = (app: any, options: any) => {
  console.log("app", app);
  components.map(component => {
    if (component.componentName) {
      // console.log((new component({})).constructor.name);
      console.log(component.componentName);
      // console.log(component, component.name, component.constructor.name);
      app.component(component.componentName, component);
    }
  });
  app.config.globalProperties.Toast = VgToast;
  app.config.isCustomElement = (tag: string) => tag.startsWith("vg-");
};
const Vueggy = { install, version };
export { VgFlex, VgFlexItem, VgToast, VgSpin, VgPopup }
export default Vueggy
