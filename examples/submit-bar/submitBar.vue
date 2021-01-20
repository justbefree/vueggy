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
            <span class="rewrite">(4人)</span>
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
      <div class="box">
        <h4>固定在底部</h4>
        <vg-submit-bar
          fixed
          submitText="确认退票"
          @submit="handleSubmit2"
          label="应退金额参考:"
        >
          <vg-submit-bar-popup-content>
            <ul>
              <li>这里是自定义内容</li>
              <li>这里是自定义内容</li>
            </ul>
          </vg-submit-bar-popup-content>
        </vg-submit-bar>
      </div>
      <div class="box">
        <h4>自定义纯文字内容</h4>
        <vg-submit-bar
          submitText="确认退票"
          @submit="handleSubmit3"
        >
          <vg-submit-bar-text>
            <p class="text">暂时无法获取改签预估费用，您可以<a href="javascript:;">致电客服</a> 咨询改签费。</p>
          </vg-submit-bar-text>
        </vg-submit-bar>
      </div>
      <div class="box">
        <h4>自定义样式</h4>
        <vg-submit-bar
          submitText="确认退票"
          @submit="handleSubmit2"
          value="10"
          label="预估："
          valueDescription="具体费用以航司核实为准"
        >
          <vg-submit-bar-popup-content>
            <ul>
              <li>这里是自定义内容</li>
              <li>这里是自定义内容</li>
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
  padding: 0;
  margin: 0;
}
.rewrite {
  font-size: 12px;
}
.full-content{
  width: 100%;
  height: 200px;
}
.box {
  margin: 150px auto;
}
</style>
