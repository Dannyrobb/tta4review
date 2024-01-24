const button = document.querySelector("button");

// setTimeout(function () {
//   alert("3 seconds passed");
// }, 3000);

// function secondsPassed() {
//   alert("3 seconds passed");
// }

// const timoutId = setTimeout(secondsPassed, 3000);

// button.addEventListener("click", function () {
//   console.log(timoutId);
//   clearTimeout(timoutId);
// });

let i = 0;
const intervalId = setInterval(function () {
  console.log(i);
  i++;
}, 1000);

button.addEventListener("click", function () {
  clearInterval(intervalId);
});
