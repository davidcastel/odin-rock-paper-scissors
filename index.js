let getComputerChoice = () => {
    let randomChoice = Math.floor(Math.random() * 3);
    switch (randomChoice) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
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
    
    while (i < 5) {
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