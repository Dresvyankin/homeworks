let obj1 = {
  name: "Andr",
  age: 24,
  hasBaby: false,
};

for (let key in obj1) {
  if (typeof obj1[key] === "string") {
    console.log(obj1[key]);
  }
}
