<template>
  <div class="picky-stepper-view">
    <div id="container">
      <ul>
        <li @click="handleClick(1)">简单用法（单选）</li>
        <li @click="handleClick(2)">简单用法（多选）</li>
        <li @click="handleClick(4)">简单用法(可以不需要异步操作)</li>
        <li @click="handleClick(3)">高级用法（多步骤）</li>
        <li @click="handleClick(5)">高级用法实际案例（多步骤）</li>
        <li @click="handleClick(6)">动态数据案例（多步骤）</li>
      </ul>
      <vg-picky-stepper
        v-model="picker1"
        :submit="submit"
        :steps="steps1"
      ></vg-picky-stepper>
      <vg-picky-stepper
        v-model="picker2"
        :submit="submit"
        :steps="steps2"
      ></vg-picky-stepper>
      <vg-picky-stepper
        v-model="picker3"
        :submit="submit"
        :steps="steps3"
      ></vg-picky-stepper>
      <vg-picky-stepper
        v-model="picker4"
        @success="handleSuccess"
        :steps="steps4"
      ></vg-picky-stepper>
      <vg-picky-stepper
        v-model="picker5"
        @success="handleSuccess"
        :steps="steps5"
      ></vg-picky-stepper>
      <vg-picky-stepper
        v-model="picker6"
        @success="handleSuccess"
        :steps="steps6"
      ></vg-picky-stepper>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
const persons = require("./persons.json");
persons.forEach(p => {
  p.label = p.Name;
});
const reasons = require("./reasons.json");
export default class PickyStepper extends Vue {
  public picker1 = false;
  public picker2 = false;
  public picker3 = false;
  public picker4 = false;
  public picker5 = false;
  public picker6 = false;
  public steps5 = [
    {
      title: "请选择改签人员",
      list: persons,
      multiple: true
    },
    {
      title: "请选择原因",
      list: reasons,
      multiple: false
    }
  ];
  public steps6 = [];
  public steps4 = [
    {
      title: "请选择改签人员",
      list: [
        { label: "lizhuang", value: "李壮" },
        { label: "keyanqin", value: "柯艳琴" },
        { label: "xionglonghui", value: "熊龙辉" },
        { label: "liyan", value: "李妍" },
        { label: "wangshengzi", value: "王生资" }
      ],
      multiple: true
    },
    {
      title: "请选择原因",
      list: [
        { label: "行程变化", value: "行程变化" },
        { label: "目的地有住宿", value: "目的地有住宿" },
        { label: "预算超支", value: "预算超支" },
        {
          label: "其他",
          type: "input",
          placeholder: "请输入原因",
          value: ""
        }
      ],
      multiple: false
    }
  ];
  public steps3 = [
    {
      title: "请选择改签人员",
      list: [
        { label: "lizhuang", value: "李壮" },
        { label: "keyanqin", value: "柯艳琴" },
        { label: "xionglonghui", value: "熊龙辉" },
        { label: "liyan", value: "李妍" },
        { label: "wangshengzi", value: "王生资" }
      ],
      multiple: true
    },
    {
      title: "请选择原因",
      list: [
        { label: "行程变化", value: "行程变化" },
        { label: "目的地有住宿", value: "目的地有住宿" },
        { label: "预算超支", value: "预算超支" },
        {
          label: "其他",
          type: "input",
          placeholder: "请输入原因",
          value: ""
        }
      ],
      multiple: false
    }
  ];
  public steps2 = [
    {
      title: "请选择改签人员",
      list: [
        { label: "lizhuang", value: "李壮" },
        { label: "keyanqin", value: "柯艳琴" },
        { label: "xionglonghui", value: "熊龙辉" },
        { label: "liyan", value: "李妍" },
        { label: "wangshengzi", value: "王生资" }
      ],
      multiple: true
    }
  ];
  public steps1 = [
    {
      title: "请选择原因",
      list: [
        { label: "行程变化", value: "行程变化" },
        { label: "目的地有住宿", value: "目的地有住宿" },
        { label: "预算超支", value: "预算超支" },
        {
          label: "其他",
          type: "input",
          placeholder: "请输入原因，不是必填",
          value: "",
          required: false
        },
        {
          label: "还有其他呢",
          type: "textarea",
          placeholder: "请输入原因，必填",
          value: "",
          counter: true,
          maxlength: 100
        }
      ],
      multiple: false
    }
  ];
  handleClick(e: number): void {
    this[`picker${e}`] = !this[`picker${e}`];
  }
  submit(args = {} as any) {
    console.log("这个是需要提交的参数", args);
    return new Promise((resolve, reject) => {
      console.log(reject);
      setTimeout(() => {
        resolve("ok");
      }, 3000);
    }).catch(err => {
      console.log("错误要在外面执行", err);
    });
  }
  handleSuccess(res: any): void {
    console.log("选择的数据", res);
  }
  mounted() {
    const personStep = {
      title: "请选择改签人员",
      list: persons,
      multiple: true
    };
    const reasonStep = {
      title: "请选择原因",
      list: reasons,
      multiple: false
    };
    this.steps6.push(personStep);
    setTimeout(() => {
      this.steps6.push(reasonStep);
    }, 1000);
    console.log(this.steps6);
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
