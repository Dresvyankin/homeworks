class MyArray {
  static from(arrayClone) {
    let array = [];
    for (let key in arrayClone) {
      array[key] = arrayClone[key];
    }
    return array;
  }
  constructor() {
    for (let i = 0; i < arguments.length; i++) {
      this[i] = arguments[i];
    }
    return this;
  }

  get length() {
    let count = 0;
    for (let key in this) {
      count++;
    }
    return count;
  }

  set length(num) {
    let count = 0;
    for (let key in this) {
      count++;
      if (count > num) {
        delete this[key];
      }
    }
    if (num > count) {
      for (let i = count; i < num; i++) {
        this[i] = undefined;
      }
    }
    return num;
  }

  pop() {
    let popElem = this[this.length - 1];
    delete this[this.length - 1];
    return popElem;
  }

  push(pushElem) {
    this[this.length] = pushElem;
  }

  forEach(callback) {
    for (let key in this) {
      callback(this[key], key, this);
    }
  }

  map(callback) {
    let myArray = new MyArray();
    for (let key in this) {
      myArray[key] = callback(this[key], key, this);
    }
    return myArray;
  }

  sort() {
    for (let i = 0, endI = this.length - 1; i < endI; i++) {
      for (let j = 0, endJ = endI - i; j < endJ; j++) {
        if (this[j] > this[j + 1]) {
          let swap = this[j];
          this[j] = this[j + 1];
          this[j + 1] = swap;
        }
      }
    }
    return this;
  }

  reduce(callback, start) {
    let total;
    !arguments[1] ? (total = 0) : (total = start);
    for (let i = 0; i < this.length; i++) {
      total = callback(total, this[i], i, this);
    }
    return total;
  }

  toString() {
    let str = "";
    for (let key in this) {
      key != this.length - 1 ? (str += this[key] + ",") : (str += this[key]);
    }
    return str;
  }
}

let array = new MyArray(1, 3, 2, 7, 4, "sdas", { user: "Andr" });
// array.length = 20
// console.log(array.length);

// array.forEach(item => console.log(item));

// console.log(array.map((item) => {
//     return item + ".com";
//   })
// );
// array.pop();

// array.push(2);

// console.log(array.toString());

// console.log(MyArray.from(array));

// console.log(array.reduce((total, item) => item + total));
// console.log(array.reduce((total, item) => item + total, 1));

// console.log(array.sort());

console.log(array);
