'use strict';

const messageNode = document.querySelector('.message');
const inputBox = document.querySelector('.guess');
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const scoreNode = document.querySelector('.score');
const highScoreNode = document.querySelector('.highscore');
const numberNode = document.querySelector('.number');

let secretCode = Math.floor(Math.random() * 20 + 1);
numberNode.textContent = secretCode;
let currScore = 20,
  highScore = 0;

checkBtn.addEventListener('click', checkBtnClickHandler);

againBtn.addEventListener('click', resetTheGame);

function resetTheGame() {
  secretCode = Math.floor(Math.random() * 20 + 1);
  numberNode.textContent = secretCode;
  inputBox.value = '';
  currScore = 20;
  scoreNode.textContent = currScore;
  messageNode.textContent = 'Start Guessing ...';
  document.querySelector('body').style.backgroundColor = '#222';
  numberNode.style.width = '15rem';
}

function checkBtnClickHandler() {
  const guessValue = Number(inputBox.value);
  console.log(currScore);

  if (currScore <= 1) {
    currScore = 0;
    scoreNode.textContent = currScore;
    messageNode.textContent = 'You lose, Try Again!';
    return;
  }

  if (!guessValue) {
    messageNode.textContent = 'No Number Entered Yet!';
  } else if (guessValue === secretCode) {
    messageNode.textContent = 'You Win';
    if (currScore > highScore) {
      highScore = currScore;
      highScoreNode.textContent = highScore;
    }
    document.querySelector('body').style.backgroundColor = '#60b347';
    numberNode.style.width = '30rem';
  } else {
    messageNode.textContent = guessValue > secretCode ? 'Too High' : 'Too Low';
    currScore--;
    scoreNode.textContent = currScore;
  }
}
