<template>
  <div class="indicator-view">
    <div id="container">
      <ul>
        <li @click="indicator('snake')">snake</li>
        <li @click="indicator('tripleBounce')">tripleBounce</li>
        <li @click="indicator('rotate', false)">rotate lockScreen</li>
        <li @click="indicator('rotate', true)">rotate transparent</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
// import VueGgy from "../../src/component/VueGgy";
export default class Indicator extends Vue {
  indicator(spinType: string, transparent: boolean) {
    if (spinType === "rotate") {
      this.Indicator.open({ spinType, background: "transparent", lockScreen: true, transparent });
    } else {
      this.Indicator.open({ text: spinType, spinType });
    }
    setTimeout(() => {
      this.Indicator.close();
    }, 3000);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  user-select: none;
  margin: 0;
}
li {
  border-top: 1px solid #e4e4e4;
  line-height: 44px;
  cursor: pointer;
  color: #000;
  font-size: 16px;
  margin: 10px auto;
  background: #f7f8fa;
  border-radius: 30px;
  width: 92%;
  text-align: left;
  text-indent: 1em;
}
</style>
