<template>
  <div class="router-view-wapper">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
})
export default class App extends Vue {}
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
</style>
