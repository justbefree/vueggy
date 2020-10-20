<template>
  <div class="calendar-view">
    <h1>calendar</h1>
    <div id="container">
      <ul>
        <li @click="handleClick(1)">单选</li>
        <li @click="handleClick(2)">多选</li>
      </ul>
      <vg-calendar before="10" after="10" v-model="calendar1"></vg-calendar>
      <vg-calendar before="10" after="10" mode="double" v-model="calendar2"></vg-calendar>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
export default class Calendar extends Vue {
  public calendar1 = false;
  public calendar2 = false;
  handleClick(num: number) {
    this[`calendar${num}`] = true;
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
  cursor: pointer;
}
</style>
