/*
* @Author: Just be free
* @Date:   2020-09-21 17:37:50
* @Last Modified by:   Just be free
* @Last Modified time: 2020-09-23 16:12:54
* @E-mail: justbefree@126.com
*/

import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";
import vueggy from "@";
// console.log(vueggy);
const app = createApp(App);
app.use(router);
app.use(vueggy);
app.mount("#example");
