/*
* @Author: Just be free
* @Date:   2020-10-19 10:24:40
* @Last Modified by:   Just be free
* @Last Modified time: 2020-10-19 18:30:07
* @E-mail: justbefree@126.com
*/
import VgDate from "./VgDate";
const validateFormatedDate = (date) => {
  const reg = /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$/;
  return date && date.match(reg);
};

export { VgDate, validateFormatedDate };
