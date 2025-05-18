function getComputerChoice() {
    let getNumber = Math.floor(Math.random() * 3); 
    if (getNumber == 0) {
    return 'rock';
    } else if (getNumber == 1) {
    return 'paper';
    } else {
    return'scissors';
    }
}

function getHumanChoice() {
    let getChoice = prompt('What will you choose?')   

    if(getChoice.toLowerCase() == 'rock') {
    return 'rock'
    } else if (getChoice.toLowerCase() == 'paper') {
    return 'paper'
    } else if (getChoice.toLowerCase() == 'scissors') {
    return 'scissors'
    } else {
    console.log("No input was chosen")
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice == 'rock' && computerChoice == 'paper') {
    console.log('You lose paper wins')
    ++computerScore
    } else if (humanChoice == 'rock' && computerChoice == 'rock') {
    console.log('DRAW')
    } else if (humanChoice == 'rock' && computerChoice == 'scissors') {
    console.log('You win, rock wins')
    ++humanScore
    }

     if (humanChoice == 'paper' && computerChoice == 'paper') {
    console.log('DRAW')
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
    console.log('You win, paper beats rock')
    ++humanScore
    } else if (humanChoice == 'paper' && computerChoice == 'scissors') {
    console.log('you lose scissors beat paper')
    ++computerScore
    }

    if (humanChoice == 'scissors' && computerChoice == 'paper') {
    console.log('You beat him, scissors shreds paper')
    ++humanScore
    } else if (humanChoice == 'scissors' && computerChoice == 'rock') {
    console.log('You lose, rock destroys scissors')
    ++computerScore
    } else if (humanChoice == 'scissors' && computerChoice == 'scissors') {
    console.log('draw, i wanna see you two scissor')
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
