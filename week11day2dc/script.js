const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`;

function toJs() {
  return new Promise((res, rej) => {
    let newObj = JSON.parse(morse);
    if (!newObj) {
      rej("Sorry problem");
    } else {
      res(newObj);
    }
  });
}

function toMorse(obj) {
  return new Promise((res, rej) => {
    console.log(obj);
    const userAnswer = prompt("Give me a word");
    const arrayAnswer = [...userAnswer];
    let finalAnswer = arrayAnswer.map((element) => {
      if (element.toLowerCase() in obj) {
        return obj[element.toLowerCase()];
      } else {
        rej("Does not exist in morse ");
      }
    });
    res([finalAnswer, userAnswer]);
  });
}

function joinWords(morseTranslation) {
  const body = document.body;
  const p = document.createElement("p");
  p.innerText = `
      ${morseTranslation[1]} gives you:
      ${morseTranslation[0].join(` 
      `)}
      `;
  body.append(p);
}

toJs()
  .then((data) => {
    return toMorse(data);
  })
  .then((arr) => {
    joinWords(arr);
  })
  .catch((e) => {
    console.log(e);
  });
