"use strict";

let str = "Серега и Андре изучают джаваскрипт";
let arr = str.split(" ");
if (arr.includes("изучают")) {
  arr.splice(arr.indexOf("изучают"), 1 , arr[arr.indexOf("изучают")].toUpperCase());
}
str = arr.join(" ");
console.log(str);
