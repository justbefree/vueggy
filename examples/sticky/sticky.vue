<template>
  <div class="sticky-view">
    <h1>sticky</h1>
    <div id="container">
      <template v-for="item in 200" :key="item">
        <div v-if="item === 20">
          <vg-sticky offsetTop="100">
            <span>我固定在某个位置{{ item }}</span>
          </vg-sticky>
        </div>
        <div v-else-if="item === 100">
          <vg-sticky offsetTop="0">
            <span>我固定在某个位置{{ item }}</span>
          </vg-sticky>
        </div>
        <div v-else-if="item === 120">
          <div class="box111" ref="container">
            <vg-sticky class="has-container" :container="container">
              <span>我固定在某个位置{{ item }}</span>
            </vg-sticky>
          </div>
        </div>
        <div v-else>{{ item }}</div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
// import VueGgy from "../../src/component/VueGgy";
export default class Sticky extends Vue {
  public container = null;
  mounted() {
    this.container = this.$refs.container;
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
div.box111 {
  text-align: right;
  height: 200px;
  width: 100%;
  background: #ccc;
}
.has-container {
  width: 100%;
  text-align: right;
}
</style>
