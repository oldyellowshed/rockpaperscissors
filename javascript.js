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

console.log(getComputerChoice())