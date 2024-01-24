//Event Handelers
// function clicked() {
//   alert("I was clicked");
// }

// function mouseIsOver() {
//   console.log("I am over the element");
// }
// const button = document.querySelector("button");
// button.onclick = clicked;
// button.onmouseover = mouseIsOver;

//Execise 1
// const table = document.querySelector("table");
// let myRow = 2;
// function insertRow() {
//   myRow += 1;
//   const newRow = document.createElement("tr");
//   const td1 = document.createElement("td");
//   const td2 = document.createElement("td");
//   td1.innerText = `Row${myRow} cell1`;
//   td2.innerText = `Row${myRow} cell2`;
//   newRow.append(td1, td2);
//   table.append(newRow);
//   console.log(newRow.innerText);
//   console.log(newRow.innerHTML);
// }

//addEventListener
// let x = document.getElementById("btn");
// let y = document.getElementById("btn1");

// function RespondClick(e) {
//   console.log(e);
// }

// function RespondMouseOver() {
//   console.log("My mouse is over the btn");
// }

// function RespondMouseOut() {
//   console.log("My mouse is out of the btn");
// }

// x.addEventListener("click", RespondClick);
// // x.addEventListener("mouseover", RespondMouseOver);
// // x.addEventListener("mouseout", RespondMouseOut);

// y.addEventListener("click", RespondClick);
// y.addEventListener("mouseover", RespondMouseOver);
// const myInput = document.querySelector("input");
// const div = document.querySelector("div");

// myInput.addEventListener("input", function (e) {
//   div.innerText = e.target.value;
// });
// let form = document.forms.my;

// form.addEventListener("submit", getUserComments);

// function getUserComments(e) {
//   e.preventDefault();
//   console.log(e);
// }

//exercise

// const form = document.forms.myform;
// console.log(form);
// const form = document.forms.form1;
// console.log(document.forms);

// function getInfo(e) {
//   e.preventDefault();
//   let input1 = form[0].value;
//   let input2 = form[1].value;

//   console.log(`First Name: ${input1}, Last Name: ${input2}`);
// }

// form.addEventListener("submit", getInfo);
// Create a function named calculateTip() that takes no parameter.
function calculateTip() {
  // Inside the function, use prompt to ask John for the amount of the bill.
  const amount = Number(prompt(" How much is the bill?"));
  let tipPercent;

  if (amount < 50) {
    tipPercent = 0.2;
  } else if (amount > 200) {
    tipPercent = 0.15;
  } else {
    tipPercent = 0.1;
  }
  const totalBill = amount * (1 + tipPercent);

  console.log("bill:", amount);

  console.log("tip bill including tip:", totalBill);
}
calculateTip();
