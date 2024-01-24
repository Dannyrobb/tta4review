const form = document.forms.libform;
const noun = document.getElementById("noun");
const adjective = document.getElementById("adjective");
const person = document.getElementById("person");
const verb = document.getElementById("verb");
const place = document.getElementById("place");
const story = document.getElementById("story");
const randomButton = document.getElementById("random");
let prevRandomNum;
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (
    noun.value.length == 0 ||
    adjective.value.length == 0 ||
    person.value.length == 0 ||
    verb.value.length == 0 ||
    place.value.length == 0
  ) {
    alert("Please fill all the values");
  } else {
    generateRandom(adjective.value, noun.value, person.value, verb.value, place.value);
  }
});

randomButton.addEventListener("click", function () {
  generateRandom(adjective.value, noun.value, person.value, verb.value, place.value);
});

function generateRandom(adjective, noun, person, verb, place) {
  const sentanceArray = [
    `Once upon a time, a ${adjective} ${noun} named [${person}] attempted to [${verb}] a giant [${noun}] in the middle of [${place}], but ended up causing a hilarious commotion instead`,
    `In a parallel universe, a [${adjective}] [${noun}] and a [${adjective}] [${person}] teamed up to [${verb}] a mischievous [${noun}] at the top of [${place}], leaving everyone in stitches.`,
    `At the annual [${place}] party, a [${adjective}] [${person}] brought a [${noun}] that could [${verb}] in seven different languages, turning the gathering into a wildly [${adjective}] celebration`,
  ];
  let random = Math.floor(Math.random() * sentanceArray.length);
  while (random == prevRandomNum) {
    random = Math.floor(Math.random() * sentanceArray.length);
  }
  prevRandomNum = random;
  story.textContent = sentanceArray[random];
}
