/*
* @Author: Just be free
* @Date:   2020-10-12 15:48:16
* @Last Modified by:   Just be free
* @Last Modified time: 2020-10-14 18:10:27
* @E-mail: justbefree@126.com
*/
import { renderDOM } from "../component/renderDOM";
import VgDialog from "./dialog";
import { nextTick } from "vue";
export { VgDialog };
export interface DialogOptions {
  zIndex: string | number;
  closeModelOnClick: boolean;
  message: string;
  title: string;
  showCancelButton: boolean;
  cancelButtonText: string;
  showConfirmButton: boolean;
  confirmButtonText: string;
  className: string | Array<string>;
  textHideWhenLoading: boolean;
  beforeOpen: (args: any) => void;
  opened: (args: any) => void;
  beforeClose: (args: any) => void;
  closed: (args: any) => void;
}
export default {
  alert(options: DialogOptions): void {
    const props = Object.assign({ showCancelButton: false }, options);
    const instance = renderDOM(VgDialog, props, { default: () => [] });
    const ctx = instance.ctx;
    document.body.appendChild(ctx.getDomTree() as HTMLElement);
    ctx.setRenderedAsComponent(false);
    nextTick(() => {
      ctx.setVisible(true);
    });
  },
  confirm(options: DialogOptions): void {
    const props = Object.assign({ showCancelButton: true }, options);
    this.alert(props);
  }
}
