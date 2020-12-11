/*
* @Author: Just be free
* @Date:   2020-12-11 15:11:30
* @Last Modified by:   Just be free
* @Last Modified time: 2020-12-11 15:13:34
* @E-mail: justbefree@126.com
*/

export const encrypt = (str: string): string => {
  return str.replace(/^(\S{2})(\S+)(\S{2})$/, "$1******$3");
}
