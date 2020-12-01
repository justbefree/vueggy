<template>
  <div class="content-view">
    <div class="logo">
      <img :src="logo" width="180">
      <p class="slogn">Vueggy</p>
      <p class="description">Advanced and highly reusable Mobile UI Components built on <b><a href="https://v3.vuejs.org/" target="_blank">Vue3</a></b></p>
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
const logo = require("../assets/logo/v.svg");
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
  color: #007aff;
  font-weight: 600;
  font-size: 30px;
  margin: 0;
}
p.description{
  margin: 0 auto;
  width: 200px;
  font-size: 18px;
  line-height: 40px;
  color: #4f5959;
}
p.description a {
  display: block;
  font-size: 30px;
}
.button-warrper {
  margin-top: 100px;
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
  /* color: #4fc08d; */
  color: #007aff;
  transition: all 0.15s ease;
  box-sizing: border-box;
  border: 1px solid #007aff;
}
.content-view {
  text-align: center;
}
a {
  color: #007aff;
}
</style>
