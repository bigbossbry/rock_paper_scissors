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


// Player selection functions
let playerSelection;

function selectRock () {
    playerSelection = "Rock";
}

function selectPaper () {
    playerSelection = "Paper";
}

function selectScissors () {
    playerSelection = "Scissors";
}

let playerScore=0;
let computerScore=0;

const roundResult = document.querySelector('.round-result');
const runningScore = document.querySelector('.running-score');
const gameWinner = document.querySelector('.game-winner');


function playRound(playerSelection, computerSelection) {
    switch (true) {

        case (playerSelection == "Rock" && computerSelection == "Scissors" || playerSelection == "Scissors" && computerSelection == "Paper" || playerSelection == "Paper" && computerSelection == "Rock"):
            ++playerScore
            roundResult.textContent = `Player wins. You chose ${playerSelection}, and the computer chose ${computerSelection}.`;
            runningScore.textContent = `The score is ${playerScore} to ${computerScore}`;
            console.log(`Player wins. ${playerSelection} beats ${computerSelection}. The score is ${playerScore} to ${computerScore}`);
            if (playerScore == 5) {
                gameWinner.textContent = "You win the game!";
            }
            return;

        case (playerSelection === computerSelection):
            roundResult.textContent = `It's a tie. You and the computer both chose ${playerSelection}`;
            runningScore.textContent = `The score is ${playerScore} to ${computerScore}`;
            console.log(`It's a tie. You and the computer both chose ${playerSelection}`);
            break;

        default:
            ++computerScore
            roundResult.textContent = `Computer wins. You chose ${playerSelection}, and the computer chose ${computerSelection}.`;
            runningScore.textContent = `The score is ${playerScore} to ${computerScore}`;
            console.log(`You lose. ${computerSelection} beats ${playerSelection} The score is ${playerScore} to ${computerScore}`);
            if (computerScore == 5) {
                gameWinner.textContent = "The computer wins the game.";
            }
            return;
    }
}

function playRoundRock() {
    selectRock();
    getComputerChoice();
    playRound(playerSelection, computerSelection);
}

function playRoundPaper() {
    selectPaper();
    getComputerChoice();
    playRound(playerSelection, computerSelection);
}

function playRoundScissors() {
    selectScissors();
    getComputerChoice();
    playRound(playerSelection, computerSelection);
}

/*
function game() {
    playerScore = 0;
    computerScore = 0;

    for (playerScore=0; playerScore < 3 && computerScore < 3;) {
        playRound(playerSelection, getComputerChoice());
        if (playerScore == 3) {
            return `The Player won.`;
        } else if (computerScore == 3 ) {
            return `The Computer won.`;
        }
     }
}*/

// Buttons functionality
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
rockButton.addEventListener('click', playRoundRock);
paperButton.addEventListener('click', playRoundPaper);
scissorsButton.addEventListener('click', playRoundScissors);


