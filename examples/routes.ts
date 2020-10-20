/*
* @Author: Just be free
* @Date:   2020-09-22 14:17:59
* @Last Modified by:   Just be free
* @Last Modified time: 2020-10-19 09:54:32
* @E-mail: justbefree@126.com
*/
import { createRouter, createWebHashHistory } from "vue-router";
import Main from "./main/main.vue";
import Content from "./content/content.vue";
import Flex from "./flex/flex.vue";
import Toast from "./toast/toast.vue";
import Spin from "./spin/spin.vue";
import Popup from "./popup/popup.vue";
import Icon from "./icon/icon.vue";
import Checkbox from "./checkbox/checkbox.vue";
import Radiobox from "./radiobox/radiobox.vue";
import Dialog from "./dialog/dialog.vue";
import Button from "./button/button.vue";
import Sticky from "./sticky/sticky.vue";
import Calendar from "./calendar/calendar.vue";
const routes = [
  {
    path: "/",
    name: "Main",
    component: Main
  },
  {
    path: "/components",
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
  },
  {
    path: "/dialog",
    name: "Dialog",
    component: Dialog
  },
  {
    path: "/button",
    name: "Button",
    component: Button
  },
  {
    path: "/sticky",
    name: "Sticky",
    component: Sticky
  },
  {
    path: "/calendar",
    name: "Calendar",
    component: Calendar
  }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes
});
export default router;