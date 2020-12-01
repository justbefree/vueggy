<template>
  <div class="spin-view">
    <div id="container">
      <ul>
        <li @click="showPopup1()">底部</li>
        <li @click="showPopup2()">右侧</li>
        <li @click="showPopup3()">上面</li>
        <li @click="showPopup4()">双层嵌套</li>
        <li @click="showPopup6()">中间</li>
      </ul>
    </div>
    <vg-popup v-model="popup1" position="bottom">
      <div class="popup-content">
        底部出现遮罩
        <template :key="item" v-for="item in 10">
          <h3>我是{{ item }}</h3>
        </template>
      </div>
    </vg-popup>
    <vg-popup v-model="popup2" position="right" :showCloseIcon="true">
      <div class="popup-content">右侧出现遮罩</div>
    </vg-popup>
    <vg-popup v-model="popup3" position="top" :showCloseIcon="true">
      <div class="popup-content">上面出现遮罩</div>
    </vg-popup>
    <vg-popup v-model="popup4" position="bottom" :showCloseIcon="true">
      <div class="popup-content">
        <span @click="showPopup5()">打开内层</span>
        上面出现遮罩
        <vg-popup v-model="popup5" position="bottom">
          <div class="popup-content">
            内层嵌套
          </div>
        </vg-popup>
      </div>
    </vg-popup>
    <vg-popup v-model="popup6" position="middle" :showCloseIcon="true" fixed>
      <div class="popup-content">中间fade</div>
    </vg-popup>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
// import VueGgy from "../../src/component/VueGgy";
export default class Spin extends Vue {
  popup1 = false;
  popup2 = false;
  popup3 = false;
  popup4 = false;
  popup5 = false;
  popup6 = false;
  showPopup1() {
    this.popup1 = true;
  }
  showPopup2() {
    this.popup2 = true;
  }
  showPopup3() {
    this.popup3 = true;
  }
  showPopup4() {
    this.popup4 = true;
  }
  showPopup5() {
    this.popup5 = true;
  }
  showPopup6() {
    this.popup6 = true;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  user-select: none;
  margin: 0;
}
li {
  border-top: 1px solid #e4e4e4;
  line-height: 44px;
  cursor: pointer;
  color: #000;
  font-size: 16px;
  margin: 10px auto;
  background: #f7f8fa;
  border-radius: 30px;
  width: 92%;
  text-align: left;
  text-indent: 1em;
}
</style>
