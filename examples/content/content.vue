<template>
  <div class="content-view">
    <h1>Components</h1>
    <ul>
      <li @click="listClick('Flex')">flex</li>
      <li @click="listClick('Toast')">toast</li>
      <li @click="listClick('Spin')">spin</li>
      <li>flex</li>
      <li>flex</li>
      <li>flex</li>
      <li>flex</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
export default class Content extends Vue {
  listClick(name: string): void {
    this.$router.push({ name });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
  user-select: none;
}
li {
  margin: 0 10px;
  border-top: 1px solid #e4e4e4;
  line-height: 44px;
  cursor: pointer;
}
li:last-child {
  border-bottom: 1px solid #e4e4e4;
}
.content-view {
  text-align: center;
}
a {
  color: #42b983;
}
</style>
