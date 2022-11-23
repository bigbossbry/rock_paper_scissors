//Computer selection
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

// Capitalize the first letter
function capitalize(word1) {
    let lower = word1.toLowerCase();
    let letter = lower.substr(0,1);
    let wordLength = word1.length;
    return letter.toUpperCase() + lower.slice(1,wordLength);
}

let playerScore=0;
let computerScore=0;

function playRound(playerSelection, computerSelection) {
    switch (true) {
        case (playerSelection == "Rock" && computerSelection == "Scissors" || playerSelection == "Scissors" && computerSelection == "Paper" || playerSelection == "Paper" && computerSelection == "Rock"):
            ++playerScore
            console.log(`Player wins. ${playerSelection} beats ${computerSelection}. The score is ${playerScore} to ${computerScore}`);
            return playerScore;

        case (playerSelection === computerSelection):
            console.log(`It's a tie. You and the computer both chose ${playerSelection}`);
            break;

        default:
            ++computerScore
            console.log(`You lose. ${computerSelection} beats ${playerSelection} The score is ${playerScore} to ${computerScore}`);
            return computerScore;
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


