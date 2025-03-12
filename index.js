// Get the start button and message area from the HTML
const gameButton = document.getElementById("startGame");
const messageArea = document.getElementById("gameResult");

// Function to run the guessing game
function playGame() {
  // Pick a random number between 1 and 10
  const randomNumber = Math.floor(Math.random() * 10) + 1;

  // Prompt the user to make a guess
  const userGuess = parseInt(prompt("Pick a number between 1 and 10:"), 10);

  // Compare the guess with the random number
  if (userGuess === randomNumber) {
    messageArea.textContent = `Congratulations! The number was ${randomNumber}.`;
  } else {
    messageArea.textContent = `Oops! The number was ${randomNumber}. Better luck next time!`;
  }
}

// Run the game when the button is clicked
gameButton.addEventListener("click", playGame);
