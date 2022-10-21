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

let playerSelection = prompt("Select your choice.", "");

function playround(playerSelection, computerSelection) {

}