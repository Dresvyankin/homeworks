let person1 = {
  name: "Andr",
  age: 24,
  language: "english",
  info(work, company) {
    console.log(
      `My name is ${this.name}, Im ${this.age} years old and Im a ${work} in ${company}`
    );
  },
};

let person2 = {
  name: "Sergo",
  age: 27,
  language: "english",
  info(level) {
    console.log(
      `My name is ${this.name}, Im ${this.age} years old and level of my ${this.language} is ${level}`
    );
  },
  englishLessons() {
    console.log(`${this.name} learns ${this.language} 3 times a week`);
  },
};

person1.info.call(person2, "frontend", "epam"); //My name is Sergo, Im 27 years old and Im a frontend in epam
person2.info.apply(person1, ["B1"]); //My name is Andr, Im 24 years old and level of my english is B1
let infoAboutPerson = person2.englishLessons.bind(person1);
infoAboutPerson(); //Andr learns english 3 times a week
