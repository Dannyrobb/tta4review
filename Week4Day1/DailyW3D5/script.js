let userInput;

do {
  userInput = prompt("Please enter a number");

  if (userInput !== null) {
    const parsedInput = parseFloat(userInput);

    if (!isNaN(parsedInput)) {
      if (parsedInput < 10) {
        console.log("Too small, please aim higher");
      } else {
        console.log("It's ok... :)");
      }
    } else {
      console.log("Invalid input, please enter a number");
    }
  } else {
    console.log("User clicked Cancel. Exiting the loop.");
  }
} while (userInput !== null && (isNaN(parseFloat(userInput)) || parseFloat(userInput) < 10));
