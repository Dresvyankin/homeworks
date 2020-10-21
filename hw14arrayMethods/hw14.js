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

let arr = [5, 40, 10, 20, 5];

Array.prototype.myFilter = function (callback) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};

// console.log(
//   arr.myFilter(function (item) {
//     return item < 30;
//   })
// );

// console.log(array.myFilter((item, index) => index < 3));

Array.prototype.myforEach = function (callback) {
  for (let i = 0; i < this[i]; i++) {
    callback(this[i], i, this);
  }
};

// arr.myforEach(item => console.log(item));

Array.prototype.myMap = function (callback) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(callback(this[i], i, this));
  }
  return arr;
};

// console.log(
//   array.myMap((item) => {
//     return {
//       name: item.country + ".com",
//     };
//   })
// );

Array.prototype.myReduce = function (callback, start) {
  let total;
  if (typeof start === "undefined") {
    total = this[0];
    for (let i = 1; i < this.length; i++) {
      total = callback(total, this[i], i, this);
    }
  } else {
    total = start;
    for (let i = 0; i < this.length; i++) {
      total = callback(total, this[i], i, this);
    }
  }
  return total;
};

console.log(arr.myReduce((total, item) => item + total));
console.log(array.myReduce((total, item) => item.age + total, 0));
console.log(array.reduce((total, item) => item.age + total, 0));
