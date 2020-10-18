class Person {
  constructor(name, age, sex) {
    this.name = name, 
    this.age = age, 
    this.sex = sex;
  }

  walk() {
    console.log(`${this.name} is walking`);
  }

  voice() {
    console.log(`${this.name} has a nice voice`);
  }

  work() {
    if (this.sex === "male") {
      console.log(`${this.name} works hard`);
    } else {
      console.log(`${this.name} doesn't work`);
    }
  }
}

let andro = new Person("Andro", 25, "male");
let yulia = new Person("Yulia", 25, "female");
andro.work();
yulia.work();
console.log(andro);

// Переписал с помощью функции-конструктора
function Person(name, age, sex) {
    this.name = name, 
    this.age = age, 
    this.sex = sex;
  }

  Person.prototype.walk = function () {
    console.log(`${this.name} is walking`);
  };

  Person.prototype.voice = function () {
    console.log(`${this.name} has a nice voice`);
  };

  Person.prototype.work = function () {
    if (this.sex === "male") {
      console.log(`${this.name} works hard`);
    } else {
      console.log(`${this.name} doesn't work`);
    }
  };
  let andro = new Person("Andro", 25, "male");
  let yulia = new Person("Yulia", 25, "female");

console.log(andro);

// Task 2
let course = 28.35;
class Transport {
  constructor(kindOfTransport, name, age, price, maxspeed) {
    this.kindOfTransport = kindOfTransport,
    this.name = name,
    this.age = age,
    this.price = price,
    this.maxspeed = maxspeed;
  }

  speedOf() {
    console.log(`${this.kindOfTransport} has maxspeed over ${this.maxspeed} km/h`);
  }
}

class Car extends Transport {
  constructor(kindOfTransport, name, age, price, maxspeed) {
    super(kindOfTransport, name, age, price, maxspeed);
    this.numberOfPassengers = 3;
  }

  driveOn() {
    console.log(`The ${this.kindOfTransport} is driving on the road`);
  }

  get priceOfCar() {
    return Math.round(this.price / course);
  }

  set priceOfCar(value) {
    this.price = value;
  }
}

class Trolleybus extends Transport {
  constructor(kindOfTransport, name, age, price, maxspeed) {
    super(kindOfTransport, name, age, price, maxspeed);
    this.numberOfPassengers = 20;
    this.hasConductor = true;
  }

  driveOn() {
    console.log(
      `The ${this.kindOfTransport} is driving on the road with the wire`
    );
  }

  route() {
    console.log(`${this.name} has route "Moskovka-Geroev Truda"`);
  }
}

let mercedes = new Car("car", "Mercedes", 2, 200000, 150);
console.log(mercedes);

let trolleybus = new Trolleybus("Trolleybus", "Trallik", 35, 20000, 40);

console.log(trolleybus);
trolleybus.route();
