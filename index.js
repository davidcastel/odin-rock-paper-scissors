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

    if (playerSelection === computerSelection) return `Tie! ${computerSelection} does not beat ${playerSelection}. Play Again`;
    else if (
        (playerSelection === "rock" && computerSelection === "scissor") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissor" && computerSelection === "paper")
        ) {
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        }
    else return `You Lose! ${computerSelection} beats ${playerSelection}`;
}