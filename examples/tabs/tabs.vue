<template>
  <div class="tabs-view">
    <div id="container">
      <div class="box">
        <vg-tabs v-model="active" @change="change">
          <vg-tab-item :key="index" :title="'Tab' + index" v-for="index in 4">
            content of tab {{ index }}
          </vg-tab-item>
        </vg-tabs>
      </div>
      <div class="box">
        <vg-tabs v-model="active2" @click="handleClick">
          <vg-tab-item
            :key="index"
            :title="'Tab' + index"
            v-for="index in 8"
            :disabled="index === 4"
          >
            content of tab {{ index }}
          </vg-tab-item>
        </vg-tabs>
      </div>
      <div class="box">
        <vg-tabs v-model="active2">
          <vg-tab-item :key="index" :title="'Tab' + index" v-for="index in 2">
            content of tab {{ index }}
          </vg-tab-item>
        </vg-tabs>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
// import VueGgy from "../../src/component/VueGgy";
export default class Tabs extends Vue {
  public active = 1;
  public active1 = 1;
  public active2 = 1;
  change(e: any) {
    this.Toast(`${e.value} changed`);
  }
  handleClick(e: any) {
    if (e.disabled) {
      this.Toast(`${e.value} is disabled`);
    } else {
      this.Toast(`${e.value} clicked`);
    }
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
