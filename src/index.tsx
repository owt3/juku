import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

ReactDOM.render(<h1>Juku!</h1>, document.querySelector("body > main"));

const arr = [1, 2, 3];
const obj = { a: 1, b: 2, c: 3 };

[1, 2, 3].map(x => x * 2);

[
  ["a", 1],
  ["b", 2],
  ["c", 3]
].forEach(x => {
  console.log(x);
});

// [
//   ["a", deepCopy(1)],
//   ["b", deepCopy(2)],
//   ["c", deepCopy(3)]
// ];

// `for`文を使ってarrayのコピーを返すfunctionを実装せよ
function copyArray(arr: any[]) {
  const copy = [];
  for (let i = 0; i < arr.length; i++) {
    copy[i] = arr[i];
  }
  return copy;
}

// `for in`文を使ってobjectのコピーを返すfunctionを実装せよ
function copyObject(obj: any) {
  const copy: any = {};
  for (const key in obj) {
    copy[key] = obj[key];
  }
  return copy;
}

console.log(copyArray(arr));
console.log(arr === copyArray(arr));
console.log(copyObject(obj));

function deepCopy(t: any): any {
  if (typeof t === "object") {
    return Object.entries(copyObject(t))
      .map(([key, value]) => [key, deepCopy(value)])
      .reduce(
        (acc, [key, value]) => ({
          ...acc,
          [key as string]: value
        }),
        {}
      );
  } else if (typeof t === "function") {
    throw "error";
  }
  return t;
}

deepCopy([1, 2, 3]);
deepCopy({ a: 1, b: 2 });

function test__deepCopy() {
  const obj = { a: 1, b: 2, c: 3, d: [4, 5, 6], e: { f: 7, g: 8, h: 9 } };

  assert(obj !== deepCopy(obj));
  assert(obj.a === deepCopy(obj.a));
  //   assert(obj.d !== deepCopy(obj.d));
  assert(obj.e !== deepCopy(obj.e));
  assert(obj.e.f === deepCopy(obj.e.f));

  console.log("ok!!!");
}

function assert(testcase: boolean) {
  if (!testcase) {
    throw "fail";
  }
}

test__deepCopy();
