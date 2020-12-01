<template>
  <div class="picker-view">
    <div id="container">
      <ul>
        <li @click="handleClick(1)">single picker</li>
        <li @click="handleClick(2)">multiple picker</li>
        <li @click="handleClick(3)">multiple picker2</li>
        <li @click="handleClick(4)">只有一个数据</li>
      </ul>
      <vg-picker
        v-model="show1"
        :columns="columns1"
        @change="handleChange"
      ></vg-picker>
      <vg-picker
        v-model="show2"
        :columns="columns2"
        @change="handleChange"
      ></vg-picker>
      <vg-picker
        @confirm="handleConfirm"
        v-model="show3"
        :columns="columns3"
        @change="handleChange"
      ></vg-picker>
      <vg-picker
        v-model="show4"
        :columns="columns4"
        @change="handleChange"
      ></vg-picker>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
// import VueGgy from "../../src/component/VueGgy";
export default class Picker extends Vue {
  public show1 = false;
  public show2 = false;
  public show3 = false;
  public show4 = false;
  public columns1 = [
    { value: "Delaware", disabled: true },
    { value: "Florida", disabled: false },
    { value: "Georqia", disabled: true },
    { value: "Indiana", disabled: true },
    { value: "Maine", disabled: false },
    { value: "Amenda", disabled: true }
  ];
  public columns2 = [
    { value: ["Delaware", "Florida", "Georqia", "Indiana", "Maine"] },
    { value: ["Delaware", "Florida", "Georqia", "Indiana", "Maine"] }
  ];
  public columns3 = [
    { value: ["Delaware", "Florida", "Georqia", "Indiana", "Maine"] },
    { value: ["Delaware", "Florida", "Georqia", "Indiana", "Maine"] },
    { value: ["Delaware", "Florida", "Georqia", "Indiana", "Maine"] }
  ];
  public columns4 = ["Delaware"];

  handleChange({ value, index }): void {
    console.log(`选择第${index}个，值为${value}`);
    this.Toast(`选择第${index}个，值为${value}`);
  }
  handleClick(i: number): void {
    this[`show${i}`] = !this[`show${i}`];
  }
  handleConfirm(e: any): void {
    this.Toast(JSON.stringify(e));
    console.log("confirm", e);
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
