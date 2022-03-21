// @ts-check

function computerPlay() {
  const plays = ["Rock", "Paper", "Scissors"];
  return plays[Math.floor(Math.random() * plays.length)].toLowerCase();
}

function tie() {
  document.querySelector("#player-icon").classList.remove("bg-purple-800");
  document.querySelector("#computer-icon").classList.remove("bg-purple-800");
  document.querySelector("#result").textContent = "It's a tie!";
}

function lose() {
  const prevScore = parseInt(document.querySelector("#computer-score").textContent);
  document.querySelector("#computer-score").textContent = (prevScore + 1).toString();
  document.querySelector("#player-icon").classList.remove("bg-purple-800");
  document.querySelector("#computer-icon").classList.add("bg-purple-800");
  document.querySelector("#result").textContent = "You lose!";
}

function win() {
  const prevScore = parseInt(document.querySelector("#player-score").textContent);
  document.querySelector("#player-score").textContent = (prevScore + 1).toString();
  document.querySelector("#player-icon").classList.add("bg-purple-800");
  document.querySelector("#computer-icon").classList.remove("bg-purple-800");
  document.querySelector("#result").textContent = "You win!";
}

function updateEmoji(playerSelection, computerSelection) {
  const playerEmoji = document.querySelector("#player-icon");
  if (playerSelection === "rock") {
    playerEmoji.textContent = "✊";
  } else if (playerSelection === "paper") {
    playerEmoji.textContent = "✋";
  } else {
    playerEmoji.textContent = "✌";
  }

  const computerEmoji = document.querySelector("#computer-icon");
  if (computerSelection === "rock") {
    computerEmoji.textContent = "✊";
  } else if (computerSelection === "paper") {
    computerEmoji.textContent = "✋";
  } else {
    computerEmoji.textContent = "✌";
  }
}

function playRound(playerSelection, computerSelection) {
  round += 1;
  document.querySelector("#round").textContent = round.toString();
  updateEmoji(playerSelection, computerSelection);

  if (playerSelection === computerSelection) {
    tie();
  } else if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      win();
    }

    if (computerSelection === "paper") {
      lose();
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      lose();
    }

    if (computerSelection === "rock") {
      win();
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      win();
    }

    if (computerSelection === "rock") {
      lose();
    }
  }
}

document.querySelector("#player-rock").addEventListener("click", () => {
  playRound("rock", computerPlay());
});
document.querySelector("#player-paper").addEventListener("click", () => {
  playRound("paper", computerPlay());
});
document.querySelector("#player-scissors").addEventListener("click", () => {
  playRound("scissors", computerPlay());
});

let round = 0;
