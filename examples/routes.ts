/*
* @Author: Just be free
* @Date:   2020-09-22 14:17:59
* @Last Modified by:   Just be free
* @Last Modified time: 2020-10-12 15:11:21
* @E-mail: justbefree@126.com
*/
import { createRouter, createWebHashHistory } from "vue-router";
import Content from "./content/content.vue";
import Flex from "./flex/flex.vue";
import Toast from "./toast/toast.vue";
import Spin from "./spin/spin.vue";
import Popup from "./popup/popup.vue";
import Icon from "./icon/icon.vue";
import Checkbox from "./checkbox/checkbox.vue";
import Radiobox from "./radiobox/radiobox.vue";
const routes = [
  {
    path: "/",
    name: "Content",
    component: Content
  },
  {
    path: "/flex",
    name: "Flex",
    component: Flex
  },
  {
    path: "/toast",
    name: "Toast",
    component: Toast
  },
  {
    path: "/spin",
    name: "Spin",
    component: Spin
  },
  {
    path: "/popup",
    name: "Popup",
    component: Popup
  },
  {
    path: "/icon",
    name: "Icon",
    component: Icon
  },
  {
    path: "/checkbox",
    name: "Checkbox",
    component: Checkbox
  },
  {
    path: "/radiobox",
    name: "Radiobox",
    component: Radiobox
  }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes
});
export default router;