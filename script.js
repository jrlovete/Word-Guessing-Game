// List of possible words
const words = ["apple", "banana", "grape", "orange", "mango", "peach"];
let secretWord, attempts;

// Initialize the game
function startGame() {
    secretWord = words[Math.floor(Math.random() * words.length)];
    attempts = 5;
    
    document.getElementById("hint").textContent = `Hint: The word starts with '${secretWord.charAt(0).toUpperCase()}'`;
    document.getElementById("message").textContent = "";
    document.getElementById("guessInput").value = "";
    document.getElementById("guessInput").disabled = false;
    document.getElementById("restartBtn").style.display = "none";
    document.body.style.backgroundColor = ""; // Reset background color
}

// Check the user's guess
function checkGuess() {
    let userGuess = document.getElementById("guessInput").value.trim().toLowerCase();
    let messageElement = document.getElementById("message");

    if (userGuess === secretWord) {
        messageElement.textContent = `🎉 Congratulations! You guessed the word: ${secretWord}`;
        messageElement.style.color = "green";
        document.body.style.backgroundColor = "lightgreen";
        endGame();
    } else {
        attempts--;
        if (attempts > 0) {
            messageElement.textContent = `❌ Incorrect! You have ${attempts} attempts left.`;
            messageElement.style.color = "red";
        } else {
            messageElement.textContent = `💀 Game Over! The word was: ${secretWord}`;
            messageElement.style.color = "black";
            document.body.style.backgroundColor = "lightcoral";
            endGame();
        }
    }
}

// Disable input and show restart button
function endGame() {
    document.getElementById("guessInput").disabled = true;
    document.getElementById("restartBtn").style.display = "inline-block";
}

// Restart the game
function restartGame() {
    startGame();
}

// Allow Enter key to submit guess
document.getElementById("guessInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        checkGuess();
    }
});

// Start the game on page load
startGame();
