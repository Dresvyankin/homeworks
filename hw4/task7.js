"use strict";

let arr = [
  { name: "Основы JS", spend: true, participants: 120 },
  { name: "React", spend: false, participants: 90 },
  { name: "ООП", spend: false, participants: 204 },
  { name: "Верстка", spend: true, participants: 30 },
  { name: "Функции", spend: true, participants: 97 },
  { name: "Прототипы", spend: false, participants: 72 },
  { name: "Event loop", spend: true, participants: 140 },
];

let participantsOverHundred = arr.filter(
  (item) => item.spend === true && item.participants > 100
);

console.log(participantsOverHundred);
