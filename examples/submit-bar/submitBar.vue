<template>
  <div class="submit-bar-view">
    <div id="container">
      <div class="box">
        <span v-if="disabled">提交中禁止多次点击</span>
        <span v-else>可以提交</span>
        <vg-submit-bar
          :showIcon="false"
          label="已选:"
          submitText="确定"
          :disabled="disabled"
          @submit="handleSubmit"
        >
          <vg-submit-bar-value>
            <span class="rewrite">(2人)</span>
          </vg-submit-bar-value>
          <vg-submit-bar-popup-content>
            <ul>
              <li>liyan</li>
              <li>wangshengzi</li>
              <li>xionglonghui</li>
              <li>keyanqin</li>
            </ul>
          </vg-submit-bar-popup-content>
        </vg-submit-bar>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
// import VueGgy from "../../src/component/VueGgy";
export default class SubmitBar extends Vue {
  public disabled = false;
  public popup = false;
  handleSubmit() {
    this.disabled = true;
    setTimeout(() => {
      this.Toast("提交成功");
      this.disabled = false;
    }, 2000);
  }
  handlePopup() {
    this.popup = !this.popup;
  }
  handleSubmit2() {
    this.Toast("提交成功");
  }
  handleSubmit3() {
    this.handlePopup();
    this.Toast("提交成功");
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
ul li {
  margin: 20px auto;
}
.box {
  margin: 150px auto;
}
</style>
