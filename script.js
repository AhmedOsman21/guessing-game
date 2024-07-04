'use strict';

// Get elements
const guessElement = document.querySelector(".guess");
const checkButton = document.querySelector(".check");
const messageElement = document.querySelector(".message");
const numberElement = document.querySelector(".number");
const scoreElement = document.querySelector(".score");
const highScoreElement = document.querySelector(".highscore");
const againButton = document.querySelector(".again");
// Define variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highestScore = 0;

// Displaying game messages
const displayMessage = function (message) {
    messageElement.textContent = message;
}

const calculator = checkButton.addEventListener('click', function () {
    const guess = Number(guessElement.value);
    // When guess is correct
    if (guess === secretNumber) {
        displayMessage("🎉 Correct Number!");
        numberElement.textContent = guess; // Display the secret number 
        // Change styles
        document.body.style.backgroundColor = "#60b347";
        numberElement.style.width = "30rem";
        guessElement.readOnly = true; // Stop accepting guesses
        if (score > highestScore) highestScore = score; // Check the highest score
    } else if (!guess) { 
        displayMessage("👀 No number!");
    } else {
        if (guess > secretNumber) {
            displayMessage("📈 Too high!");
        } else if (guess < secretNumber) {
            displayMessage("📉 Too low!");
        }
        // Calculate score
        if (score > 1) {
            score--;
            
            // Losing the game
        } else {
            score = 0;
            displayMessage("💥 You lost the game!");
        }
    }

    // Display the calculated score
    scoreElement.textContent = score;

    // Display the highest score
    highScoreElement.textContent = highestScore;
});

// Start a New Game
againButton.addEventListener("click", function () {
    // Restore score
    score = 20; 
    scoreElement.textContent = score;
    // Reintialize a secret number
    secretNumber = Math.trunc(Math.random() * 20) + 1; 
    // Reset input field
    guessElement.value = ""; 
    guessElement.readOnly = false; 
    // Resetting elements text
    messageElement.textContent = 'Start guessing...'; // Reset Message
    numberElement.textContent = "?";
    // Restore styling
    document.body.style.backgroundColor = "#222"; 
    numberElement.style.width = "15rem";
});