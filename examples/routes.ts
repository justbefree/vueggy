/*
* @Author: Just be free
* @Date:   2020-09-22 14:17:59
* @Last Modified by:   Just be free
* @Last Modified time: 2020-12-01 17:52:32
* @E-mail: justbefree@126.com
*/
import { createRouter, createWebHashHistory } from "vue-router";
import Main from "./main/main.vue";
import Content from "./content/content.vue";
import Flex from "./flex/flex.vue";
import FlexCode from "./flex/code.vue";
import Toast from "./toast/toast.vue";
import ToastCode from "./toast/code.vue";
import Spin from "./spin/spin.vue";
import SpinCode from "./spin/code.vue";
import Popup from "./popup/popup.vue";
import PopupCode from "./popup/code.vue";
import Icon from "./icon/icon.vue";
import IconCode from "./icon/code.vue";
import Checkbox from "./checkbox/checkbox.vue";
import CheckboxCode from "./checkbox/code.vue";
import Radiobox from "./radiobox/radiobox.vue";
import RadioboxCode from "./radiobox/code.vue";
import Dialog from "./dialog/dialog.vue";
import DialogCode from "./dialog/code.vue";
import Button from "./button/button.vue";
import ButtonCode from "./button/code.vue";
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
import SubmitBar from "./submit-bar/submitBar.vue";
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
    meta: { showFooter: false, showHeader: true, title: "flex", code: true }
  },
  {
    path: "/flex-code",
    name: "FlexCode",
    component: FlexCode,
    meta: { showFooter: false, showHeader: true, title: "source code" }
  },
  {
    path: "/toast",
    name: "Toast",
    component: Toast,
    meta: { showFooter: false, showHeader: true, title: "toast", code: true }
  },
  {
    path: "/toast-code",
    name: "ToastCode",
    component: ToastCode,
    meta: { showFooter: false, showHeader: true, title: "source code" }
  },
  {
    path: "/spin",
    name: "Spin",
    component: Spin,
    meta: { showFooter: false, showHeader: true, title: "spin", code: true }
  },
  {
    path: "/spin-code",
    name: "SpinCode",
    component: SpinCode,
    meta: { showFooter: false, showHeader: true, title: "spin" }
  },
  {
    path: "/popup",
    name: "Popup",
    component: Popup,
    meta: { showFooter: false, showHeader: true, title: "popup", code: true }
  },
  {
    path: "/popup-code",
    name: "PopupCode",
    component: PopupCode,
    meta: { showFooter: false, showHeader: true, title: "source code" }
  },
  {
    path: "/icon",
    name: "Icon",
    component: Icon,
    meta: { showFooter: false, showHeader: true, title: "icon", code: true }
  },
  {
    path: "/icon-code",
    name: "IconCode",
    component: IconCode,
    meta: { showFooter: false, showHeader: true, title: "source code" }
  },
  {
    path: "/checkbox",
    name: "Checkbox",
    component: Checkbox,
    meta: { showFooter: false, showHeader: true, title: "checkbox", code: true }
  },
  {
    path: "/checkbox-code",
    name: "CheckboxCode",
    component: CheckboxCode,
    meta: { showFooter: false, showHeader: true, title: "source code" }
  },
  {
    path: "/radiobox",
    name: "Radiobox",
    component: Radiobox,
    meta: { showFooter: false, showHeader: true, title: "radiobox", code: true }
  },
  {
    path: "/radiobox-code",
    name: "RadioboxCode",
    component: RadioboxCode,
    meta: { showFooter: false, showHeader: true, title: "source code" }
  },
  {
    path: "/dialog",
    name: "Dialog",
    component: Dialog,
    meta: { showFooter: false, showHeader: true, title: "dialog", code: true }
  },
  {
    path: "/dialog-code",
    name: "DialogCode",
    component: DialogCode,
    meta: { showFooter: false, showHeader: true, title: "source code" }
  },
  {
    path: "/button",
    name: "Button",
    component: Button,
    meta: { showFooter: false, showHeader: true, title: "button", code: true }
  },
  {
    path: "/button-code",
    name: "ButtonCode",
    component: ButtonCode,
    meta: { showFooter: false, showHeader: true, title: "source code" }
  },
  {
    path: "/sticky",
    name: "Sticky",
    component: Sticky,
    meta: { showFooter: false, showHeader: true, title: "sticky", code: true }
  },
  {
    path: "/calendar",
    name: "Calendar",
    component: Calendar,
    meta: { showFooter: false, showHeader: true, title: "calendar", code: true }
  },
  {
    path: "/layout",
    name: "Layout",
    component: Layout,
    meta: { showFooter: false, showHeader: true, title: "layout", code: true }
  },
  {
    path: "/citypicker",
    name: "Citypicker",
    component: Citypicker,
    meta: { showFooter: false, showHeader: true, title: "citypicker", code: true }
  },
  {
    path: "/indicator",
    name: "Indicator",
    component: Indicator,
    meta: { showFooter: false, showHeader: true, title: "indicator", code: true }
  },
  {
    path: "/slider",
    name: "Slider",
    component: Slider,
    meta: { showFooter: false, showHeader: true, title: "slider", code: true }
  },
  {
    path: "/action-sheet",
    name: "ActionSheet",
    component: ActionSheet,
    meta: { showFooter: false, showHeader: true, title: "action-sheet", code: true }
  },
  {
    path: "/picky-stepper",
    name: "PickyStepper",
    component: PickyStepper,
    meta: { showFooter: false, showHeader: true, title: "picky-stepper", code: true }
  },
  {
    path: "/counter",
    name: "Counter",
    component: Counter,
    meta: { showFooter: false, showHeader: true, title: "counter", code: true }
  },
  {
    path: "/pull-refresh",
    name: "PullRefresh",
    component: PullRefresh,
    meta: { showFooter: false, showHeader: true, title: "pull-refresh", code: true }
  },
  {
    path: "/skeleton",
    name: "Skeleton",
    component: Skeleton,
    meta: { showFooter: false, showHeader: true, title: "skeleton", code: true }
  },
  {
    path: "/picker",
    name: "Picker",
    component: Picker,
    meta: { showFooter: false, showHeader: true, title: "picker", code: true }
  },
  {
    path: "/date-picker",
    name: "DatePicker",
    component: DatePicker,
    meta: { showFooter: false, showHeader: true, title: "date-picker", code: true }
  },
  {
    path: "/tabs",
    name: "Tabs",
    component: Tabs,
    meta: { showFooter: false, showHeader: true, title: "tabs", code: true }
  },
  {
    path: "/animation-list",
    name: "AnimationList",
    component: AnimationList,
    meta: { showFooter: false, showHeader: true, title: "animation-list", code: true }
  },
  {
    path: "/swipe",
    name: "Swipe",
    component: Swipe,
    meta: { showFooter: false, showHeader: true, title: "swipe", code: true }
  },
  {
    path: "/submit-bar",
    name: "SubmitBar",
    component: SubmitBar,
    meta: { showFooter: false, showHeader: true, title: "submit-bar", code: true }
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