<template>
  <div class="code">
    <h3>html</h3>
    <pre><code class="lang-html">{{ exampleCode }}</code></pre>
    <h3>js</h3>
    <pre><code class="lang-js">{{ jsCode }}</code></pre>
  </div>
</template>
<script lang="ts">
  import { Options, Vue } from 'vue-class-component';
  const exampleCode =
  `
 <template>
   <div class="dialog-view">
     <div id="container">
       <ul>
         <li @click="alert">sync alert</li>
         <li @click="asyncAlert">async alert</li>
         <li @click="asyncConfirm">sync confirm</li>
         <li @click="handleClick(2)">Advanced</li>
       </ul>
       <vg-dialog v-model="dialog2" closeModelOnClick>里面是各种内容</vg-dialog>
     </div>
   </div>
 </template>
  `;
  const jsCode =
  `
 export default class Dialog extends Vue {
   public dialog1 = false;
   public dialog2 = false;
   handleClick(num: number): void {
     this[\`dialog\${num}\`] = !this[\`dialog\${num}\`];
   }
   handleBeforeClose(e) {
     console.log("这个是会告诉你点击了哪个按钮", e);
     if (e === "cancel") {
       return;
     }
     return new Promise((resolve, reject) => {
       console.log(reject);
       setTimeout(() => {
         resolve("请求结束");
       }, 2000);
     }).catch(err => {
       console.log("错误信息在这里展示", err);
     });
   }
   alert() {
     this.Dialog.alert({ title: "sync alert", message: "点击确定按钮会立即关闭", closeModelOnClick: true });
   }
   asyncAlert() {
     this.Dialog.alert({ title: "async alert", message: "点击确定按钮会等结果执行结束才会关闭，防止误触", closeModelOnClick: true, beforeClose: this.handleBeforeClose });
   }
   asyncConfirm() {
     this.Dialog.confirm({ title: "confirm", message: "自定义内容", beforeClose: this.handleBeforeClose, textHideWhenLoading: true });
   }
 }
  `;
  @Options({
    name: "DialogCode"
  })
  export default class DialogCode extends Vue {
    public exampleCode = exampleCode;
    public jsCode = jsCode;
    mounted() {
      document.querySelectorAll("pre code").forEach(block => window.Prism.highlightElement(block));
    }
  }
</script>