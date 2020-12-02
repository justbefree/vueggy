<template>
  <div class="code">
    <h3>html</h3>
    <pre><code class="lang-html">{{ htmlCode }}</code></pre>
    <h3>js</h3>
    <pre><code class="lang-js">{{ jsCode }}</code></pre>
  </div>
</template>
<script lang="ts">
  import { Options, Vue } from 'vue-class-component';
  const htmlCode =
  `
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
  `;
  const jsCode =
  `
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
  `;
  @Options({
    name: "ActionSheetCode"
  })
  export default class ActionSheetCode extends Vue {
    public htmlCode = htmlCode;
    public jsCode = jsCode;
    mounted() {
      document.querySelectorAll("pre code").forEach(block => window.Prism.highlightElement(block));
    }
  }
</script>