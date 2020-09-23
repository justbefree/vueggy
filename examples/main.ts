/*
* @Author: Just be free
* @Date:   2020-09-21 17:37:50
* @Last Modified by:   Just be free
* @Last Modified time: 2020-09-22 17:09:44
* @E-mail: justbefree@126.com
*/

import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";
import YnComponent from "@";
// console.log(YnComponent);
const app = createApp(App);
app.use(router);
app.use(YnComponent);
app.mount("#example");
