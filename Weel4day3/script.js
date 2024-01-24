//Exercise 1
// let sentence = ["my", "favorite", "color", "is", "blue"];

// const joinedSentance = sentence.join(" ");
// console.log(joinedSentance);

//Exercise 2
// let str1 = "mix";
// let str2 = "pod";

// const slicedStr1 = str2.slice(0, 2) + str1.slice(2);
// console.log(slicedStr1);

// const slicedStr2 = str1.slice(0, 2) + str2.slice(2);

// const concatenatedStr = `${slicedStr1} ${slicedStr2} `;

// console.log(concatenatedStr);

// console.log("double quote");
// console.log("Single Quote");
// console.log(`Backticks ${1 + 1}`);

//Exercise 3
// const num1 = Number(prompt("Give me 1 number"));
// console.log(typeof num1);

// const num2 = Number(prompt("Give me another number"));

// const action = prompt("Would you like to -,*,/ or +?");

// switch (action) {
//   case "+":
//     alert(`The sum is ${num1 + num2}`);
//     console.log(`The sum is ${num1 + num2}`);
//     break;
//   case "-":
//     alert(`The sum is ${num1 - num2}`);
//     break;
//   case "/":
//     alert(`The sum is ${num1 / num2}`);
//     break;
//   case "*":
//     alert(`The sum is ${num1 * num2}`);
//     break;

//   default:
//     alert("Sorry please pick a valid action");
// }

//Exercise 2 NINJA
// const student1 = [80, 90, 85, 100];
// const student2 = [90, 100, 85, 100];
// const student3 = [90, 33, 85, 100];
// const student4 = [25, 100, 85, 100];
// const student5 = [90, 100, 55, 100];
// const student6 = [90, 101, 85, 50];

// function findAvg(gradesList) {
//   let sum = 0;
//   for (let grade of gradesList) {
//     sum += grade;
//   }
//   const avg = sum / grades.length;
//   console.log(avg);
//   const avg =
//     gradesList.reduce(function (sum, grade) {
//       return sum + grade;
//     }) / gradesList.length;
//   const message = didHePass(avg);
//   console.log(message);
// }

// function didHePass(avg) {
//   if (avg > 65) {
//     return "You passed";
//   } else {
//     return "You DID NOT pass";
//   }
// }

// findAvg(student1);
// findAvg(student2);
// findAvg(student3);
// findAvg(student4);
// findAvg(student5);

// function logNeelam(x) {
//   console.log(x);
// }

// logNeelam(8);
// logNeelam("hello have a good day");
// logNeelam([1, 2, "cat"]);

//Stars Daily Challenge

// let stars = "";
// for (let i = 1; i <= 6; i++) {
//   stars += "* ";
//   console.log(stars);
// }

// for (let i = 1; i <= 6; i++) {
//   let star = "* ";
//   console.log(star.repeat(i));
// }

// for (let i = 1; i <= 6; i++) {
//   let stars = "";
//   for (let j = 1; j <= i; j++) {
//     stars += "* ";
//   }
//   console.log(stars);
// }

//Functions exercise gold
//Exercise1
// function isBlank(str) {
//   if (str === "") {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isBlank(""));

//Exercise 2 Abbrev_name

// function abbrevName(fullName) {
//   const words = fullName.split(" ");
//   console.log(words);
//   return `${words[0]} ${words[1][0]}.`;
// }

// console.log(abbrevName("Robin Singh"));
// console.log(abbrevName("Robin Daniel"));

// const myString = "Hello my name is daniel and I teach at developers.institute";

// console.log(myString.split(" "));
//Exercise 3
// Write a JavaScript function which takes a string as an argument and swaps the case of each character.
// For example :

// if you input 'The Quick Brown Fox'
// the output should be 'tHE qUICK bROWN fOX'.

function swapCase(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];

    if (currentChar === currentChar.toUpperCase()) {
      result += currentChar.toLowerCase();
    } else {
      result += currentChar.toUpperCase();
    }
    console.log(result);
  }
  return result;
}

console.log(swapCase("The Quick Brown Fox"));
