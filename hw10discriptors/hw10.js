"use strict";

let phone = Object.create(
  {},
  {
    name: {
      value: "iPhone",
      enumerable: true, // свойство можно перечислить
      writable: true, // значение свойства можно изменить
      configurable: true, // свойство можно удалить
    },
    model: {
      value: "11 Pro Max",
      enumerable: true, // свойство можно перечислить
      writable: true, // значение свойства можно изменить
      configurable: true, // свойство можно удалить
    },
    OS: {
      value: "iOS",
      enumerable: true, // свойство можно перечислить
      writable: false, // значение свойства нельзя изменить
      configurable: false, //// свойство нельзя удалить
    },
    price: {
      value: 40000,
      enumerable: true, // свойство можно перечислить
      writable: true, // значение свойства можно изменить
      configurable: true, // свойство можно удалить
    },
    priceInDollars: {
      get() {
        return Math.round(this.price / 28.2);
      },
      set(newPrice) {
        this.price = newPrice;
      },
    },
  }
);

Object.defineProperty(phone, "color", {
  value: "Black",
  enumerable: true, // свойство можно перечислить
  writable: true, // значение свойства можно изменить
  configurable: false, //// свойство нельзя удалить
});

console.log(phone);
