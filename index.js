let getComputerChoice = () => {
    let numberOfChoices = 3;
    let [rock, paper, scissor] = [0,1,2]
    let randomChoice = Math.floor(Math.random() * numberOfChoices);
    switch (randomChoice) {
        case rock:
            return "Rock";
        case paper:
            return "Paper";
        case scissor:
        default:
            return "Scissor";
    }
}

let playRound = (playerSelection, computerSelection) => {
    // make parameters case-insensitive
    playerSelection=playerSelection.toLowerCase();
    computerSelection=computerSelection.toLowerCase();

    if (playerSelection === computerSelection) return `Tie`;
    else if (
        (playerSelection === "rock" && computerSelection === "scissor") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissor" && computerSelection === "paper")
        ) {
            return `Winner`;
        }
    else return `Loser`;
}

let game = () => {
    let responseDir = {"a" : "rock", "b": "paper", "c": "scissor"}
    let [playerScore, computerScore, i] = [0,0,0];
    let playerAnswer, computerAnswer, winner;
    const numberOfRounds = 5;
    
    while (i < numberOfRounds) {
        playerAnswer = window.prompt("Please select an option, A) Rock B) Paper C) Scissor\n*Please Type A, B or C. Any other option will become void").toLocaleLowerCase();
        if ((playerAnswer === "a") || (playerAnswer === "b") || (playerAnswer === "c")) {
            computerAnswer = getComputerChoice();
            winner = playRound(responseDir[playerAnswer], computerAnswer);
            if (winner == 'Winner') playerScore++;
            else if (winner == 'Loser') computerScore++;
            i++;
        }
    }
    if (playerScore == computerScore) return `There is a tie!`;
    else if (playerScore > computerScore) return `Player is the winner`;
    else return `Computer is the winner`;
}