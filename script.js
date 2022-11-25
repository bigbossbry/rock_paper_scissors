//Make the computer choose a hand
function getComputerChoice() {
    let number = Math.floor((Math.random() * 3));
    if (number == 0) {
        return computerSelection = "Rock";
    } else if (number == 1) {
        return computerSelection = "Paper";
    } else {
        return computerSelection = "Scissors";
    }
}

// Player selection function
let playerSelection;
const choices = document.querySelectorAll('.hand');

function selectHand(clickTarget) {
    playerSelection = clickTarget.target.id;
    getComputerChoice();
    callPlayRound();
}

// div references
const roundResult = document.querySelector('.round-result');
const runningScore = document.querySelector('.running-score');
const gameWinner = document.querySelector('.game-winner');

// Gameplay function
let playerScore=0;
let computerScore=0;
function playRound(playerSelection, computerSelection) {
    switch (true) {

        case (playerSelection == "Rock" && computerSelection == "Scissors" || playerSelection == "Scissors" && computerSelection == "Paper" || playerSelection == "Paper" && computerSelection == "Rock"):
            ++playerScore
            roundResult.textContent = `Player wins. You chose ${playerSelection}, and the computer chose ${computerSelection}.`;
            runningScore.textContent = `The score is ${playerScore} to ${computerScore}`;
            if (playerScore == 5) {
                gameWinner.textContent = "You win the game!";
            }
            return;

        case (playerSelection === computerSelection):
            roundResult.textContent = `It's a tie. You and the computer both chose ${playerSelection}`;
            runningScore.textContent = `The score is ${playerScore} to ${computerScore}`;
            break;

        default:
            ++computerScore
            roundResult.textContent = `Computer wins. You chose ${playerSelection}, and the computer chose ${computerSelection}.`;
            runningScore.textContent = `The score is ${playerScore} to ${computerScore}`;
            if (computerScore == 5) {
                gameWinner.textContent = "The computer wins the game.";
            }
            return;
    }
}

function callPlayRound() {
    playRound(playerSelection, computerSelection);
}

// Buttons functionality
choices.forEach((button) => {
    button.addEventListener('click', selectHand)
})
