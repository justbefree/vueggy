/*
* @Author: Just be free
* @Date:   2020-09-22 15:24:16
* @Last Modified by:   Just be free
* @Last Modified time: 2020-09-24 15:04:37
* @E-mail: justbefree@126.com
*/
import "./index.scss";
import Flex from "./flex";
import FlexItem from "./flex-item";
import Toast from "./toast";
const components = [Flex, FlexItem, Toast];
const install = (app: any, options: any) => {
  console.log("index install", app, options);
  components.map(component => {
    if (component.name) {
      app.component(component.name, component);
    }
  });
  app.config.globalProperties.Toast = Toast;
  app.config.isCustomElement = (tag: string) => tag.startsWith("vg-");
};
export { install };
export default { install };
export { Flex, FlexItem };
