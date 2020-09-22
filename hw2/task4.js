'use strict'

let arr = [2, 6, 10, 17, 34, 56, 47, 93];

let sum = 0;
for (let key of arr) {
  if (key % 2 !== 0) {
    sum += key;
  }
}
console.log(sum);
