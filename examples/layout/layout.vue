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
      <div class="header">header</div>
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

<script lang="ts">
import { Vue } from "vue-class-component";
// import VueGgy from "../../src/component/VueGgy";
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
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style: none;
}
ul li{
  margin: 20px auto;
}
</style>
