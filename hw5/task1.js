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

let newArray = array.map((item) => {
  for (let key in item) {
    if (typeof item[key] === "string") {
      item[key] = item[key].toUpperCase();
    } else {
      delete item[key];
    }
  }

  return item;
});

console.log(newArray);
