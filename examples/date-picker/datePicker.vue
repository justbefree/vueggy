<template>
  <div class="date-picker-view">
    <div id="container">
      <ul>
        <li @click="handleClick(1)">默认</li>
        <li @click="handleClick(2)">指定起止日期</li>
      </ul>
      <vg-date-picker v-model="show1" @confirm="handleConfirm"></vg-date-picker>
      <vg-date-picker
        v-model="show2"
        start="1995-03-08"
        end="2022-03-22"
        @confirm="handleConfirm"
      ></vg-date-picker>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
// import VueGgy from "../../src/component/VueGgy";
export default class DatePicker extends Vue {
  public show1 = false;
  public show2 = false;
  handleConfirm(e: any) {
    console.log(e);
  }
  handleClick(i: number) {
    this[`show${i}`] = !this[`show${i}`];
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
