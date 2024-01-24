//Scopes
// function newFunc() {

//   function newerFunc() {
//     let x = 2;
//   }
//   console.log(x)
// }

// function doSomething() {
//   console.log(x);
//   var x = 1;
//   console.log(x);
// }

// doSomething();

// function doSomething1() {
//   console.log(y);
//   let y = 1;
//   console.log(y);
// }

// doSomething1();

// function doSomething() {
//   var x = 1;
//   var x = 2;
//   console.log("x: ", x); //x: 2
// }
// doSomething();

// function doSomething() {
//     let x = 1;
//     let x = 2;
//     console.log("x: ", x); //x: 2
//   }
//   doSomething();
// var x = 1;
// {
//   var x = 2;
// }

// console.log(x);

//Exercise

// function checkAge(age) {
//   let message;
//   if (age < 18) {
//     message = "Sorry, you're too young.";
//   } else {
//     message = "Yay! You're old enough!";
//   }
//   return message;
// }

// console.log(checkAge(21));

// function numbers() {
//   for (let i = 0; i < 5; i += 1) {
//     console.log(i);
//   }
//   console.log(i);
// }
// numbers();

//Default Parameters
// function multiply(a, b = 2) {
//   return a * b;
// }

// console.log(multiply(10));

//Terinary Operator

// function getFee(isMember) {
//   if (isMember) {
//     return "$2.00";
//   } else {
//     return "$10.00";
//   }
// }

// console.log(getFee(true));

// function getFeeTerinary(isMember) {
//   return isMember ? "$2.00" : "$10.00";
// }

// console.log(getFeeTerinary(false));

// let x = 1;
// let y = 2;

// if (x > y) {
//   console.log("x is bigger");
// } else if (x < y) {
//   console.log("x is smaller");
// } else {
//   console.log("they are equal");
// }

// function checkNum(a, b) {
//   return a > b ? `${a} is bigger` : a < b ? `${b} is bigger` : `They are equal`;
// }

// console.log(checkNum(x, y));

// let userAnswer = prompt("Give me a year");
// function checkYear(year) {
//   return year > 2000 ? "You are in the 21st century" : "You live in the middle age";
// }

// function check(year) {
//   if (year > 2000) {
//     return "You are in 21st century";
//   } else {
//     return "You live in middle ages";
//   }
// }

// console.log(checkYear(userAnswer));

// const fname = "daniel";
// const age = 27;

// console.log(`My name is ${fname} and I am ${age}`);
// console.log("My name is " + fname + " and I am " + age);

//Functions
//Function decleration
// greet("dani123");

// function greet(param) {
//   console.log(`hello ${param}`);
// }

//Function Expression

// const greet = function (param) {
//   console.log(`hello ${param}`);
// };

// greet("dani123");

//Arrow Function

// function myFunc(x, y) {
//   return x * y;
// }

// console.log(myFunc(1, 2));

// const myFunc1 = (x, y) => x * y;

// console.log(myFunc1(1, 2));

// const button = document.querySelector("button");
// button.addEventListener("click", function () {});

// button.addEventListener("click", () => {

// });

// const func = (x) => x * 2;

//Exercise

// const calculator = (x, y, z) => {
//   return z == "+" ? x + y : z == "-" ? x - y : z == "*" ? x * y : x / y;
// };
// const num1 = Number(prompt("Give me first number"));
// const num2 = Number(prompt("Give me second number"));
// const sign = prompt("What do you want to do (+,-,*...)");

// console.log(calculator(num1, num2, sign));

// const myArray = [2, 3, 4, 5, 6];

// myArray.forEach((element, index, array) => {
//   console.log("Element: " + element);
//   console.log("Index: " + index);
//   console.log(array);
// });

//Exercise
// const numbers = [10, 11, 12, 15, 20];

// numbers.forEach((element) => {

//   //   element % 2 === 0 ? console.log(element) : console.log();
//   element % 2 === 0 && console.log(element);
// });
// // let x = 2;
// let y = 2;
// if (x == 2 && y == 2) {
//   console.log("they are both 2");
// }

//Some Method
// const myArr = [1, 2, 3, 4, 5, 6, 7, 8];

// let answer = myArr.some((element) => {
//   console.log(element);
//   return element > 7;
// });

// console.log(answer);

//Every Method

// const myArr = [1, 2, 3, 4, 5, 6, "im a string", 7, 8];

// let answer = myArr.every((element) => {
//   console.log(element);
//   return typeof element == "number";
// });

// console.log(answer);

// const people = [
//   { name: "Alice", age: 30, job: "Developer" },
//   { name: "Bob", age: 25, job: "Developer" },
//   { name: "Charlie", age: 35, job: "Developer" },
//   { name: "David", age: 28, job: "Developer" },
// ];

// let answer = people.every((element) => {
//   console.log(element);
//   return element.job == "Developer";
// });

// answer ? console.log("they are all developers") : console.log("they are not all developers");

//Exercise
// const words = ["wow", "hey", "bye"];

// let answer = words.some((element) => {
//   console.log(element);
//   //   return element[0] == "h";
//   return element.startsWith("h");
// });
// console.log(answer);

//Exerrcise Every
// const words = ["hello", "hey", "aola", "hola"];

// let answer = words.every((element) => {
//   console.log(element);
//   //   return element.startsWith("h");
//   return element[0] == "h";
// });
// console.log(answer);

//Includes
// const myArr = ["bob", "jason", "shlomi"];

// let answer = myArr.includes("yossi");
// console.log(answer);

// const str = "bottle";
// const answer = str.replace("tt", "z");
// console.log(answer);
