/*
 * @Author: Just be free
 * @Date:   2020-02-25 14:19:11
 * @Last Modified by:   Just be free
 * @Last Modified time: 2020-09-29 17:33:12
 * @E-mail: justbefree@126.com
 */
export interface Instances {
  [propName: string]: any;
}
class PopuoManager {
  zIndex: number;
  instances: Instances;
  modalStack: Array<any>;

  constructor() {
    this.zIndex = 2000;
    this.instances = {};
    this.modalStack = [];
  }
  nextZindex(): void {
    this.zIndex++;
  }
  onModalClick(): void {
    const topItem = this.modalStack[this.modalStack.length - 1];
    if (!topItem) return;
    const instance = this.getInstance(topItem.popupId);
    if (instance && instance.closeOnClickModal) {
      instance.close();
    }
  }
  closeModal(id: number): void {
    const topItem = this.modalStack[this.modalStack.length - 1];
    if (!topItem) return;
    if (id === topItem.popupId) {
      const instance = this.getInstance(topItem.popupId) as any;
      const node = (instance as any).$el as HTMLElement;
      const modal = node.previousElementSibling as HTMLElement;
      (node as any).parentNode.removeChild(modal);
      this.deregister(id);
      this.modalStack.pop();
      document.body.style.overflow = instance.bodyOverflow;
    }
  }
  openModal(id: number, instance: any): void {
    if (instance.lockScreen) {
      document.body.style.overflow = "hidden";
    }
    const node = instance.$el as HTMLElement;
    const modal = node.previousElementSibling as HTMLElement;
    modal.style.zIndex = `${this.zIndex}`;
    node.style.zIndex = `${this.zIndex + 1}`;
    this.addEvent(modal);
    this.modalStack.push({ popupId: id, node, modal, instance });
    this.nextZindex();
  }
  addEvent(modal: HTMLElement): void {
    modal.onclick = () => {
      this.onModalClick();
    };
  }
  getInstance(id: number): any {
    return this.instances[`popupid_${id}`];
  }
  register(id: number, instance: any) {
    this.instances[`popupid_${id}`] = instance;
    this.openModal(id, instance);
  }
  deregister(id: number): void {
    if (this.instances[`popupid_${id}`]) {
      this.instances[`popupid_${id}`] = null;
      delete this.instances[`popupid_${id}`];
    }
  }
}
const popupManager = new PopuoManager();
export default popupManager;
