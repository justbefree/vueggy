<template>
  <div class="skeleton-view">
    <div id="container">
      <vg-skeleton rows="10" :avatar="false"></vg-skeleton>
      <vg-skeleton rows="10"></vg-skeleton>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
export default class Skeleton extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
