function getComputerChoice() {
    let number = Math.floor((Math.random() * 3));
    if (number == 0) {
        return computerSelection = "rock";
    } else if (number == 1) {
        return computerSelection = "paper";
    } else {
        return computerSelection = "scissors";
    }
};

let playerSelection = prompt("Select your choice.", "");

function capitalize(word1) {
    let lower = word1.toLowerCase();
    let letter = lower.substr(0,1);
    let wordLength = word1.length;
    return letter.toUpperCase() + lower.slice(1,wordLength);
}

function playRound(playerSelection, computerSelection) {
    switch (true) {
        case (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "rock"):
            console.log(`Player wins. ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`);
            break;

        case (playerSelection === computerSelection):
            console.log(`It's a tie. You and the computer both chose ${playerSelection}`)
            break;

        default:
            console.log(`You lose. ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`)
    }
}