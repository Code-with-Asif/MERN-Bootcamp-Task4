let randomNumber = Math.floor(Math.random() * 100) + 1;

let userGuesses = [];

let counter = 0;

// const displayText = document.getElementById("display");
// displayText.innerText = `Current Random Number is: ${randomNumber}`;

const handleSubmit = () => {
  const userInput = document.getElementById("user-number");
  if (userInput.value == "" || userInput.value == null) {
    alert("Enter integer  number");
    return;
  }
  const displayText = document.getElementById("display-text");
  const outputsPara = document.getElementsByClassName("outputs");

  // check if counter value exceeds 10, if yes, return, otherwise continue
  if (counter >= 10) {
    displayText.innerText = "Game Over. You are out of guesses.";

    // resetGame();
    return;
  }

  const userNumber = userInput.value;

  if (userNumber == randomNumber) {
    displayText.innerText = getDisplayText("success");
    displayText.className = "success";
  } else if (userNumber > randomNumber && userNumber < 101) {
    displayText.innerText = getDisplayText("greater");
    displayText.className = "greater";
  } else if (userNumber < 0 && userNumber > 101) {
    alert("please enter number between 1 to 100");
  } else if (userNumber < randomNumber && userNumber > 0) {
    displayText.innerText = getDisplayText("lower");
    displayText.className = "lower";
  } else {
    displayText.innerText = getDisplayText("corectNumber");
    displayText.className = "corectNumber";
  }

  // show user guessed numbers
  if (userInput.value >= 0 && userInput.value < 101) {
    userGuesses.push(userInput.value);
    outputsPara[0].innerText = userGuesses;

    // increment the counter value
    counter++;
  } else {
    alert("Please enter valid number");
  }

  // reset input field
  userInput.value = "";
};

const resetGame = () => {
  const userInput = document.getElementById("user-number");
  const outputsPara = document.getElementsByClassName("outputs");
  const displayText = document.getElementById("display-text");

  userInput.value = "";
  userGuesses = [];
  counter = 0;
  outputsPara[0].innerText = "";
  displayText.innerText = " ";
};
const getDisplayText = (result) => {
  switch (result) {
    case "success":
      return "Congratulations. You guessed the correct number";
    case "greater":
      return "Your guessed number is greater than the actual number. !Try Again";
    case "lower":
      return "Your guessed number is lower than the actual number. !Try Again";
    case "corectNumber":
      return "Please Enter number between 1 and 100";
    default:
      " opps! Your guessed number is out of the range.";
      break;
  }
};
