// Task 1
String.prototype.myToUpperCase = function () {
  console.log(this.toUpperCase());
};

let str = "dsfdsd";

str.myToUpperCase();

//Task 2
let allCars = {
  hasEngine: true,
  isNew: true,
  drive() {
    console.log(`He drives ${this.name} ${this.model}`);
  },
};

function Car(name, model) {
  this.name = name, 
  this.model = model
}

Car.prototype = allCars;

let firstCar = new Car("Mercedes", "S500");
let secondCar = new Car("BMW", "X5");

console.log(firstCar);

//Task 3
let father = {
  name: "Sergey",
  eyesColor: "green",
  isProgrammer: false,
};

let son = Object.create(father, {
  name: {
    value: "Andrey",
    writable: false,
    enumerable: true,
    configurable: false,
  },
  age: {
    value: 25,
    writable: true,
    enumerable: true,
    configurable: false,
  },
  isProgrammer: {
    value: true,
    writable: true,
    enumerable: true,
    configurable: true,
  },
});

//Task 4
Object.defineProperty(son, "hasCar", {
  value: true,
  writable: true,
  enumerable: true,
  configurable: true,
});

Object.defineProperties(son, {
  isMarried: {
    value: true,
    writable: true,
    enumerable: true,
    configurable: true,
  },
  birthyear: {
    get() {
      return new Date().getFullYear() - this.age;
    },
    set(newBirthYear) {
      this.age = new Date().getFullYear() - newBirthYear;
    },
  },
});

son.birthyear = 1993;

console.log(son);
