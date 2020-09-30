/*
* @Author: Just be free
* @Date:   2020-09-30 16:35:11
* @Last Modified by:   Just be free
* @Last Modified time: 2020-09-30 17:12:00
* @E-mail: justbefree@126.com
*/
const importAll = (context: __WebpackModuleApi.RequireContext) => {
  const map = {} as any;
  for (const key of context.keys()) {
    const keyArr = key.split('/')
    keyArr.shift() // 移除.
    map[keyArr.join('.').replace(/\.svg$/g, '')] = context(key)
  }
  return map;
};

export default importAll(require.context('./', false, /\.svg$/));