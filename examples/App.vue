<template>
  <div class="router-view-wapper">
    <vg-layout :showHeader="isShowHeader()" :showFooter="isShowFooter()">
      <template #header>
        <div class="header">
          <span @click="back" class="backicon-button"><img width="20" :src="backIcon"></span>
          <span>{{ getTitle() }}</span>
        </div>
      </template>
      <template #body>
        <router-view></router-view>
      </template>
      <template #footer>
        <div class="footer"></div>
      </template>
    </vg-layout>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
const backIcon = require("./assets/back.svg");

@Options({
})
export default class App extends Vue {
  public backIcon = backIcon;
  getTitle(): string {
    return this.$route.meta.title;
  }
  isShowHeader(): boolean {
    return this.$route.meta.showHeader;
  }
  isShowFooter(): boolean {
    return this.$route.meta.showFooter;
  }
  back(): void {
    this.$router.back();
  }
}
</script>

<style>
html {
  height: 100%;
  width: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body, #example {
  padding: 0;
  margin: 0;
  height: 100%;
}

.router-view-wapper{
  height: 100%;
  overflow: auto;
}
.header{
  height: 44px;
  /* background: #4fc08d; */
  background: #1b1b1b;
  color: #fff;
  line-height: 44px;
  text-align: center;
  font-size: 20px;
  position: relative;
}
.header .backicon-button {
  position: absolute;
  left: 6px;
  top: 0px;
  height: 44px;
}
.header .backicon-button img{
  vertical-align: middle;
}
</style>
