<template>
  <div class="icon-view">
    <div id="container">
      <ul>
        <li v-for="(api, attr, index) in tools" :key="attr">
        <span class="title">{{attr}}</span>
        <pre><code class="lang-js">{{ exampleCode[index] }}</code></pre>
        </li>
      </ul>

    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
const examples = [
  `const a = { name: "zhangsan", age: 20, getName() { return this.name; } };
console.log(a);
const b = Vueggy.Tools.deepClone(a);
a.name = "张三";
a.getName = function() {
  return this.name + ",名字被修改了";
}
console.log(a, b);
console.log(a.getName(), b.getName());`
];
import Vueggy from "@";
console.log("api vueggy", Vueggy.Tools);
export default class JSapi extends Vue {
  public tools = Vueggy.Tools;
  public exampleCode = examples;
  mounted() {
    const a = { name: "zhangsan", age: 20, getName() { return this.name; } };
    console.log(a);
    const b = Vueggy.Tools.deepClone(a);
    a.name = "张三";
    a.getName = function() {
      return this.name + ",名字被修改了";
    }
    console.log(a, b);
    console.log(a.getName(), b.getName());
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style: none;
  padding: 0;
}
ul li{
  margin: 20px;
}
ul li .title {
  display: block;
}
</style>
