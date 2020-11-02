<template>
  <div class="counter-view">
    <div id="container">
      <ul>
        <li v-for="(count, i) in counts" :key="i">
          <vg-counter :name="count.name" :key="i" v-model="count.value" :min="count.min" :max="count.max" steps="1" @change="handleChange"></vg-counter>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
export default class Counter extends Vue {
  public counts = [{ value: 0, min: -5, max: 10, name: "haha" }, { value: 1, min: -2, max: 6, name: "hehe" }, { value: 2, min: 1, max: 4, name: "heihei" }, { value: 0, min: -100000, max: Number.MAX_VALUE, name: "damping" }];
  handleChange(e: any) {
    console.log(e);
    this.Toast(`${e.name} - ${e.type}`);
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
