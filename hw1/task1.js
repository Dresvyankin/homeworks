"use strict";

function compareNumber(a, b) {
  if (a > b) {
    return a;
  } else return b;
}

let biggerNum = compareNumber(9, 7);
console.log(biggerNum);