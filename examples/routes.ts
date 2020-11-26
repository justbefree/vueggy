/*
* @Author: Just be free
* @Date:   2020-09-22 14:17:59
* @Last Modified by:   Just be free
* @Last Modified time: 2020-11-25 14:18:11
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
import Counter from "./counter/counter.vue";
import PullRefresh from "./pull-refresh/refresh.vue";
import Skeleton from "./skeleton/skeleton.vue";
import Picker from "./picker/picker.vue";
import DatePicker from "./date-picker/datePicker.vue";
import Tabs from "./tabs/tabs.vue";
import AnimationList from "./animation-list/animationList.vue";
import Swipe from "./swipe/swipe.vue";
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
    path: "/counter",
    name: "Counter",
    component: Counter,
    meta: { showFooter: false, showHeader: true, title: "counter" }
  },
  {
    path: "/pull-refresh",
    name: "PullRefresh",
    component: PullRefresh,
    meta: { showFooter: false, showHeader: true, title: "pull-refresh" }
  },
  {
    path: "/skeleton",
    name: "Skeleton",
    component: Skeleton,
    meta: { showFooter: false, showHeader: true, title: "skeleton" }
  },
  {
    path: "/picker",
    name: "Picker",
    component: Picker,
    meta: { showFooter: false, showHeader: true, title: "picker" }
  },
  {
    path: "/date-picker",
    name: "DatePicker",
    component: DatePicker,
    meta: { showFooter: false, showHeader: true, title: "date-picker" }
  },
  {
    path: "/tabs",
    name: "Tabs",
    component: Tabs,
    meta: { showFooter: false, showHeader: true, title: "tabs" }
  },
  {
    path: "/animation-list",
    name: "AnimationList",
    component: AnimationList,
    meta: { showFooter: false, showHeader: true, title: "animation-list" }
  },
  {
    path: "/swipe",
    name: "Swipe",
    component: Swipe,
    meta: { showFooter: false, showHeader: true, title: "swipe" }
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