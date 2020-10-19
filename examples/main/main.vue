<template>
  <div class="content-view">
    <div class="logo">
      <img :src="logo" width="180">
      <p class="slogn">Vueggy</p>
      <p class="description">Lightweight Mobile UI Components built on <b><a href="https://v3.vuejs.org/" target="_blank">Vue3</a></b></p>
    </div>
    <div class="button-warrper">
      <a href="javascript:;" class="get-started" @click="getStarted">GET STARTED</a>
      <a href="https://github.com/justbefree/vueggy" target="_blank" class="github">
        <img :src="github" width="24">&nbsp;&nbsp;Github
      </a>
    </div>
  </div>
</template>

<script lang="ts">
const logo = require("../assets/logo/logo.png");
const github = require("../assets/github.svg");
import { Vue } from 'vue-class-component';
export default class Main extends Vue {
  public logo = logo;
  public github = github;
  getStarted(): void {
    this.$router.push({ name: "Content" });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo {
  /* height: 100px; */
  margin: 20px auto;
}
.logo img {
  /* margin: 80px auto; */
}
p.slogn{
  /* color: #4f5959; */
  color: #4fc08d;
  font-weight: 600;
  font-size: 30px;
  margin: 0;
}
p.description{
  margin: 0 auto;
  width: 150px;
  font-size: 16px;
  line-height: 30px;
  color: #4f5959;
}
p.description a {
  display: block;
  font-size: 30px;
}
.button-warrper {
  margin-top: 120px;
}
.button-warrper a{
  display: inline-block;
  text-decoration: none;
  min-width: 120px;
  height: 40px;
  line-height: 40px;
  border-radius: 2em;
  font-size: 14px;
  margin: 10px;
  font-weight: 600;
}
a.github{
  background-color: #f6f6f6;
  color: #4f5959;
  border-color: #f6f6f6;
}
a.github img {
  vertical-align: middle;
  /* margin: -2px 5px; */
}
a.get-started{
  color: #4fc08d;
  transition: all 0.15s ease;
  box-sizing: border-box;
  border: 1px solid #4fc08d;
}
.content-view {
  text-align: center;
}
a {
  color: #42b983;
}
</style>
