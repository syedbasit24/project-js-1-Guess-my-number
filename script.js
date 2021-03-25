'use strict';

let secretnumber = Math.trunc(Math.random() * 30) + 1;
let score = 30;
let highscore = 0;

const displayMessge = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number 😜';
    displayMessge('No Number 😜');
  }

  //when player wins
  else if (guess === secretnumber) {
    // document.querySelector('.message').textContent = '👍 correct number';
    displayMessge('👍 correct number');
    document.querySelector('.number').textContent = secretnumber;

    document.querySelector('body').style.backgroundColor = 'green';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretnumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretnumber ? '📈Too high' : '📉 Too low';
      displayMessge(guess > secretnumber ? '📈Too high' : '📉 Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '🎈 you lost the Game!';
      displayMessge('🎈 you lost the Game!');
      document.querySelector('score').textContent = 0;
    }
  }

  // when guess is high
  /* else if (guess > secretnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too high ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }

  //when guess is low
  else if (guess < secretnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too low ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
  */
});

document.querySelector('.again').addEventListener('click', function () {
  score = 30;
  highscore = 0;
  secretnumber = Math.trunc(Math.random() * 30) + 1;
  // document.querySelector('.message').textContent = 'start guessing';
  displayMessge('start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});
