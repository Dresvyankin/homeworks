"use strict";

let arr = [2, 6, 10, 17, 34, 56, 47, 93];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
if (sum > 100) {
  console.log(arr.slice(0, 3));
} else {
  arr = arr.concat(14, 46, 78);
}

// console.log(arr);