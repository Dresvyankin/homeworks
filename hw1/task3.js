"use strict";

let position = prompt("What position interested you?", "junior");

switch (position) {
  case "junior":
    alert("Wage on this position is " + "500$");
    break;
  case "middle":
    alert("Wage on this position is " + "800$");
    break;
  case "senior":
    alert("Wage on this position is " + "1200$");
    break;
  case "team lead":
    alert("Wage on this position is " + "1800$");
    break;
  case "project manager":
    alert("Wage on this position is " + "2500$");
    break;
  default:
    alert("This position is not correctly");
}
