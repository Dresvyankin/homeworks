let person = {
  name: "Andr",
  lastname: "Dresvyankin",
  age: 24,
  money: 3000,
  weight: undefined,
  height: undefined,
};
for (let key in person) {
  if (typeof person[key] === "string") {
    person[key] = person[key].toLowerCase();
  } else if (typeof person[key] === "number") {
    delete person[key];
  } else if (typeof person[key] === "undefined") {
    person[key] = 999;
  }
}

console.log(person);
