// @ts-check
function computerPlay() {
  const plays = ['Rock', 'Paper', 'Scissors'];
  return plays[Math.floor(Math.random() * plays.length)].toLowerCase();
}


function tie() {
  document.querySelector('#player-icon').classList.remove('bg-purple-800');
  document.querySelector('#computer-icon').classList.remove('bg-purple-800');
  document.querySelector('#result').textContent = "It's a tie!";
}


function lose() {
  computerScore += 1;
  document.querySelector('#computer-score').textContent = computerScore.toString();
  document.querySelector('#player-icon').classList.remove('bg-purple-800');
  document.querySelector('#computer-icon').classList.add('bg-purple-800');
  setTimeout(() => {
    document.querySelector('#computer-icon').classList.remove('bg-purple-800');
  }, 1000);
  document.querySelector('#result').textContent = 'You lose!';
}


function win() {
  playerScore += 1;
  document.querySelector('#player-score').textContent = playerScore.toString();
  document.querySelector('#player-icon').classList.add('bg-purple-800');
  setTimeout(() => {
    document.querySelector('#player-icon').classList.remove('bg-purple-800');
  }, 1000);
  document.querySelector('#computer-icon').classList.remove('bg-purple-800');
  document.querySelector('#result').textContent = 'You win!';
}


function updateEmoji(playerSelection, computerSelection) {
  const playerEmoji = document.querySelector('#player-icon');
  if (playerSelection === 'rock') {
    playerEmoji.textContent = '✊';
  } else if (playerSelection === 'paper') {
    playerEmoji.textContent = '✋';
  } else {
    playerEmoji.textContent = '✌️';
  }

  const computerEmoji = document.querySelector('#computer-icon');
  if (computerSelection === 'rock') {
    computerEmoji.textContent = '✊';
  } else if (computerSelection === 'paper') {
    computerEmoji.textContent = '✋';
  } else {
    computerEmoji.textContent = '✌️';
  }
}


function winner() {
  if (playerScore > computerScore) {
    document.querySelector('#modal-title').textContent = '🙅 You win the battle!';
  } else {
    document.querySelector('#modal-title').textContent = '🤖 You have been defeated!';
  }
  setTimeout(() => {
    document.querySelector('#modal').classList.remove('hidden');
  }, 300);
}


function playRound(playerSelection, computerSelection) {
  if (computerScore < 5 && playerScore < 5) {
    round += 1;
    document.querySelector('#round').textContent = round.toString();

    updateEmoji(playerSelection, computerSelection);

    if (playerSelection === computerSelection) {
      tie();
    } else if (playerSelection === 'rock') {
      if (computerSelection === 'scissors') {
        win();
      }

      if (computerSelection === 'paper') {
        lose();
      }
    } else if (playerSelection === 'paper') {
      if (computerSelection === 'scissors') {
        lose();
      }

      if (computerSelection === 'rock') {
        win();
      }
    } else if (playerSelection === 'scissors') {
      if (computerSelection === 'paper') {
        win();
      }

      if (computerSelection === 'rock') {
        lose();
      }
    }
  }

  if (computerScore >= 5 || playerScore >= 5) {
    winner();
  }
}


function resetGame() {
  round = 0;
  computerScore = 0;
  playerScore = 0;
  document.querySelector('#round').textContent = round.toString();
  document.querySelector('#player-score').textContent = playerScore.toString();
  document.querySelector('#computer-score').textContent = computerScore.toString();
  document.querySelector('#modal').classList.add('hidden');
}


document.querySelector('#player-rock').addEventListener('click', () => {
  playRound('rock', computerPlay());
});
document.querySelector('#player-paper').addEventListener('click', () => {
  playRound('paper', computerPlay());
});
document.querySelector('#player-scissors').addEventListener('click', () => {
  playRound('scissors', computerPlay());
});
document.querySelector('#play_again').addEventListener('click', () => {
  resetGame();
});


// Global vars
let round = 0;
let computerScore = 0;
let playerScore = 0;
