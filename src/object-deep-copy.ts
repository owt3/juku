// sandbox.ts

export default {};

const arr = [1, 2, 3];
const obj = { a: 1, b: 2, c: 3 };

// `for`文を使ってarrayのコピーを返すfunctionを実装せよ
function copyArray(arr: any[]) {
  const copy = [];
  for (let i = 0; i < arr.length; i++) {
    copy[i] = arr[i];
  }
  return copy;
}

// `for in`文を使ってobjectのコピーを返すfunctionを実装せよ
function copyObject(obj: { [key: string]: any }): { [key: string]: unknown } {
  const copy = {};
  for (const key in obj) {
    copy[key] = obj[key];
  }
  return copy;
}

console.log(copyArray(arr));
console.log(arr === copyArray(arr));
console.log(copyObject(obj));

function deepCopy<T>(t: T): T {
  return {};
}
