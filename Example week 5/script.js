let currentColor = null;

const btn = document.querySelector("button");
btn.addEventListener("click", tellMeChosenColor);

function getColor(e) {
  console.log(e.target.style.backgroundColor);
  currentColor = e.target.style.backgroundColor;
}

function tellMeChosenColor() {
  console.log(currentColor);
}

const colors = document.querySelectorAll(".colors");

console.log(colors);

for (let element of colors) {
  console.log(element);
  element.addEventListener("click", getColor);
}
