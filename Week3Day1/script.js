//Defining Variables
// let myName = "Daniel";

// console.log("Daniel");
// console.log(myName);
// console.log(myName);
// console.log(myName);
// console.log(myName);
// console.log(myName);
// console.log(myName);
// console.log(myName);

//Naming
// let person1 = "me";
// let Person1 = "you";

//Camel Case

// let myVeryLongName = "aljfnaojnfoasnfojanfa";

// let variableThatHoldsImportantInfo = "blah blah";

//Keywords
//let-> defines variables

// let x = 2

// let x = 5 + 6;
// let y = x * 10;

// let x,y;
// x=2
// y=4

// console.log(x);
// let x;
// console.log(x);
// x = 2;
// console.log(x);

//Datatypes
//Strings
// let a = "Hello";
// let b = "World";
// let c = a + " " + b;
// console.log(c);

// let longString =
//   "This is a very long string which needs \
// to wrap across multiple lines because \
// otherwise my code is unreadable.";

// console.log(longString);

//String Properties
// let myString = "Hello , I am a string";
// let lengthOfString = myString.length;
// console.log(lengthOfString);

//String Methods
// let str = "Hello Everyone, please say hello to the class";

// let posUppercaseHello = str.indexOf("Hello");
// let posLowercaseHello = str.indexOf("hello");
// console.log(posUppercaseHello);
// console.log(posLowercaseHello);

//Substring
// console.log(str.substring(0, 5));

// let uppercaseName = "DANIEL";
// console.log(uppercaseName.toLowerCase());

//Exercise 1

// let addressNumber = 8;
// let addressStreet = "Bezalel";
// let country = "Israel";

// let globalAddress = "I live in " + addressStreet + " " + addressNumber + ", " + "in " + country;

// console.log(globalAddress);

//Numbers
// console.log(1 + 1);

//Number methods

// let op = "me";
// let op2 = 2;
// console.log(isNaN(op));
// console.log(isNaN(op2));
// let myNum = 10;
// console.log(myNum);
// console.log(myNum.toString());

//Exercise 2

// let birthYear = 1997;
// let futureYear = "2025";
// let calculated = futureYear - birthYear;

// console.log("I will be " + calculated + " in " + futureYear);

//Boolean
// let myName = "Daniel";
// let answer = Boolean(myName.length == 6);
// console.log(answer);

//Arrays
// let user1 = "John";
// let user2 = "Bill";
// let user3 = "Nancy";

// let users = ["John", "Bill", "Nancy"];

// console.log(users[1]);

// let arrayInsideArray = [[1, 2, 3], [4, 5, 6, 7], [8]];

// console.log(arrayInsideArray[0][1]);

//Changing Element in array
// let colors = ["blue", "green", "yellow", "black", "pink"];
// console.log(colors);

// colors[1] = "orange";
// console.log(colors);

//Properties

// console.log(colors.length);

//Array Methods
let colors = ["blue", "yellow", "green", "pink"];
// console.log(colors);

// colors.push("brown");
// console.log(colors);

// colors.pop();
// colors.pop();
// console.log(colors);

// colors.splice(1, 1, "purple", "light blue");
// console.log(colors);
// console.log(colors);

// console.log(colors.toString());

//Exercise 3

// let pets = ["cat", "fish", "rabbit", "cow", "dog"];

// let indexOfDog = pets.indexOf("dog");
// console.log(pets[indexOfDog]);

// let indexOfRabbit = pets.indexOf("rabbit");
// console.log(indexOfRabbit);

// pets.splice(indexOfRabbit, 1, "horse");
// console.log(pets);

//User Interface Functions
//alert
// console.log("before alert");
// alert("Sorry you must log in to view this page...");

// console.log("after alert");

//prompt

// let userAnswer = prompt("Please enter your username:", "username...");

// alert("Welcome " + userAnswer);

//confirm
// let deleteAcc = confirm("Are you sure you want to delete your account ?");
// if (deleteAcc) {
//   console.log("Acc deleted");
// } else {
//   console.log("You acc is still active");
// }

//Comparison
//Checks the value and the type
// console.log(Boolean("1" === 1));

//Checks only the value
// console.log(Boolean("1" == 1));

//!=
// console.log(Boolean("1" != 1));

//><
// console.log(Boolean(1 > 1));
// console.log(Boolean(1 < 1));
//>=
// console.log(Boolean(0 >= 1));

//|| & &&
// console.log(Boolean(1 === 1 && "2" === 2));
// console.log(Boolean(1 === 1 || "2" === 2));

// let x = 2;
// console.log(x);
// // x=x+1
// x++;
// console.log(x);

// // x=x+10
// x += 10;
// console.log(x);
//Exercise XP 1
// Store your favorite food into a variable.
// let favoriteFood="Burger"
// Store your favorite meal of the day into a variable (ie. breakfast, lunch or dinner)

// Console.log I eat <favorite food> at every <favorite meal>

// 5 + "34"
//predicitons 534 because second number is string
//actual

const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

let sentance = `${myWatchedSeries[0]}, ${myWatchedSeries[1]}, and ${myWatchedSeries[2]}`;
