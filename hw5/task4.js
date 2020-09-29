"use strict";

let array = [
  {
    firstName: "Nikita",
    lastName: "Viktorov",
    age: 20,
    country: "Ukraine",
    salary: 120000,
  },
  {
    firstName: "Sergo",
    lastName: "Pakin",
    age: 27,
    country: "Ukraine",
    salary: 100000,
  },
  {
    firstName: "Sasha",
    lastName: "Alexandrov",
    age: 21,
    country: "Russia",
    salary: 50000,
  },
  {
    firstName: "Max",
    lastName: "Maximov",
    age: 17,
    country: "Russia",
    salary: 20000,
  },
  {
    firstName: "Vanya",
    lastName: "Nazarov",
    age: 16,
    country: "USA",
    salary: 35000,
  },
];

let a = 0;
let averageSalary =
  array
    .filter((item) => {
      if (item.age > 22) {
        a += 1;
      }
      return item.age > 22;
    })
    .reduce((total, item) => total + item.salary, 0) / a;
console.log(averageSalary);
