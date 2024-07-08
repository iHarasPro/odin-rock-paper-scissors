'use strict'

function getComputerChoice() {
  switch (Math.floor(Math.random() * 3)) {
    case 0: return 'rock';
    case 1: return 'paper';
    case 2: return 'scissors';
    default:
      console.log('This should *not* be reachable. There is an error.');
      break;
  }
}

function getHumanChoice() {
  let humanChoice = '';
  do {
    humanChoice = prompt('Rock, Paper, or Scissors?').toLowerCase();
  } while (humanChoice !== 'rock' && humanChoice !== 'paper' && humanChoice !== 'scissors')
  return humanChoice;
}

let scoreComputer = 0;
let scoreHuman = 0;

function playRound() {
  let computerChoice = getComputerChoice();
  let humanChoice = getHumanChoice();

  // Draw
  if (humanChoice === computerChoice) {
    alert("It's a tie!");
    return;
  }

  // Human Wins
  else if ((humanChoice === 'rock'     && computerChoice === 'scissors') ||
           (humanChoice === 'paper'    && computerChoice === 'rock')     ||
           (humanChoice === 'scissors' && computerChoice === 'paper')) {
    alert('You win!')
    scoreHuman += 1;
    return;
  }

  // Computer Wins
  else if ((computerChoice === 'rock'     && humanChoice === 'scissors') ||
           (computerChoice === 'paper'    && humanChoice === 'rock')     ||
           (computerChoice === 'scissors' && humanChoice === 'paper')) {
    alert('You lost!')
    scoreComputer += 1;
    return;
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
  console.log(`Human: ${scoreHuman}\nComputer: ${scoreComputer}`);
  if (scoreComputer > scoreHuman) {
    console.log('Computer wins!');
  }
  if (scoreComputer < scoreHuman) {
    console.log('Human wins!');
  }
  return
}

playGame();

/*
let rock = 0;
let paper = 0;
let scissors = 0;

for (let i = 0; i < 1000000; i++) {
  switch (getComputerChoice()) {
    case 'rock': rock += 1; break;
    case 'paper': paper += 1; break;
    case 'scissors': scissors += 1; break;
    default: console.error('wtf?'); break;
  }
}

console.log(`Rock: ${rock}\nPaper: ${paper}\nScissors: ${scissors}`);
*/
