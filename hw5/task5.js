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

let liveInUkraine = array.filter((item) => item.country === "Ukraine");

console.log(liveInUkraine);
