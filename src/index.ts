/*
* @Author: Just be free
* @Date:   2020-09-22 15:24:16
* @Last Modified by:   Just be free
* @Last Modified time: 2020-09-30 10:38:43
* @E-mail: justbefree@126.com
*/
import "./index.scss";
import Flex from "./flex";
import FlexItem from "./flex-item";
import Toast from "./toast";
import Spin from "./spin";
import Popup from "./popup";
const components = [Flex, FlexItem, Spin, Popup];
const install = (app: any, options: any) => {
  console.log("app", app);
  components.map(component => {
    if (component.name) {
      console.log(component, component.name);
      app.component(component.name, component);
    }
  });
  app.config.globalProperties.Toast = Toast;
  app.config.isCustomElement = (tag: string) => tag.startsWith("vg-");
};
export { install };
export default { install };
export { Flex, FlexItem, Toast, Spin, Popup };
