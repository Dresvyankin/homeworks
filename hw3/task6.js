"use strict";

let array = [
  { name: "Segro", nickname: "Sssergooo", lvl: 80, money: 99999 },
  { name: "Nikita", nickname: "Nikitos", lvl: 80, money: 100000 },
  { name: "Andro", nickname: "Andr", lvl: 70, money: 50000 },
  { name: "Anya", nickname: "Anos", lvl: 75, money: 45000 },
  { name: "Sasha", nickname: "Sanyek", lvl: 60, money: 40000 },
  { name: "Maxim", nickname: "Maxos", lvl: 40, money: 25000 },
  { name: "Danya", nickname: "Danos", lvl: 500, money: 15000 },
];

let a = 0;
array = Math.round(
  array
    .filter((item) => {
      if (item.lvl > 70) {
        a += 1;
      }
      return item.lvl > 70;
    })
    .reduce((total, item) => total + item.money, 0) / a
);
console.log(array);

// let personBudget = array.filter((item) => item.lvl > 70);
// let personMoney = Math.round(
//   personBudget.reduce((total, item) => total + item.money, 0) /
//     personBudget.length
// );
// console.log(personMoney);
