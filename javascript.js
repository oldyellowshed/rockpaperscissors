function getComputerChoice() {
    let getNumber = Math.floor(Math.random() * 3); 
    if (getNumber == 0) {
    return 'Rock';
    } else if (getNumber == 1) {
    return 'Paper';
    } else {
    return'Scissors';
    }
}

function getHumanChoice () {
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




