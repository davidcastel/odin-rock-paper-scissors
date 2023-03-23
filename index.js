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

let _game = () => {
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

// Global Variables
const btns = document.querySelectorAll('button[id]');
const playerTab = document.querySelector('span[id="player"]');
const computerTab = document.querySelector('span[id="computer"]');

let winner = "";
let [playerScore, computerScore] = [0, 0];
let isGameFinished = false;

btns.forEach(btn => btn.addEventListener('click', () => {
    let playerOption = btn.id;

    winner = playRound(playerOption, getComputerChoice());
    if (isTheRoundWinnerPlayer(winner)) {
        playerScore++;
        playerTab.textContent = playerScore;
        if (playerScore == 5 || playerScore % 5 == 0) isGameFinished = true;
    }
    else if (isTheRoundWinnerComputer(winner)) {
        computerScore++;
        computerTab.textContent = computerScore;
        if (computerScore == 5 || computerScore % 5 == 0) isGameFinished = true;
    }

    if (isGameFinished && (playerScore % 5 === 0 || computerScore % 5 === 0)) {
        const announcement = document.createElement('dialog');
        const main = document.querySelector('main');

        isGameFinished = false;

        btns.forEach(btn => btn.setAttribute('disabled', ''));
        
        // style
        announcement.style.border = 'solid';
        announcement.style.borderColor = 'black';
        announcement.style.borderWidth = '2px';

        // Set attribute open
        announcement.setAttribute("open", "");

        // content
        let msg = `${playerScore > computerScore ? 'You are' :  'The Computer is'} the Winner! ${playerScore > computerScore ? 'The Computer' :  'You '} Losse`;
        announcement.textContent = msg;

        const cancel = document.createElement('button');
        cancel.textContent = "Cancel";

        const accept = document.createElement('button');
        accept.textContent = "Accept";

        announcement.appendChild(cancel);
        announcement.appendChild(accept);
        main.appendChild(announcement);

        cancel.addEventListener('click', () => {
            announcement.removeAttribute('open');
            btns.forEach(btn => btn.removeAttribute('disabled'));
        });

        accept.addEventListener('click', () => {
            btns.forEach(btn => btn.removeAttribute('disabled'));
            playerScore = 0;
            computerScore = 0;
            playerTab.textContent = playerScore;
            computerTab.textContent = computerScore;
            announcement.removeAttribute('open');
        });
    }
}));


// *** Private Methods ***
const isSelectedOptionRock = (selection) => { return selection === "rock";}

const isSelectedOptionPaper = (selection) => { return selection === "paper";}

const isSelectedOptionScissor = (selection) => { return selection === "scissor";}

const isTheRoundWinnerComputer = (winner) => { return winner == 'Loser'; }

const isTheRoundWinnerPlayer = (winner) => { return winner == 'Winner'; }

const doesPlayerAnswerMatchValidResponse = (playerAnswer) => { 
    return (playerAnswer === "a") || (playerAnswer === "b") || (playerAnswer === "c");
}

