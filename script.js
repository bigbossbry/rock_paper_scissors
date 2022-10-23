function getComputerChoice() {
    let number = Math.floor((Math.random() * 3));
    if (number == 0) {
        return computerSelection = "rock";
    } else if (number == 1) {
        return computerSelection = "paper";
    } else {
        return computerSelection = "scissors";
    }
}

let playerSelection = prompt("Select your choice.", "");

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
        case (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "rock"):
            console.log(`Player wins. ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}. The score is ${playerScore} to ${computerScore}`);
            return ++playerScore;
            break;

        case (playerSelection === computerSelection):
            console.log(`It's a tie. You and the computer both chose ${playerSelection}`);
            break;

        default:
            console.log(`You lose. ${capitalize(computerSelection)} beats ${capitalize(playerSelection)} The score is ${playerScore} to ${computerScore}`);
            return ++computerScore;
    }
}

function game() {
    playerScore = 0;
    computerScore = 0;

    for (playerScore=0; playerScore < 3 && computerScore < 3;) {
        playRound(prompt(playerSelection), getComputerChoice());
        if (playerScore == 3) {
            return `The Player won.`;
            break;
        } else if (computerScore == 3 ) {
            return `The Computer won.`;
            break;
        }
     }
}