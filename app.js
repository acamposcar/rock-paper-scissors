// @ts-check

function computerPlay(){
    const plays = ['Rock', 'Paper', 'Scissors']
    return plays[Math.floor(Math.random() * plays.length)].toLowerCase();
}

function playerPlay(){
    return prompt('What is your selection?').toLowerCase();
}

function lose(playerSelection, computerSelection){
    return `You win. ${playerSelection} beats ${computerSelection} `;
}

function win(playerSelection, computerSelection){
    return `You win. ${playerSelection} beats ${computerSelection} `;
}

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === computerSelection) {
        return 'Draw';
    } else if (playerSelection === 'rock'){

        if (computerSelection === 'scissors') {
            return win(playerSelection, computerSelection)
        }

        if (computerSelection === 'paper'){
            return lose(playerSelection, computerSelection)
        }
        
    } else if (playerSelection === 'paper'){
        if (computerSelection === 'scissors') {
            return win(playerSelection, computerSelection)
        }

        if (computerSelection === 'rock'){
            return lose(playerSelection, computerSelection)
        }
    } else if (playerSelection === 'scissors'){
        if (computerSelection === 'paper') {
            return lose(playerSelection, computerSelection)
        }

        if (computerSelection === 'rock'){
            return win(playerSelection, computerSelection)
        }
    } else {
        return 'Invalid play'

    }
}

function game(){
    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerPlay(), computerPlay()));
    }
}