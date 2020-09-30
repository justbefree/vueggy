<template>
  <div class="spin-view">
    <h1>spin</h1>
    <div id="container">
      <ul>
        <li><vg-spin></vg-spin></li>
        <li><vg-spin type="rotate" size="40"></vg-spin></li>
        <li><vg-spin type="triple-bounce" size="40"></vg-spin></li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
// import VueGgy from "../../src/component/VueGgy";
export default class Spin extends Vue {
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
ul li {
  margin: 20px auto;
}
</style>
