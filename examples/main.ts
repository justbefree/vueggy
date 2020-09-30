/*
* @Author: Just be free
* @Date:   2020-09-21 17:37:50
* @Last Modified by:   Just be free
* @Last Modified time: 2020-09-30 17:48:08
* @E-mail: justbefree@126.com
*/

// import { createApp } from "vue";
import * as Vue from "vue";
import App from "./App.vue";
import router from "./routes";
import Vueggy from "@";
import svgs from "./svgs";
console.log("extend svgs", svgs);
console.log("Vueggy ", Vueggy);
Vueggy.config({ VgIcon: svgs });
const app = Vue.createApp(App);
app.use(router);
app.use(Vueggy);
app.mount("#example");
