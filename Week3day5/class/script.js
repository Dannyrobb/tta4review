//Array:
// let colors = ["blue", "black", "green"];

// console.log(colors[2]);

//Obj:
// let person = {
//   fName: "Daniel",
//   lName: "Robin",
// };

// console.log(person["fName"]);

//For Loop
let veryVeryImportantDontChange = 2;
// for (let i = 0; i < 11; i++) {
//   console.log(i);
// }

//Loop through array
// let colors = ["yellow", "pink", "white", "green", "blue", "blue"];
// console.log(colors[0]);
// console.log(colors[1]);
// console.log(colors[2]);

// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }

// let x = 2;
// console.log(x % 2);

//FOR/IN -> ONLY FOR OBJECTS
// let person = {
//   fname: "Sam",
//   lname: "Bam",
//   age: 28,
// };

// for (let x in person) {
//   //   console.log(x);
//   console.log(person[x]);
// }

//FOR/OF LOOP ONLY FOR ARRAYS AND STRINGS

// let colors = ["blue", "yellow", "red"];
// for (let i of colors) {
//   console.log(i);
// }

//While Loop
// let n = 0;

// while (n < 3) {
//   console.log(n);
//   n++;
// }

// let x = false;
// while (x != true) {
//   x = confirm("true or false?");
// }

// let user = "Daniel";
// while (user != "Daniel") {
//   user = prompt("What is your username?");
// }

//Do While

// let username = "Dani";

// do {
//   username = prompt("what is your username?");
// } while (username != "Dani");

// alert("Welcome Dani!");

//Break Statement

// for (let i = 0; i < 10; i++) {
//   if (i == 3) {
//     break;
//   }
//   console.log(i);
// }

// console.log("After Loop....");

//Continue statement
// for (let i = 0; i < 10; i++) {
//   if (i == 3 || i == 6) {
//     continue;
//   }
//STOPPED-DID NTO EXECUTE THE CONSOLE...
//   console.log(i);
// }

// console.log("After Loop....");

//Exercise 2:
let names = ["john", "sarah", 23, "Rudolf", 34];

//1
// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

// for (let name of names) {
//   if (typeof name != "string") {
//     continue;
//   }
//   if (name[0] !== name[0].toUpperCase()) {
//     let newName = name[0].toUpperCase() + name.slice(1);
//     console.log(newName);
//   }
// }

// for (let name of names) {
//   if (typeof name !== "string") {
//     break;
//   }
//   console.log(name);
// }

// for (let x of names) {
//   console.log(x);
//   let y = 2;
//   //   console.log(y);
// }

//Let/Const

//let ->declare a variable that I can redefine later.

// let x = 2;
// console.log(x);
// x++;
// console.log(x);

// Const ->declare a variable that I cant redefine later.
const x = 2;
console.log(x);
x++;
console.log(x);
