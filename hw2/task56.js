"use strict";

let arr = [2, 6, 10, 17, 34, 56];

let a = 0;
for (let i = 0; i < arr.length; i++) {
  if (i % 2 === 0) {
    a += 1;
  }
}
if (a > 4) {
  arr.shift();
  arr.pop();
} else if (a < 4) {
  arr.push(8);
  arr.unshift(42);
}

console.log(a);
console.log(arr);
