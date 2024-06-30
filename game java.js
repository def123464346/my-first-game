// JavaScript code for the clicker game

let score = 0;
let timeLeft = 10;
let timer;

const clickButton = document.getElementById('clickButton');
const scoreDisplay = document.getElementById('score');
const timeLeftDisplay = document.getElementById('timeLeft');

clickButton.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = score;
});

function startGame() {
    score = 0;
    timeLeft = 10;
    scoreDisplay.textContent = score;
    timeLeftDisplay.textContent = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        timeLeftDisplay.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(timer);
            alert(`Game over! Your score is ${score}.`);
        }
    }, 1000);
}

// Start the game when the button is clicked
clickButton.addEventListener('click', startGame);
