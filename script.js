// Computer choices Rock, Paper and Scissors with 1/3 chances each
function getComputerChoice() {
    let randomNumber = (Math.random() * 100) + 1;
    let randomChoice;

    if (randomNumber < 100/3) {
        randomChoice = "rock"
    } else if (randomNumber < 100*2/3) {
        randomChoice = "paper"
    } else {
        randomChoice = "scissors"
    }
    
    return randomChoice;
}

// Variables that will save player and computer selection
let playerSelection;
let computerSelection;

// Variables that will track the results of each Round, starting the game at 0
let playerWins = 0;
let computerWins = 0;
let draws = 0;

// Variable (string) that will announce the winner
let winner;

// Round winner (or draw) is decided according to playerSelection and computerSelection
// Results are tracked into their respective variables
function playRound(playerSelection, computerSelection) {
    
    if (playerSelection.toLowerCase() === computerSelection) {
        draws ++;
        console.log(`Draw!`);
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
        playerWins ++;
        console.log(`You Win! Rock beats Scissors!`);
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
        playerWins ++;
        console.log(`You Win! Paper beats Rock!`);
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
        playerWins ++;
        console.log(`You Win! Scissors beats Paper!`);        
    } else {
        computerWins ++;
        console.log(`You Lost!`)
    }
}

// Game plays for 5 Rounds
function game() {
    for (let i = 0; i < 5; i++) {
        // Computer makes a choice
        computerSelection = getComputerChoice()
        // Player makes a choice via prompt
        playerSelection = prompt("Rock, Paper or Scissors?","Rock")
        // Round plays
        playRound(playerSelection, computerSelection)
    }

    // Declaring the Game Winner after 5 Rounds
    if (playerWins > computerWins) {
        winner = "Player Won the Game after 5 Rounds!!"
    } else if (computerWins > playerWins) {
        winner = "Computer Won after 5 Rounds!!"
    } else {
        winner = "Draw after 5 Rounds!!!!"
    }
}

// Play Game!
game()

// Show the Results!

console.log(`Player won ${playerWins} time(s)!`);
console.log(`Computer won ${computerWins} time(s)`);
console.log(`There were ${draws} draw(s)!`);
console.log(winner);