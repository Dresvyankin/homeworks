"use strict";

let str = `Hello world`;

let tempStr = str.split("");

for (let i = 0; i < tempStr.length; i++) {
  if (i % 2 === 0) {
    tempStr[i] = tempStr[i].toUpperCase();
  }
}

str = tempStr.join("");

console.log("UPPER CASE", str);
