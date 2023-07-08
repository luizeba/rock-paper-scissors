// Computer choices Rock, Paper and Scissors with 33.3333% chances each
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

// Player and Computer makes their selection; Player Choice is case insensitive
const playerSelection = "RoCk";
const computerSelection = getComputerChoice();

// playerWins, computerWins and draws will track the results of each Round
let playerWins = 0;
let computerWins = 0;
let draws = 0;

// Round winner (or draw!) is decided according to playerSelection and computerSelection
function playRound(playerSelection, computerSelection) {
    

    if (playerSelection.toLowerCase() === computerSelection) {
        draws ++;
        return `Draw!`;
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
        return `You Win! Rock beats Scissors!`;
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
        return `You Win! Paper beats Rock!`;
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
        return `You Win! Scissors beats Paper!`;        
    } else {
        return `You Lost!`
    }
}

console.log(computerSelection);

console.log(playRound(playerSelection,computerSelection));

console.log(draws);