const button = document.getElementById("calculate");
const billamt = document.getElementById("billamt");
const serviceQual = document.getElementById("serviceQual");
const numberOfPeople = document.getElementById("peopleamt");
const tip = document.getElementById("tip");
const each = document.getElementById("each");

function calculateTip() {

  if (serviceQual.value == 0 || billamt.length == 0) {
    alert("Please fill all the values");
  } else if (numberOfPeople.length == 0 || numberOfPeople.value == 0) {
    numberOfPeople.value = 1;
  }

  if (numberOfPeople.value == 1) {
    each.style.display = "none";
  } else {
    each.style.display = "inline";
  }

  let total = (Number(billamt.value) * Number(serviceQual.value)) / Number(numberOfPeople.value);

  tip.innerText = total.toFixed(2);
}

button.addEventListener("click", calculateTip);
