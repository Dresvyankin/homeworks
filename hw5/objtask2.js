let obj1 = {
  name: "Andr",
  age: 24,
  hasBaby: false,
};

obj1.isFootballer = true;

delete obj1.hasBaby;

console.log(obj1);
