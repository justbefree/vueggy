/*
* @Author: Just be free
* @Date:   2020-11-27 16:59:42
* @Last Modified by:   Just be free
* @Last Modified time: 2020-11-27 17:29:02
* @E-mail: justbefree@126.com
*/
// export interface LoadImagePromiseOptions {
//   naturalWidth: number;
//   naturalHeight: number;
//   src: string;
// }
const p = (image: HTMLImageElement) => {
  return new Promise<any>((resolve, reject) => {
    const img = new Image();
    if (!image || !image.src) {
      const err = new Error("image src is required");
      reject(err);
    }
    img.src = image.src;
    img.onload = function() {
      resolve({
        naturalWidth: image.naturalWidth,
        naturalHeight: image.naturalHeight,
        src: image.src
      });
    };
  });
};
export const loadImageAsync = (images: HTMLImageElement[] = []) => {
  if (Array.isArray(images)) {
    const all = [] as Promise<any>[];
    images.forEach((image: HTMLImageElement) => {
      all.push(p(image));
    });
    return Promise.all(all);
  } else {
    return p(images);
  }
};