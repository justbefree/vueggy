<template>
  <div class="pull-refresh-view">
    <div id="container">
      <vg-pull-refresh @pullrefresh="handlePullRefresh" :loading="isLoading">
        <ul>
          <li v-for="i in list" :key="i">{{ i }}</li>
        </ul>
      </vg-pull-refresh>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
export default class PullRefresh extends Vue {
  public isLoading = false;
  public list = [];
  public index = 0;
  load(time = 3000, callback) {
    const timer = setTimeout(() => {
      for (let i = this.index * 10; i < (this.index + 1) * 10; i++) {
        this.list.unshift(i);
      }
      callback && typeof callback === "function" && callback();
      clearTimeout(timer);
      this.index++;
    }, time);
  }
  handlePullRefresh() {
    this.isLoading = true;
    this.load(3000, () => {
      this.isLoading = false;
    });
  }
  mounted() {
    this.load(0);
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
  margin: 10px auto;
}
</style>
