<template>
  <div class="calendar-view">
    <div id="container">
      <ul>
        <li @click="handleClick(1)">单选、默认</li>
        <li @click="handleClick(3)">单选、设置明天</li>
        <li @click="handleClick(2)">多选、默认</li>
        <li @click="handleClick(4)">多选、设置前4天后3天</li>
        <li @click="handleClick(5)">多选、底部确认按钮</li>
        <li @click="handleClick(6)">多选、允许选择同一天</li>
      </ul>
      <vg-calendar
        before="10"
        after="10"
        v-model="calendar1"
        v-on:getdate="getDate"
      ></vg-calendar>
      <vg-calendar
        before="10"
        after="10"
        mode="double"
        v-on:getdate="getDate"
        v-model="calendar2"
      ></vg-calendar>
      <vg-calendar
        mode="single"
        :before="10"
        :after="10"
        v-model="calendar3"
        :defaultDate="defaultDate"
        v-on:getdate="getDate"
      ></vg-calendar>
      <vg-calendar
        mode="double"
        :before="10"
        :after="10"
        v-model="calendar4"
        :defaultStartDate="defaultStartDate"
        :defaultEndDate="defaultEndDate"
        v-on:getdate="getDate"
      ></vg-calendar>
      <vg-calendar
        mode="double"
        :before="10"
        :after="10"
        v-model="calendar5"
        v-on:getdate="getDate"
        :showConfirmButton="true"
      ></vg-calendar>
      <vg-calendar
        mode="double"
        :before="10"
        :after="10"
        v-model="calendar6"
        v-on:getdate="getDate"
        :doubleModeAllowSameDate="true"
      ></vg-calendar>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { VgDateInstance } from "../../src/utils/vg-date";
export default class Calendar extends Vue {
  public calendar1 = false;
  public calendar2 = false;
  public calendar3 = false;
  public calendar4 = false;
  public calendar5 = false;
  public calendar6 = false;
  public defaultDate = VgDateInstance().add(1, "d").format();
  public defaultStartDate = VgDateInstance().substract(4, "d").format();
  public defaultEndDate = VgDateInstance().add(3, "d").format();
  handleClick(num: number) {
    this[`calendar${num}`] = true;
  }
  getDate(date: any) {
    console.log(date);
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
