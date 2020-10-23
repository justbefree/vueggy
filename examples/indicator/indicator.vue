<template>
  <div class="indicator-view">
    <div id="container">
      <ul>
        <li @click="indicator('snake')">snake</li>
        <li @click="indicator('tripleBounce')">tripleBounce</li>
        <li @click="indicator('rotate', false)">rotate lockScreen</li>
        <li @click="indicator('rotate', true)">rotate lockScreen transparent</li>
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
