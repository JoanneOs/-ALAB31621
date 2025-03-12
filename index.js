// Get the start button and message area from the HTML
const gameButton = document.getElementById("startGame");
const messageArea = document.getElementById("gameResult");

// Function to run the guessing game
function playGame() {

    //const randomNumber = Math.floor(Math.random()); wrong the guessing number allways 0, becaues its decimal , will mutyplying it by 10
    const randomNumber = Math.floor(Math.random()*10);
    console.log("randomnumve= "+randomNumber);
  // Pick a random number between 1 and 10
  //const randomNumber = Math.floor(Math.random() * 10) + 1;
  //const randomNumber = 4; //we can make the guessing number constant as 4 for example
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
