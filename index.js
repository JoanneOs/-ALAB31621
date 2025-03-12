// Get the start button and message area from the HTML
const gameButton = document.getElementById("startGame");
const messageArea = document.getElementById("gameResult");


//start button in js

let btn = document.createElement('button');
btn.innerText = 'Start Game';
document.body.appendChild(btn);

// Function to run the guessing game
function playGame() {

    //const randomNumber = Math.floor(Math.random()); wrong the guessing number allways 0, becaues its decimal , will mutyplying it by 10
    const randomNumber = Math.floor(Math.random()*10);
   // console.log("randomnumve= "+randomNumber);
  // Pick a random number between 1 and 10
  //const randomNumber = Math.floor(Math.random() * 10) + 1;
  //const randomNumber = 4; //we can make the guessing number constant as 4 for example
  // Prompt the user to make a guess
//   const userGuess = parseInt(prompt("Pick a number between 1 and 10:"), 10);

// Ask the user to pick a number and store it as a string
let userInput = prompt("Pick a number between 1 and 10:");
/*"This page says" in the prompt window comes from how the prompt() function works in the browser. By default, when you use prompt() to get user input, the browser automatically displays "This page says" to indicate that the message comes from the current webpage.
*/
// Convert the input to an integer using Number() instead of parseInt
let userGuess = Number(userInput);

  // Compare the guess with the random number
  if (userGuess === randomNumber) {
    messageArea.textContent = `Congratulations! The number was ${randomNumber}.`;
  } else {
   // messageArea.textContent = `Oops! The number was ${randomNumber}. Better luck next time!`;
   // messageArea.textContent = `you can try again!`;

   alert(`Oops! The number was ${randomNumber}. Better luck next time!`);

   // Use setTimeout to display the second message after 1 second (1000 milliseconds)
   setTimeout(function() {
     alert(" You can try again");
   }, 5000);
  }
}

// Run the game when the button is clicked
//gameButton.addEventListener("click", playGame);
gameButton.onclick = playGame;


