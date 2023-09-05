const choice = [
    "rock",
    "paper",
    "scissor"
]

playerScore = 0
compScore = 0

function getComputerChoice() {
    randomIndex = Math.floor(Math.random() * choice.length);
    return choice[randomIndex];
}

function plySelection() {
    plyselection = prompt("Choose: paper, rock, or scissor");
    return plyselection.toLowerCase();
}


function playRound(playerSelection, computerSelection) {
    if (computerSelection === "paper" && playerSelection === "rock" ) {
        compScore += 1;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else if (computerSelection === "scissor" && playerSelection === "paper" ) {
        compScore += 1;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else if (computerSelection === "rock" && playerSelection === "scissor" ) {
        compScore += 1;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else if (computerSelection === playerSelection) {
        return `Draw! ${computerSelection} cannot beat ${playerSelection}`;
    } else if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissor") {
        return `Try again, You enter ${playerSelection}`;
    } else {
        playerScore += 1;
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
  }

function game() {
    playerSelection = plySelection();
    computerSelection = getComputerChoice();
    console.log(`computer = ${computerSelection}`)
    console.log(`player = ${playerSelection}`)

    console.log(playRound(playerSelection, computerSelection)) 
    console.log(`Your score = ${playerScore}`)
    console.log(`Computer score = ${compScore}`)
}

console.log(game())
console.log(game())
console.log(game())
console.log(game())
console.log(game())