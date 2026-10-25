'use strict';
const secretNumber = document.querySelector('.number');
let hideNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
const message = document.querySelector('.message');
const newScore = document.querySelector('.score');
document.querySelector('.btn.Check').addEventListener('click', gameFUN);
document.querySelector('.guess').addEventListener('keydown', function (e) {
  if (e.key === 'Enter') gameFUN();
});
/* بص هو ده مش هينفع بره لان ده لو انا عملته بره معناه ان انا خزنته مره واحده
    انا عاوز كل ما ادوس على الكليك تتخزن عند قيمه الجس في اللي انا حطيتها في الانبوت جوه حاجه اسمها جس*/
function gameFUN() {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    message.textContent = `🚫 Not a Number`;
  } else if (score > 1) {
    if (guess === hideNumber) {
      secretNumber.textContent = hideNumber;
      message.textContent = `🎉 correct number`;
      score += 10;
      newScore.textContent = score;
      document.querySelector(`body`).style.backgroundColor = `#60b347`;
      secretNumber.style.width = `30rem`;
    } else if (guess < hideNumber) {
      message.textContent = `📉 Too low`;
      score--;
      newScore.textContent = score;
    } else if (guess > hideNumber) {
      message.textContent = `📈 Too high`;
      score--;
      newScore.textContent = score;
    }
  } else if (score < 1) {
    message.textContent = `💥 You lose the game`;
    score = 0;
    newScore.textContent = score;
  }
}
document.querySelector(`.btn.again`).addEventListener(`click`, function () {
  newScore.textContent = 20;
  secretNumber.textContent = `?`;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  secretNumber.style.width = `15rem`;
  document.querySelector('.guess').value = ``;
  message.textContent = `Start guessing...`;
  hideNumber = Math.trunc(Math.random() * 20) + 1;
});
