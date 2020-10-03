let f = function () {
  this.y = 8;
  (function () {
    this.y = 1;
  })();
  console.log(this.y);
};

let object = {
  y: 4,
  m: function () {
    console.log(this.y);
  },
};

//=====================
f();
let f = function () {
  this.y = 8; // window.y = 8, потому что глобальная функция
  (function () {
    this.y = 1; // window.y = 1, потому что самовызывающаяся функция, перезаписываем свойство y
  })();
  console.log(this.y); // 1, this.y = window.y
};

//=====================
new f();
let f = function () {
  this.y = 8; // object.y = 8, потому что с помощью конструктора
  (function () {
    this.y = 1; // window.y = 1, потому что самовызывающаяся функция
  })();
  console.log(this.y); // 8, this.y = object.y
};

//=====================
object.m();
let object = {
  y: 4,
  m: function () {
    console.log(this.y); // 4, у object есть свой y, this.y = object.y
  },
};

//=====================
new object.m();
let object = {
  y: 4,
  m: function () {
    console.log(this.y); //undefined, потому что this.y - это не object.y, this.y - это контекст объекта, созданного с помощью конструктора, а в нем нету свойства y.
  },
};

//=====================
f.call(f);
let f = function () {
  this.y = 8; //f.y = 8, присваиваем y, грубо говоря, объекту f
  (function () {
    this.y = 1; //window.y = 1
  })();
  console.log(this.y); // 8, потому что f вызывается в контексте объекта f, this.y = f.y
};

//=====================
object.m.call(f);
let f = function () {
  this.y = 8; //window.y = 8, потому что глобальная функция
  (function () {
    this.y = 1; //window.y = 1, перезаписываем свойство
  })();
  console.log(this.y); //1
};

let object = {
  y: 4,
  m: function () {
    console.log(this.y); //undefined, потому что у f нету свойства y
  },
};
