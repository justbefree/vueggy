<template>
  <div class="button-view">
    <h1>button</h1>
    <div id="container">
      <ul>
        <li><vg-button>default text</vg-button></li>
        <li><vg-button type="primary">primary text</vg-button></li>
        <li><vg-button disabled>disabled text</vg-button></li>
        <li><vg-button type="dashed">dashed</vg-button></li>
        <li><vg-button danger>danger default</vg-button></li>
        <li><vg-button danger type="primary">danger primary</vg-button></li>
        <li><vg-button danger type="dashed">danger dashed</vg-button></li>
        <li><vg-button loading type="primary">Loading</vg-button></li>
        <li><vg-button @click="handleClick" :loading="loadingStatus" type="primary">Loading</vg-button></li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
export default class Button extends Vue {
  public loadingStatus = false;
  handleClick() {
    if (this.loadingStatus) {
      return;
    }
    this.loadingStatus = true;
    const timer = setTimeout(() => {
      this.loadingStatus = false;
      clearTimeout(timer);
    }, 5000);
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
  margin: 10px auto;
}
</style>
