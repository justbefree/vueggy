<template>
  <div class="dropdown-view">
    <h2>vg-dropdown</h2>
    <vg-dropdown ref="dropdown" :borderRadius="0">
      <template #target>
        <vg-button @click="toggle">以下</vg-button>
      </template>
      <template #content>
        <div>里面是内容</div>
      </template>
    </vg-dropdown>
    <vg-dropdown ref="dropup" direction="up">
      <template #target>
        <vg-button @click="toggle2">以上</vg-button>
      </template>
      <template #content>
        <div>里面是内容</div>
      </template>
    </vg-dropdown>
    <vg-dropdown ref="left" direction="left">
      <template #target>
        <vg-button class="left" @click="toggle3">左边</vg-button>
      </template>
      <template #content>
        <div>里面是内容</div>
      </template>
    </vg-dropdown>
    <vg-dropdown ref="right" direction="right">
      <template #target>
        <vg-button @click="toggle4">右边</vg-button>
      </template>
      <template #content>
        <div>里面是内容</div>
      </template>
    </vg-dropdown>
  </div>
</template>
<script lang="ts">
  import { Vue } from "vue-class-component";
  export default class Dropdown extends Vue {
    toggle() {
      this.$refs.dropdown.toggle();
    }
    toggle2() {
      this.$refs.dropup.toggle();
    }
    toggle3() {
      this.$refs.left.toggle();
    }
    toggle4() {
      this.$refs.right.toggle();
    }
  }
</script>
<style type="text/css" scoped="scoped">
  .left {
    margin: 0 auto;
    display: block;
  }
</style>
