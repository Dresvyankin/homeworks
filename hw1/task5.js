"use strict";

function calcParameters(a, b, calc) {
  if (calc === "плюс") {
    return a + b;
  } else if (calc === "минус") {
    return a - b;
  } else if (calc === "умножить") {
    return a * b;
  } else if (calc === "поделить") {
    return a / b;
  }
}

let calculate = calcParameters(10, 5, "минус");

console.log(calculate);
