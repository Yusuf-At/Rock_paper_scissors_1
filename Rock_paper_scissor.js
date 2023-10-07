const body = document.querySelector('body');
const buttonDiv = document.querySelector('#button');
const scoreTable = document.querySelector('#score');
const input = document.querySelectorAll('#plyChoice');
const selected = document.querySelector('#selected');
const result = document.querySelector('#result');


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

input.forEach(input =>
    input.addEventListener('click', play));

function play(e) {
    // save player selection
    const plySelection = e.target.value;
    console.log(plySelection);

    function game() {
        playerSelection = plySelection;
        computerSelection = getComputerChoice();
        console.log(`computer = ${computerSelection}`)
        console.log(`player = ${playerSelection}`)

        gameResult = playRound(playerSelection, computerSelection)
        console.log(`Your score = ${playerScore}`)
        console.log(`Computer score = ${compScore}`)
    }
    game()

    // create div for selected 
    selected.textContent = `Computer = ${computerSelection}, Player = ${playerSelection}`

    // scoreTable
    scoreTable.textContent = `computer = ${compScore}, player = ${playerScore}`

    // result message
    result.textContent = gameResult;

    // Final Message
    if (compScore === 5) {
        result.textContent = 'Game Over, You Lose'
        compScore = 0
        playerScore = 0

        // remove button
        while (buttonDiv.firstChild) {
            buttonDiv.removeChild(buttonDiv.firstChild)
        }

    } else if (playerScore === 5) {
        result.textContent = 'Game Over, You Win'
        compScore = 0
        playerScore = 0

        // remove button
        while (buttonDiv.firstChild) {
            buttonDiv.removeChild(buttonDiv.firstChild)
        }
    }
}

function playAgain() {

}