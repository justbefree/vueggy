<template>
  <div class="field-view">
    <div id="container">
      <vg-field v-model="basicUsage" placeholder="请输入内容"></vg-field>
      <vg-field v-model="customLable" display="column" placeholder="上面的label是我的">
        <template #label>
          <span class="custom-label">看到我的特别了吗？自定义label</span>
        </template>
      </vg-field>
      <vg-field
        v-model="phoneNumber"
        label="手机号码"
        type="number"
        min="3"
        max="10"
        placeholder="phone number"
        pattern="[0-9]*"
      ></vg-field>
      <vg-field
        v-model="userPassword"
        label="用户密码"
        type="password"
        placeholder="password"
      ></vg-field>
      <vg-field
        v-model="readonly"
        label="证件信息"
        type="text"
        readonly
      ></vg-field>
      <vg-field
        v-model="disabled"
        label="关键信息"
        type="text"
        disabled
      ></vg-field>
      <vg-field
        v-model="clear"
        label="清除icon"
        type="text"
        clearable
      ></vg-field>
      <vg-field
        v-model="textarea"
        label="textarea"
        type="textarea"
        maxlength="50"
        showTextareaCounter
        clearable
      ></vg-field>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
// import VueGgy from "../../src/component/VueGgy";
export default class Field extends Vue {
  public phoneNumber = "";
  public customLable = "";
  public basicUsage = "";
  public userPassword = "";
  public readonly = "只读";
  public disabled = "disabled";
  public clear = "";
  public textarea = "";
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.custom-label{
  display: inline-block;
  height: 40px;
  border-bottom: 1px solid #eee;
  width: 100%;
}
</style>
