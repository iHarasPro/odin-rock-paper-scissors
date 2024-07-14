'use strict'

// DOM Nodes
const resultBanner = document.querySelector('div.result');
const scoreHuman = document.querySelector('div.scoreHuman');
const scoreComputer = document.querySelector('div.scoreComputer');

document.querySelectorAll('button').forEach((button) => {
  button.addEventListener('click', () => {
    playRound(button.textContent.toLowerCase());
  })
})

function playRound(humanChoice = '', computerChoice = getComputerChoice()) {

  // Draw
  if (humanChoice === computerChoice) {
    resultBanner.innerText = "It's a tie!";
    scoreHuman.innerText -= -0.5;
    scoreComputer.innerText -= -0.5;
    return;
  }

  // Human Wins
  else if ((humanChoice === 'rock'     && computerChoice === 'scissors') ||
           (humanChoice === 'paper'    && computerChoice === 'rock')     ||
           (humanChoice === 'scissors' && computerChoice === 'paper')) {
    resultBanner.innerText = "You won!";
    scoreHuman.innerText -= -1;
    return;
  }

  // Computer Wins
  else if ((computerChoice === 'rock'     && humanChoice === 'scissors') ||
           (computerChoice === 'paper'    && humanChoice === 'rock')     ||
           (computerChoice === 'scissors' && humanChoice === 'paper')) {
    resultBanner.innerText = "You lost!";
    scoreComputer.innerText -= -1;
    return;
  }
}

function getComputerChoice() {
  switch (Math.floor(Math.random() * 3)) {
    case 0: return 'rock';
    case 1: return 'paper';
    case 2: return 'scissors';
  }
}
