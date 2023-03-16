let getComputerChoice = () => {
    const numberOfChoices = 3;
    const [rock, paper, scissor] = [0,1,2]

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
        (isSelectedOptionRock(playerSelection) && isSelectedOptionScissor(computerSelection)) ||
        (isSelectedOptionPaper(playerSelection) && isSelectedOptionRock(computerSelection)) ||
        (isSelectedOptionScissor(playerSelection) && isSelectedOptionPaper(computerSelection))
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
        if (doesPlayerAnswerMatchValidResponse(playerAnswer)) {
            computerAnswer = getComputerChoice();
            winner = playRound(responseDir[playerAnswer], computerAnswer);
            if (isTheRoundWinnerPlayer(winner)) playerScore++;
            else if (isTheRoundWinnerComputer(winner)) computerScore++;
            i++;
        }
    }
    if (playerScore == computerScore) return `There is a tie!`;
    else if (playerScore > computerScore) return `Player is the winner`;
    else return `Computer is the winner`;
}

console.log(game());

const isSelectedOptionRock = (selection) => { return selection === "rock";}

const isSelectedOptionPaper = (selection) => { return selection === "paper";}

const isSelectedOptionScissor = (selection) => { return selection === "scissor";}

const isTheRoundWinnerComputer = (winner) => { return winner == 'Loser'; }

const isTheRoundWinnerPlayer = (winner) => { return winner == 'Winner'; }

const doesPlayerAnswerMatchValidResponse = (playerAnswer) => { 
    return (playerAnswer === "a") || (playerAnswer === "b") || (playerAnswer === "c");
}

