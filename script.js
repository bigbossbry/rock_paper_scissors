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
let i=0;
let c=0;

function playRound(playerSelection, computerSelection) {
    switch (true) {
        case (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "rock"):
            console.log(`Player wins. ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}. The score is ${i} to ${c}`);
            return ++i;
            break;

        case (playerSelection === computerSelection):
            console.log(`It's a tie. You and the computer both chose ${playerSelection}`);
            break;

        default:
            console.log(`You lose. ${capitalize(computerSelection)} beats ${capitalize(playerSelection)} The score is ${i} to ${c}`);
            return ++c;
    }
}

function game() {
    i = 0;
    c = 0;

    for (i=0; i < 3 && c < 3;) {
        playRound(prompt(playerSelection), getComputerChoice());
        if (i == 3) {
            return `The Player won.`;
            break;
        } else if (c == 3 ) {
            return `The Computer won.`;
            break;
        }
     }
}