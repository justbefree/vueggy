<template>
  <div class="flex-view">
    <h1>flex</h1>
    <div id="container">
      <vg-flex justifyContent="center" alignItems="center" class="face">
        <transition>
          <!-- 加一层<transition>也是可以的，其他元素就不行了哦，暂时不支持<transition-group> -->
          <vg-flex-item class="dot"></vg-flex-item>
        </transition>
      </vg-flex>
      <hr />
      <vg-flex justifyContent="spaceBetween" class="face">
        <vg-flex-item class="dot"></vg-flex-item>
        <vg-flex-item class="dot" align-self="flex-end"></vg-flex-item>
      </vg-flex>
      <hr />
      <vg-flex justifyContent="spaceBetween" class="face">
        <vg-flex-item class="dot"></vg-flex-item>
        <vg-flex-item class="dot" align-self="center"></vg-flex-item>
        <vg-flex-item class="dot" align-self="flex-end"></vg-flex-item>
      </vg-flex>
      <hr />
      <vg-flex justifyContent="spaceBetween" flexDirection="column" class="face">
        <vg-flex-item>
          <vg-flex justifyContent="spaceBetween">
            <vg-flex-item class="dot"></vg-flex-item>
            <vg-flex-item class="dot"></vg-flex-item>
          </vg-flex>
        </vg-flex-item>
        <vg-flex-item>
          <vg-flex justifyContent="spaceBetween">
            <vg-flex-item class="dot"></vg-flex-item>
            <vg-flex-item class="dot"></vg-flex-item>
          </vg-flex>
        </vg-flex-item>
      </vg-flex>
      <hr />
      <vg-flex justifyContent="spaceBetween" flexDirection="column" class="face">
        <vg-flex-item>
          <vg-flex justifyContent="spaceBetween">
            <vg-flex-item class="dot"></vg-flex-item>
            <vg-flex-item class="dot"></vg-flex-item>
          </vg-flex>
        </vg-flex-item>
        <vg-flex-item>
          <vg-flex justify-content="center">
            <vg-flex-item class="dot"></vg-flex-item>
          </vg-flex>
        </vg-flex-item>
        <vg-flex-item>
          <vg-flex justifyContent="spaceBetween">
            <vg-flex-item class="dot"></vg-flex-item>
            <vg-flex-item class="dot"></vg-flex-item>
          </vg-flex>
        </vg-flex-item>
      </vg-flex>
      <hr />
      <vg-flex justifyContent="spaceBetween" flexDirection="column" class="face">
        <vg-flex-item>
          <vg-flex justifyContent="spaceBetween">
            <vg-flex-item class="dot"></vg-flex-item>
            <vg-flex-item class="dot"></vg-flex-item>
          </vg-flex>
        </vg-flex-item>
        <vg-flex-item>
          <vg-flex justify-content="spaceBetween">
            <vg-flex-item class="dot"></vg-flex-item>
            <vg-flex-item class="dot"></vg-flex-item>
          </vg-flex>
        </vg-flex-item>
        <vg-flex-item>
          <vg-flex justifyContent="spaceBetween">
            <vg-flex-item class="dot"></vg-flex-item>
            <vg-flex-item class="dot"></vg-flex-item>
          </vg-flex>
        </vg-flex-item>
      </vg-flex>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
export default class Flex extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
.face {
  margin: 16px;
  padding: 4px;
  background-color: #e7e7e7;
  width: 104px;
  height: 104px;
  -o-object-fit: contain;
  object-fit: contain;
  box-shadow: inset 0 5px white, inset 0 -5px #bbb, inset 5px 0 #d7d7d7,
    inset -5px 0 #d7d7d7;
  border-radius: 10%;
}
.dot {
  display: block;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin: 4px;
  background-color: #333;
  box-shadow: inset 0 3px #111, inset 0 -3px #555;
}
</style>
