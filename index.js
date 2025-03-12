// Create the <h1> element
const header = document.createElement('h1');
header.textContent = 'Guess the Number Game!';
document.body.appendChild(header);

// Start buttons in JavaScript
let btn = document.createElement('button');
let btn2 = document.createElement('button');

// Set button texts
btn.innerText = 'Start Game 1';
btn2.innerText = 'Start Game 2';

// Assign IDs and append buttons
btn.id = 'startGame';
btn2.id = 'startGame2';
document.body.appendChild(btn);
document.body.appendChild(btn2);

// Create message areas for both games
let messageArea = document.createElement('div');
let messageArea2 = document.createElement('div');

// Assign IDs for later use
messageArea.id = 'gameResult';
messageArea2.id = 'gameResult2';

btn.style.marginBottom = '20px';  // Adds 20px of space below the first button


// Append the message areas to the body
document.body.appendChild(messageArea);
document.body.appendChild(messageArea2);

// Function to run the guessing game for button 1
function playGame() {
    const randomNumber = Math.floor(Math.random() * 10);
    let userInput = prompt("Pick a number between 1 and 10:");
    let userGuess = Number(userInput);

    if (userGuess === randomNumber) {
        messageArea.textContent = `Congratulations! The number was ${randomNumber}.`;
    } else {
        alert(`Oops! The number was ${randomNumber}. Better luck next time!`);
        setTimeout(function() {
            alert("You can try again.");
        }, 2000);
    }
}

// Function to run the guessing game for button 2
function playGame2() {
    const randomNumber2 = Math.floor(Math.random() * 10+10) ;
    let userInput2 = prompt("Pick a number between 10 and 20 ");
    let userGuess2 = Number(userInput2);

    if (userGuess2 === randomNumber2) {
        messageArea2.textContent = `Congratulations! The number was ${randomNumber2}.`;
    } else {
        alert(`Oops! The number was ${randomNumber2}. Better luck next time!`);
        setTimeout(function() {
            alert("You can try again.");
        }, 2000);
    }
}

// Run the games when the buttons are clicked
btn.onclick = playGame;
btn2.onclick = playGame2;
