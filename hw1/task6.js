let checkAge = setInterval(function () {
  let age = +prompt("Укажите ваш возраст", "16");
  if ( age > 18) {
    console.log("Welcome");
    clearInterval(checkAge);
  } else if (age < 18) {
    console.log("Sorry");
  }
}, 4000);

// let option = setInterval(function () {
//   let a = +prompt("Enter something")
//   if ((a % 2 === 0)) {
//     alert(a);
//     clearInterval(option);
//   } else {
//   }
// }, 2000);
