function getComputerChoice() {
    let randomNumber = (Math.random() * 100) + 1;
    let randomChoice;

    if (randomNumber < 100/3) {
        randomChoice = "Rock"
    } else if (randomNumber < 100*2/3) {
        randomChoice = "Paper"
    } else {
        randomChoice = "Scissors"
    }
    
    return randomChoice;

}

console.log(getComputerChoice());