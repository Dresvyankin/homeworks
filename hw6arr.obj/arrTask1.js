'use strict'

let personage = [
  {nickname: 'Andr', level: 70, hours: 370, gold: 25000, location: 'Paris'},
  {nickname: 'Sergo', level: 80, hours: 700, gold: 100000, location: 'Kharkov'},
  {nickname: 'Nik', level: 75, hours: 430, gold: 80000, location: 'Paris'},
  {nickname: 'Lena', level: 50, hours: 250, gold: 10000, location: 'Munich'},
  {nickname: 'Max', level: 40, hours: 120, gold: 5000, location: 'Praga'},
  {nickname: 'Ros', level: 65, hours: 270, gold: 16000, location: 'Munich'},
  {nickname: 'Lesha', level: 72, hours: 350, gold: 20000, location: 'Poznan'}
];

let personageMaxHour = personage.sort((a, b) => b.hours - a.hours)[0]

console.log(personageMaxHour)