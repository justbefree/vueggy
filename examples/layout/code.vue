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
   <vg-layout
     monitor
     @scroll="handleScroll"
     :showHeader="showHeader"
     @reachbottom="handleReachBottom"
     bottomDistance="500"
     @reachtop="handleReachTop"
     topDistance="100"
   >
     <template #header>
       <div class="header0">header</div>
     </template>
     <template #body>
       <div>
         body区域，可以滑动
         <div>
           <h2>vg-layout</h2>
         </div>
         <template v-for="item in dataList" :key="item">
           <div>{{ item }}</div>
         </template>
         <vg-spin type="triple-bounce"></vg-spin>
       </div>
     </template>
     <template #footer>
       <div>footer</div>
     </template>
   </vg-layout>
 </template>
  `;
  const jsCode =
  `
  const dataList = [];
  for (let i = 0; i < 100; i++) {
    dataList.push(i);
  }
  export default class Layout extends Vue {
    public showHeader = false;
    public dataList = dataList;
    loadMore() {
      const length = this.dataList.length;
      setTimeout(() => {
        for (let i = length; i < 100 + length; i++) {
          this.dataList.push(i);
        }
      }, 1000);
    }
    handleReachBottom() {
      console.log("滚动到底部触发事件了");
      this.Toast("滚动到底部触发事件了");
      this.loadMore();
    }
    handleReachTop() {
      console.log("滚动到顶部了");
      this.Toast("滚动到顶部了");
    }
    handleScroll(e) {
      if (e.diff > 0) {
        this.showHeader = false;
      } else {
        this.showHeader = true;
      }
      console.log(e, e.diff);
    }
  }
  `;
  @Options({
    name: "LayoutCode"
  })
  export default class LayoutCode extends Vue {
    public exampleCode = exampleCode;
    public jsCode = jsCode;
    mounted() {
      document.querySelectorAll("pre code").forEach(block => window.Prism.highlightElement(block));
    }
  }
</script>