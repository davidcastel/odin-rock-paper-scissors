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
    let [playerScore, computerScore] = [0,0];
    let playerAnswer, computerAnswer, winner;
    
    for (let i = 0; i < 5; i++) {
        playerAnswer = window.prompt("Please select an option, A) Rock B) Paper C) Scissor\n*Please Type A, B or C. Any other option will become void").toLocaleLowerCase();
        if ((playerAnswer === "a") || (playerAnswer === "b") || (playerAnswer === "c")) {
            computerAnswer = getComputerChoice();
            winner = playRound(responseDir[playerAnswer], computerAnswer);
            switch(winner) {
                case `Winner`:
                    playerScore++;
                    break;
                case `Loser`:
                    computerScore++;
                    break;
                default:
                    break;
            }
        }
        else i--;
    }
    if (playerScore == computerScore) return `There is a tie!`;
    else if (playerScore > computerScore) return `Player is the winner`;
    else return `Computer is the winner`;
}