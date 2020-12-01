<template>
  <div class="content-view">
    <ul>
      <li @click="listClick('Flex')">
        <img src="./svgs/flex.svg">
        <span>flex</span>
      </li>
      <li @click="listClick('Toast')">
        <img src="./svgs/toast.svg">
        <span>toast</span>
      </li>
      <li @click="listClick('Spin')">
        <img src="./svgs/spin.svg">
        <span>spin</span>
      </li>
      <li @click="listClick('Popup')">
        <img src="./svgs/popup.svg">
        <span>popup</span>
      </li>
      <li @click="listClick('Icon')">
        <img src="./svgs/icon.svg">
        <span>icon</span>
      </li>
      <li @click="listClick('Checkbox')">
        <img src="./svgs/checkbox.svg">
        <span>checkbox</span>
      </li>
      <li @click="listClick('Radiobox')">
        <img src="./svgs/radiobox.svg">
        <span>radiobox</span>
      </li>
      <li @click="listClick('Button')">
        <img src="./svgs/button.svg">
        <span>button</span>
      </li>
      <li @click="listClick('Dialog')">
        <img src="./svgs/dialog.svg">
        <span>dialog</span>
      </li>
      <li @click="listClick('Sticky')">
        <img src="./svgs/sticky.svg">
        <span>sticky</span>
      </li>
      <li @click="listClick('Calendar')">
        <img src="./svgs/calendar.svg">
        <span>calendar</span>
      </li>
      <li @click="listClick('Layout')">
        <img src="./svgs/layout.svg">
        <span>layout</span>
      </li>
      <li @click="listClick('Citypicker')">
        <img src="./svgs/city-picker.svg">
        <span>citypicker</span>
      </li>
      <li @click="listClick('Indicator')">
        <img src="./svgs/indicator.svg">
        <span>indicator</span>
      </li>
      <li @click="listClick('Slider')">
        <img src="./svgs/slider.svg">
        <span>slider</span>
      </li>
      <li @click="listClick('ActionSheet')">
        <img src="./svgs/action-sheet.svg">
        <span>action-sheet</span>
      </li>
      <li @click="listClick('PickyStepper')">
        <img src="./svgs/picky-stepper.svg">
        <span>picky-stepper</span>
      </li>
      <li @click="listClick('Counter')">
        <img src="./svgs/counter.svg">
        <span>counter</span>
      </li>
      <li @click="listClick('PullRefresh')">
        <img src="./svgs/pull-refresh.svg">
        <span>pull-refresh</span>
      </li>
      <li @click="listClick('Skeleton')">
        <img src="./svgs/skeleton.svg">
        <span>skeleton</span>
      </li>
      <li @click="listClick('Picker')">
        <img src="./svgs/picker.svg">
        <span>picker</span>
      </li>
      <li @click="listClick('DatePicker')">
        <img src="./svgs/date-picker.svg">
        <span>date-picker</span>
      </li>
      <li @click="listClick('Tabs')">
        <img src="./svgs/tabs.svg">
        <span>tabs</span>
      </li>
      <li @click="listClick('AnimationList')">
        <img src="./svgs/animation-list.svg">
        <span>animation-list</span>
      </li>
      <li @click="listClick('Swipe')">
        <img src="./svgs/swipe.svg">
        <span>swipe</span>
      </li>
      <li @click="listClick('SubmitBar')">
        <img src="./svgs/submit-bar.svg">
        <span>submit-bar</span>
      </li>
      <li @click="listClick('JSapi')">
        <img src="./svgs/js-api.svg">
        <span>js-api</span>
      </li>
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
.logo {
  height: 100px;
}
.logo img {
  margin: 20px auto;
}
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
  font-size: 20px;
  margin: 10px auto;
  background: #f7f8fa;
  border-radius: 30px;
  width: 94%;
  text-align: left;
  text-indent: 1em;
}
li img {
  vertical-align: middle;
  margin-right: 15px;
  margin-top: -1px;
  width: 25px;
  height: 25px;
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
