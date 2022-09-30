const choices = document.querySelectorAll(".choices");
const score = document.getElementById("score");
const result = document.getElementById("result");
const restart = document.getElementById("restart");
const modal = document.querySelector(".modal");
const scoreboard = {
  player: 0,
  computer: 0,
};

choices.forEach((choice) => choice.addEventListener("click", play));
window.addEventListener("click", clearModal);
restart.addEventListener("click", restartGame);

function play(e) {
  restart.style.display = "inline-block";
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);
  showWinner(winner, computerChoice);
}

function getRandomItemInArray(list) {
  return list[Math.floor((Math.random() * list.length))];
}

function getComputerChoice() {
  const computerChoices = ['rock', 'paper', 'scissors']
  return getRandomItemInArray(computerChoices);
}

function getWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "draw";
  } else if (playerChoice === "rock") {
    if (c === "paper") {
      return "computer";
    } else {
      return "player";
    }
  } else if (playerChoice === "paper") {
    if (computerChoice === "scissors") {
      return "computer";
    } else {
      return "player";
    }
  } else if (playerChoice === "scissors") {
    if (computerChoice === "rock") {
      return "computer";
    } else {
      return "player";
    }
  }
}

function showWinner(winner, computerChoice) {

  switch (winner) {
    case ('player'):
      message = "You Win"
      colorClassName = "text-win"
      scoreboard.player++;
      break;
    case ('computer'):
      message = "You Lose"
      colorClassName = "text-lose"
      scoreboard.computer++;
      break;
    default:
      message = "It's a Draw"
      colorClassName = ""
      scoreboard.player++;
      break;
  }

  result.innerHTML = `
  <h1 class="${colorClassName}">${message}</h1>
  <i class="fas fa-hand-${computerChoice} fa-10x"></i>
  <p>Computer chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
    }</strong></p>
  `;

  displayScores()

  modal.style.display = "block";

}

function setPlayerScore(score) {
  scoreboard.player = score;
}
function setComputerScore(score) {
  scoreboard.computer = score;
}

function displayScores() {
  score.innerHTML = `
  <p>Player: ${scoreboard.player}</p>
  <p>Computer: ${scoreboard.computer}</p> 
  `;
}

function restartGame(e) {
  resetScores()
  hideRestartButton()
}

function hideRestartButton() {
  restart.style.display = "none";
}

function resetScores() {
  setPlayerScore(0)
  setComputerScore(0)
  displayScores()
}

function clearModal(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}
