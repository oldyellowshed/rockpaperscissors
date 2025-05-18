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
    let humanChoice = prompt('What will you choose?')   

    if(humanChoice.toLowerCase() == 'rock') {
    return 'rock'
    } else if (humanChoice.toLowerCase() == 'paper') {
    return 'paper'
    } else if (humanChoice.toLowerCase() == 'scissors') {
    return 'scissors'
    } else {
    console.log("No input was chosen")
    }
}

console.log(getHumanChoice())
