// task 1
function calcNum(n) {
  return function (num) {
    return num + n;
  };
}

let tenNum = calcNum(10);
console.log(tenNum(3));

// task 2 bind

let obj1 = {
  name: "Andro",
};

let obj2 = {
  name: "Sergo",
};

function hi() {
  console.log(`Hi, ${this.name}!`);
}
function bind(context, fn) {
  return function () {
    fn.apply(context);
  };
}

let myBind1 = bind(obj1, hi);
myBind1();
let myBind2 = bind(obj2, hi);
myBind2();

// object

let player = {
  nickname: "Andro",
  level: 70,
  hours: 370,
  gold: 25000,
  location: "Paris",
};

// task 1

let numbers = Object.values(player).filter((item) => typeof item === "number");
console.log(numbers);

//task 2

for (let [key, entries] of Object.entries(player)) {
  if (typeof entries === "string") {
    player[key] = entries.toUpperCase();
  } else {
    player[key] = entries;
  }
}

console.log(player);
