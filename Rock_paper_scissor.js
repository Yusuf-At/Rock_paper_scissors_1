const choice = [
    "rock",
    "paper",
    "scissor"
]

function getComputerChoice() {
    randomIndex = Math.floor(Math.random() * choice.length);
    return choice[randomIndex];
}

function plySelection() {
    plyselection = prompt("Choose: paper, rock, or scissor");
    return plyselection.toLowerCase();
}

const playerSelection = plySelection();
const computerSelection = getComputerChoice();

console.log(`com = ${computerSelection}`)
console.log(`ply = ${playerSelection}`)

function playRound(playerSelection, computerSelection) {
    if (computerSelection === "paper" && playerSelection === "rock" ) {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else if (computerSelection === "scissor" && playerSelection === "paper" ) {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else if (computerSelection === "rock" && playerSelection === "scissor" ) {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else if (computerSelection === playerSelection) {
        return `Draw! ${computerSelection} cannot beat ${playerSelection}`;
    } else if (playerSelection != "rock" || playerSelection != "paper" || playerSelection != "scissor") {
        return `Try again, You enter ${playerSelection}`;
    } else {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
  }

console.log(playRound(playerSelection, computerSelection))