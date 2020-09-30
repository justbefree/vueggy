<template>
  <div class="icon-view">
    <h1>icon</h1>
    <div id="container">
      <ul>
        <li>我是组件库自带的<vg-icon name="close" @click="handleClick"></vg-icon></li>
        <li>我是扩展来的<vg-icon name="location" @click="handleClick"></vg-icon></li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
// import VueGgy from "../../src/component/VueGgy";
export default class Toast extends Vue {
  handleClick() {
    this.Toast("点击了");
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
}
ul li{
  margin: 20px auto;
}
</style>
