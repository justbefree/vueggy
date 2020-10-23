<template>
  <div class="citypicker-view">
    <div id="container">
      <ul>
        <li @click="handlePicker(1)">国内城市</li>
        <li @click="handlePicker(2)">国际城市</li>
        <li @click="handlePicker(3)">全部城市</li>
        <li @click="handlePicker(4)">受限城市</li>
        <li @click="handlePicker(5)">显示历史记录</li>
        <li @click="handlePicker(6)">不显示热门城市</li>
        <li @click="handlePicker(7)">可搜索</li>
        <li @click="handlePicker(8)">可搜索(三列布局)</li>
      </ul>
      <vg-citypicker
        :searchable="false"
        @pick="handlePick"
        v-model="picker1"
        :tabs="tabs1"
        :alphaBeta="getAlphaBeta()"
        :history="getHistory()"
        :hotCity="getHotCity()"
        showHistory
      ></vg-citypicker>
      <vg-citypicker
        :alphaBeta="getAlphaBeta()"
        :history="getHistory()"
        :hotCity="getHotCity()"
        showHistory
        :searchable="false"
        @pick="handlePick"
        v-model="picker2"
        :tabs="tabs2"
      ></vg-citypicker>
      <vg-citypicker
        :alphaBeta="getAlphaBeta()"
        :history="getHistory()"
        :hotCity="getHotCity()"
        :searchable="false"
        @pick="handlePick"
        v-model="picker3"
      ></vg-citypicker>
      <vg-citypicker
        @pick="handlePick"
        v-model="picker4"
        :limitedData="data.cnCitiesList"
        limited
      ></vg-citypicker>
      <vg-citypicker
        @pick="handlePick"
        v-model="picker5"
        :hotCity="getHotCity()"
        showHistory
        :history="getHistory()"
        :alphaBeta="getAlphaBeta()"
      ></vg-citypicker>
      <vg-citypicker
        :alphaBeta="getAlphaBeta()"
        :searchable="false"
        @pick="handlePick"
        v-model="picker6"
        :tabs="tabs2"
        :showHotCity="false"
      ></vg-citypicker>
      <vg-citypicker
        :search="getSearch()"
        :alphaBeta="getAlphaBeta()"
        :history="getHistory()"
        :hotCity="getHotCity()"
        showHistory
        @pick="handlePick"
        v-model="picker7"
      ></vg-citypicker>
      <vg-citypicker
        :search="getSearch()"
        :alphaBeta="getAlphaBeta()"
        :history="getHistory()"
        :hotCity="getHotCity()"
        showHistory
        @pick="handlePick"
        v-model="picker8"
        column="3"
      ></vg-citypicker>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
const data = require("./cities.json").result;
// import VueGgy from "../../src/component/VueGgy";
export default class Citypicker extends Vue {
  public data = data;
  public picker1 = false;
  public picker2 = false;
  public picker3 = false;
  public picker4 = false;
  public picker5 = false;
  public picker6 = false;
  public picker7 = false;
  public picker8 = false;
  public tabs1 = [{ label: "中国", key: "mainland-china" }];
  public tabs2 = [{ label: "非中国大陆(国际/港澳台)", key: "overseas" }];
  getSearch() {
    return {
      params: { a: "1", b: "2" },
      action: this.getSearchAction,
      parse: (e, params = {}) => {
        const { tab } = params;
        if (tab === "mainland-china") {
          return e.cnCitiesList;
        } else if (tab === "overseas") {
          return e.intCitiesList;
        }
      }
    };
  }
  getSearchAction(params = {}) {
    console.log("这里处理请求的参数", params);
    return new Promise((resolve, reject) => {
      console.log(reject);
      // setTimeout(() => {
      //   reject("失败信息");
      // }, 1000);
      setTimeout(() => {
        resolve(data);
      }, 1000);
    }).catch(err => {
      this.Toast(err);
      console.log(err, "异常在组件外面处理");
    });
  }
  getHistory() {
    return {
      title: "历史查询",
      params: { a: "1", b: "2" },
      action: this.getHistoryAction,
      parse: (e: any, params = {}) => {
        const { tab } = params;
        if (tab === "mainland-china") {
          return e.cnCitiesList;
        } else if (tab === "overseas") {
          return e.intCitiesList;
        }
      }
    };
  }
  getHistoryAction(params = {}) {
    console.log("这里处理请求的参数", params);
    return new Promise((resolve, reject) => {
      console.log(reject);
      // setTimeout(() => {
      //   reject("失败信息");
      // }, 1000);
      setTimeout(() => {
        resolve(data);
      }, 1000);
    }).catch(err => {
      this.Toast(err);
      console.log(err, "异常在组件外面处理");
    });
  }
  handlePicker(num: number): void {
    this[`picker${num}`] = !this[`picker${num}`];
  }
  handlePick(e: any): void {
    this.Toast(`已选择：${e.CityName}`);
  }
  getCityListByAlphaBeta(params = {} as any) {
    console.log("这里处理请求的参数", params);
    return new Promise((resolve, reject) => {
      console.log(reject);
      // setTimeout(() => {
      //   reject("失败信息");
      // }, 1000);
      setTimeout(() => {
        resolve(data);
      }, 1000);
    }).catch(err => {
      this.Toast(err);
      console.log(err, "异常在组件外面处理");
    });
  }
  getAlphaBeta() {
    return {
      title: "按字母查询",
      params: { a: "1", b: "2" },
      action: this.getCityListByAlphaBeta,
      parse: e => {
        return e.cnCitiesList;
      }
    };
  }
  getHotCity() {
    return {
      title: "热门城市",
      params: { a: "1", b: "2" },
      action: this.getHotCityAction,
      parse: (e, params = {}) => {
        const { tab } = params;
        if (tab === "mainland-china") {
          return e.cnCitiesList;
        } else if (tab === "overseas") {
          return e.intCitiesList;
        }
      }
    };
  }
  getHotCityAction(params = {} as any) {
    console.log("这里处理请求的参数", params);
    return new Promise((resolve, reject) => {
      // setTimeout(() => {
      //   reject("失败信息");
      // }, 1000);
      console.log(reject);
      setTimeout(() => {
        resolve(data);
      }, 1000);
    }).catch(err => {
      this.Toast(err);
      console.log(err, "异常在组件外面处理");
    });
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
  margin: 20px auto;
}
</style>
