'use strict'

let arr = [2, 6, 10, 17, 34, 56, 47, 93];
let arr2 = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    arr2.push(arr[i]);
  }
}
if (arr2.length > 4) {
  arr2.shift();
  arr2.pop();
} else if (arr2.length < 4) {
  arr2.push(8);
  arr2.unshift(42);
}

console.log(arr2);
console.log(arr2.length);
