<template>
  <div class="action-sheet-view">
    <div id="container">
      <ul>
        <li @click="handleBasicUsage">基础用法</li>
        <li @click="handleCancelUsage">带取消 & 禁止某些选线</li>
        <li @click="handleAsyncUsage">异步加载</li>
      </ul>
      <vg-action-sheet
        v-model="basic"
        :actions="basicActions"
        v-on:getselected="getSelect"
      ></vg-action-sheet>
      <vg-action-sheet
        v-model="cancel"
        :actions="cancelActions"
        v-on:getselected="getSelect"
        showCancel
      ></vg-action-sheet>
      <vg-action-sheet
        v-model="async"
        :loading="loading"
        @beforeenter="handleBeforeEnter"
        :actions="asyncActions"
        v-on:getselected="getSelect"
        showCancel
      ></vg-action-sheet>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
export default class ActionSheet extends Vue {
  public basic = false;
  public basicActions = [
    { name: "option1", className: "", disable: false, key: "1" },
    { name: "option2", className: "", disable: false, key: "2" },
    { name: "option3", className: "", disable: true, key: "5" },
    { name: "option4", className: "", disable: false, key: "11" },
    { name: "option5", className: "", disable: true, key: "12" }
  ];
  public cancel = false;
  public cancelActions = [
    { name: "option1", className: "", disable: true, key: "1" },
    { name: "option2", className: "", disable: false, key: "2" },
    { name: "option3", className: "", disable: false, key: "5" },
    { name: "option4", className: "", disable: true, key: "11" },
    { name: "option5", className: "", disable: false, key: "12" }
  ];
  public async = false;
  public loading = false;
  public asyncActions = [];
  handleBasicUsage() {
    this.basic = !this.basic;
  }
  handleCancelUsage() {
    this.cancel = !this.cancel;
  }
  handleAsyncUsage() {
    this.async = !this.async;
  }
  getSelect(e: any) {
    console.log(e.name);
    this.Toast(e.name);
  }
  handleBeforeEnter() {
    if (this.asyncActions.length > 0) {
      return;
    }
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.asyncActions = [
        { name: "option1", className: "", disable: true, key: "1" },
        { name: "option2", className: "", disable: false, key: "2" },
        { name: "option3", className: "", disable: false, key: "5" },
        { name: "option4", className: "", disable: true, key: "11" },
        { name: "option5", className: "", disable: false, key: "12" }
      ];
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
