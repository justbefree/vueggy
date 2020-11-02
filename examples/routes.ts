/*
* @Author: Just be free
* @Date:   2020-09-22 14:17:59
* @Last Modified by:   Just be free
* @Last Modified time: 2020-10-30 10:03:36
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
import Layout from "./layout/layout.vue";
import Citypicker from "./citypicker/citypicker.vue";
import Indicator from "./indicator/indicator.vue";
import Slider from "./slider/slider.vue";
import ActionSheet from "./action-sheet/actionSheet.vue";
import PickyStepper from "./picky-stepper/pickyStepper.vue";
import JSapi from "./js-api/api.vue";
const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
    meta: { showFooter: false, showHeader: false, title: "" }
  },
  {
    path: "/components",
    name: "Content",
    component: Content,
    meta: { showFooter: false, showHeader: true, title: "components" }
  },
  {
    path: "/flex",
    name: "Flex",
    component: Flex,
    meta: { showFooter: false, showHeader: true, title: "flex" }
  },
  {
    path: "/toast",
    name: "Toast",
    component: Toast,
    meta: { showFooter: false, showHeader: true, title: "toast" }
  },
  {
    path: "/spin",
    name: "Spin",
    component: Spin,
    meta: { showFooter: false, showHeader: true, title: "spin" }
  },
  {
    path: "/popup",
    name: "Popup",
    component: Popup,
    meta: { showFooter: false, showHeader: true, title: "popup" }
  },
  {
    path: "/icon",
    name: "Icon",
    component: Icon,
    meta: { showFooter: false, showHeader: true, title: "icon" }
  },
  {
    path: "/checkbox",
    name: "Checkbox",
    component: Checkbox,
    meta: { showFooter: false, showHeader: true, title: "checkbox" }
  },
  {
    path: "/radiobox",
    name: "Radiobox",
    component: Radiobox,
    meta: { showFooter: false, showHeader: true, title: "radiobox" }
  },
  {
    path: "/dialog",
    name: "Dialog",
    component: Dialog,
    meta: { showFooter: false, showHeader: true, title: "dialog" }
  },
  {
    path: "/button",
    name: "Button",
    component: Button,
    meta: { showFooter: false, showHeader: true, title: "button" }
  },
  {
    path: "/sticky",
    name: "Sticky",
    component: Sticky,
    meta: { showFooter: false, showHeader: true, title: "sticky" }
  },
  {
    path: "/calendar",
    name: "Calendar",
    component: Calendar,
    meta: { showFooter: false, showHeader: true, title: "calendar" }
  },
  {
    path: "/layout",
    name: "Layout",
    component: Layout,
    meta: { showFooter: false, showHeader: true, title: "layout" }
  },
  {
    path: "/citypicker",
    name: "Citypicker",
    component: Citypicker,
    meta: { showFooter: false, showHeader: true, title: "citypicker" }
  },
  {
    path: "/indicator",
    name: "Indicator",
    component: Indicator,
    meta: { showFooter: false, showHeader: true, title: "indicator" }
  },
  {
    path: "/slider",
    name: "Slider",
    component: Slider,
    meta: { showFooter: false, showHeader: true, title: "slider" }
  },
  {
    path: "/action-sheet",
    name: "ActionSheet",
    component: ActionSheet,
    meta: { showFooter: false, showHeader: true, title: "action-sheet" }
  },
  {
    path: "/picky-stepper",
    name: "PickyStepper",
    component: PickyStepper,
    meta: { showFooter: false, showHeader: true, title: "picky-stepper" }
  },
  {
    path: "/js-api",
    name: "JSapi",
    component: JSapi,
    meta: { showFooter: false, showHeader: true, title: "js-api" }
  }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes
});
export default router;