/*
* @Author: Just be free
* @Date:   2020-09-22 15:24:16
* @Last Modified by:   Just be free
* @Last Modified time: 2020-09-22 18:27:15
* @E-mail: justbefree@126.com
*/
import "./index.scss";
import Flex from "./flex";
import FlexItem from "./flex-item";
const components = [Flex, FlexItem];
const install = (Vue: any) => {
  // if (install.installed) return;
  // install.installed = true;
  components.map(component => {
    if (component.name) {
      Vue.component(component.name, component);
    }
    // else if (component.install) {
    //   Vue.use(component);
    // }
  });
};
export { install };
export default { install };
export { Flex, FlexItem };
