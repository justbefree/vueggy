<template>
  <div class="calendar-view">
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
