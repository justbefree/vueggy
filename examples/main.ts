/*
* @Author: Just be free
* @Date:   2020-09-21 17:37:50
* @Last Modified by:   Just be free
* @Last Modified time: 2020-09-30 10:12:24
* @E-mail: justbefree@126.com
*/

// import { createApp } from "vue";
import * as Vue from "vue";
console.log("This is Vue3 ", Vue);
import App from "./App.vue";
import router from "./routes";
import vueggy from "@";
// console.log(vueggy);
const app = Vue.createApp(App);
app.use(router);
app.use(vueggy);
app.mount("#example");
