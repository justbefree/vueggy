/*
* @Author: Just be free
* @Date:   2020-09-22 14:17:59
* @Last Modified by:   Just be free
* @Last Modified time: 2020-09-22 16:00:29
* @E-mail: justbefree@126.com
*/
import { createRouter, createWebHistory } from "vue-router";
import Content from "./content/content.vue";
import Flex from "./flex/flex.vue";
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
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;