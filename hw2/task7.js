'use strict'

let arr = [2, "a", 3, "cd", 7, "as", "hp", 34, "to", 12, "yes", 12, 13, 45, 756];
let arr2;
if (arr.length > 10) {
  arr2 = arr.slice(Math.round(arr.length / 2));
  arr = arr.slice(0, Math.round(arr.length / 2));
};

console.log(arr);
console.log(arr2);
