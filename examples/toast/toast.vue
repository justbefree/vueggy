<template>
  <div class="toast-view">
    <h1>toast</h1>
    <div id="container">
      <!-- <transition name="ddd">
        <div>dddd</div>
      </transition> -->
      <ul>
        <li @click="t('middle')">middle</li>
        <li @click="t('bottom')">bottom</li>
        <li @click="t('top')">top</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
// import VueGgy from "../../src/component/VueGgy";
export default class Toast extends Vue {
  t(position: string): void  {
    console.log(this);
    this.Toast({ position, message: position });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
