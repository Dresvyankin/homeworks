"use strict";

let car = Object.create(
  {},
  {
    name: {
      value: "Mercedes",
      enumerable: true,
    },
    model: {
      value: "S500",
      enumerable: true,
      writable: true,
      configurable: true,
    },
    year: {
      value: 2017,
      enumerable: true,
      writable: true,
      configurable: true,
    },
    color: {
      value: "black",
      enumerable: true,
      writable: true,
      configurable: true,
    },
    maxSpeed: {
      value: 200,
      enumerable: true,
      writable: true,
      configurable: true,
    },
  }
);

Object.defineProperty(car, "engine", {
  value: "V8",
  enumerable: true,
  configurable: true,
});

Object.defineProperty(car, "speed", {
  get() {
    return this.maxSpeed;
  },
  set(speedForWoman) {
    this.maxSpeed = speedForWoman;
  },
});

console.log(car.maxSpeed);
car.maxSpeed = 120;
console.log(car);

let array = [
  {
    firstName: "Nikita",
    age: 20,
    salary: 120000,
  },
  {
    firstName: "Sergo",
    age: 27,
    salary: 100000,
  },
  {
    firstName: "Andro",
    age: 21,
    salary: 50000,
  },
  {
    firstName: "Max",
    age: 17,
    salary: 20000,
  },
  {
    firstName: "Vanya",
    age: 26,
    salary: 30000,
  },
];

let count = 0;
let personSalary =
  array
    .filter((item) => {
      if (item.age > 25) {
        count++;
        return item;
      }
    })
    .reduce((total, item) => item.salary + total, 0) / count;

console.log(personSalary);

let tax = 10000;
let salary = array.reduce((total, item) => item.salary - tax + total, 0);

console.log(salary);
