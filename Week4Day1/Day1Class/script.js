//Functions
// function drinkCoffee() {
//   console.log("Drink Coffee");
// }

//Functions with Parameters
// function userInfo(username, userAge) {
//   alert("Welcome " + username + ", your age is " + userAge);
// }

//Calling a function

// drinkCoffee();
// userInfo("dani123", 26);

// userInfo("yossi123", 35);
// userInfo();

// function calculate(a, b, c, d) {
//   console.log(a + b + c + d);
// }

// calculate(2, 5, 8, 7);

//Default Values

// function userInfo(username = "Anonymous", userAge = 30) {
//   console.log("My name is " + username + ", my age is " + userAge);
// }
// userInfo("Sarah", 12);

// let myName = "Daniel";
// console.log(myName);
// myName = "Sam";
// console.log(myName);

//Local Variables

// function userMoreInfo(username, userAge) {
//   let eyeColor = "blue";
//   console.log("My name is " + username + ", my age is " + userAge + ", I have " + eyeColor + " eyes");

// }

// userMoreInfo("Dani", 26);

// console.log(eyeColor);

//Exercise 1

// function myFunc(myAge) {
//   const mom = myAge * 2;
//   const dad = mom * 1.2;
//   console.log(`My mom is ${mom} years old and my dad is ${dad} years old.`);
// }

// myFunc(26);

//Return

// function userInfo(userName, userAge) {
//   let result = `My username is ${userName} and my age is ${userAge}`;
//   //   console.log(result);
//   return result;
//   //return-> leave the function
//   console.log("something");
// }

// const returnedFromFunction = userInfo("Dani123", 26);
// console.log(returnedFromFunction);

// function askUser() {
//   return prompt("What is your name?");
// }

// function greetUser() {
//   const username = askUser();
//   console.log(`WELCOME ${username}`);
// }

// greetUser();

// function momsAge(myAge) {
//   return myAge * 2;
// }

// console.log(momsAge(26));

//Object Methods

// const person = {
//   firstName: "Sarah",
//   eyeColor: "blue",
//   eat: function () {
//     console.log("I love chocolate");
//   },
// };
// person.eat();

//Object This Keyword

const person = {
  firstName: "Sarah",
  eyeColor: "blue",
  eat: function () {
    console.log(`My name is ${this.firstName} and I love chocolate`);
  },
};
// console.log(person.)
person.eat();
