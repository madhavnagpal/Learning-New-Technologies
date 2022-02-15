'use strict';

// Selecting Html Dom Nodes
const currScorePlayer0Node = document.querySelector('#current--0');
const currScorePlayer1Node = document.querySelector('#current--1');
const totalScorePlayer0Node = document.querySelector('#score--0');
const totalScorePlayer1Node = document.querySelector('#score--1');
const player0Node = document.querySelector('.player--0');
const player1Node = document.querySelector('.player--1');

const rollDiceBtnNode = document.querySelector('.btn--roll');
const diceImageNode = document.querySelector('.dice');
const holdBtnNode = document.querySelector('.btn--hold');
const newGameBtnNode = document.querySelector('.btn--new');

// Initial conditions
diceImageNode.classList.add('hidden');

// Variable Initalizations
let currScore = 0,
  activePlayer = 0,
  totalScores = [0, 0],
  playing = true;

// Event Listeners
rollDiceBtnNode.addEventListener('click', handleDiceRoll);
holdBtnNode.addEventListener('click', handleScoreHold);
newGameBtnNode.addEventListener('click', resetTheGame);

function resetTheGame() {
  totalScores = [0, 0];
  currScore = 0;
  activePlayer = 0;
  totalScorePlayer0Node.textContent = 0;
  totalScorePlayer1Node.textContent = 0;
  currScorePlayer0Node.textContent = 0;
  currScorePlayer1Node.textContent = 0;
  player0Node.classList.add('player--active');
  player1Node.classList.remove('player--active');
  player0Node.classList.remove('player--winner');
  player1Node.classList.remove('player--winner');
  playing = true;
}

function handleScoreHold() {
  if (playing) {
    totalScores[activePlayer] += currScore;
    currScore = 0;
    document.querySelector(`#score--${activePlayer}`).textContent =
      totalScores[activePlayer];
    document.querySelector(`#current--${activePlayer}`).textContent = currScore;

    if (totalScores[activePlayer] >= 20) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      playing = false;
      diceImageNode.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
}

function switchPlayer() {
  currScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = currScore;
  player0Node.classList.toggle('player--active');
  player1Node.classList.toggle('player--active');
  activePlayer = Number(!activePlayer);
}

function handleDiceRoll() {
  if (playing) {
    let diceRollOutput = Math.floor(Math.random() * 6 + 1);
    diceImageNode.setAttribute('src', `dice-${diceRollOutput}.png`);
    diceImageNode.classList.remove('hidden');

    if (diceRollOutput === 1) {
      switchPlayer();
    } else {
      currScore += diceRollOutput;
      document.getElementById(`current--${activePlayer}`).textContent =
        currScore;
    }
  }
}
