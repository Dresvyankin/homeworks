"use strict";

let str = "Серега и джаваскрипт Андре изучают джаваскрипт";
let arr = str.split(" ");

//  ПЕРВЫЙ ВАРИАНТ, НО НЕ РАБОТАЕТ, КОГДА В СТРОКЕ 2 СЛОВА ДЖАВАСКРИПТ

// if (arr.includes("джаваскрипт")) {
//     arr.splice(arr.indexOf("джаваскрипт"), 1);
// }
// str = arr.join(" ");
// console.log(str);

// ЭТОТ РАБОТАЕТ, НО Я НЕ УВЕРЕН, ЧТО ТЫ ИМЕННО ЭТОГО ХОТЕЛ

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === "джаваскрипт") {
    str = arr.splice(i, 1);
  }
}
str = arr.join(" ");

console.log(str);
