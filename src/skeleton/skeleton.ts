/*
* @Author: Just be free
* @Date:   2020-11-04 15:11:21
* @Last Modified by:   Just be free
* @Last Modified time: 2020-11-04 15:52:04
* @E-mail: justbefree@126.com
*/
import VueGgy, { Options, mixins, props } from "../component/VueGgy";
import { h } from "vue";
const Props = props({
  margin: String,
  rows: {
    type: [String, Number],
    default: 2,
    validator: (num: string|number) => {
      return parseInt(String(num)) >= 2 && parseInt(String(num)) <= 20;
    }
  },
  avatar: {
    type: Boolean,
    default: true,
  }
});
const paddingHeight = 10;
const barHeight = 16;
const avatarSize = 80;
@Options({
  name: "VgSkeleton",
  mixins: []
})
export default class VgSkeleton extends mixins(VueGgy, Props) {
  public static componentName = "VgSkeleton";
  render() {
    const avatarClass = this.avatar ? "avatar" : "";
    const rows = parseInt(this.rows);
    const boxHeight = (rows + 1) * barHeight + rows * paddingHeight;
    return h(
      "div",
      { class: ["vg-skeleton"], style: { margin: this.margin } },
      {
        default: () => [
          h(
            "div",
            {
              class: ["animated-background"],
              style: { height: `${boxHeight}px` },
            },
            {
              default: () => [
                h(
                  "div",
                  { class: ["background-masker", "header-left", avatarClass] },
                  { default: () => [] }
                ),
                h("div", { class: ["background-masker", "header-right"] }, { default: () => [] }),
                ...Array.apply(null, new Array(rows)).map((row: any, index: number, arr: any[]) => {
                  return h(
                    "div",
                    {
                      class: [
                        "background-masker",
                        avatarClass,
                        `header-bottom-${index + 1}`,
                      ],
                    },
                    { default: () => [] }
                  );
                }),
                h(
                  "div",
                  {
                    class: ["background-masker", "subheader-left", avatarClass],
                    style: { height: `${boxHeight - avatarSize}px` },
                  },
                  { default: () => [] }
                ),
                h("div", { class: ["background-masker", "subheader-right"] }, { default: () => [] }),
              ]
            }
          ),
        ]
      }
    );
  }
}
