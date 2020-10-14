/*
* @Author: Just be free
* @Date:   2020-10-14 13:54:06
* @Last Modified by:   Just be free
* @Last Modified time: 2020-10-14 14:58:55
* @E-mail: justbefree@126.com
*/
const getDomHTML = (dom: HTMLElement): string => {
  return dom.outerHTML;
}
const svgDefinition = "data:image/svg+xml;base64,";
export default {
  fill: (svg: string, fill: string): string => {
    const base64 = svg.substring(26);
    const decoded = atob(base64);
    const wrapper = document.createElement("div") as HTMLElement;
    wrapper.innerHTML = decoded;
    const newSvg = wrapper.firstChild as HTMLElement;
    const innerPath = newSvg.getElementsByTagName("path")[0];
    innerPath.setAttribute("fill", fill);
    const html = getDomHTML(newSvg);
    const newBase64 = `${svgDefinition}${btoa(html)}`;
    return newBase64;
  }
}
