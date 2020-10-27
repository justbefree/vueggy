<template>
  <div class="slider-view">
    <div id="container">
      <div class="box">
        <h3>基础用法</h3>
        <span class="display">当前值是 {{ value }}</span>
        <vg-slider v-model="value"></vg-slider>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
// import VueGgy from "../../src/component/VueGgy";
export default class Slider extends Vue {
  public value = 0;
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
.box {
  width: 90%;
  margin: 30px auto;
}
.box .display {
  display: block;
  margin-bottom: 20px;
}
.update {
  display: inline-block;
  margin: 20px 10px;
}
.dropdown-slider{
  margin-top: 40px;
}
</style>
