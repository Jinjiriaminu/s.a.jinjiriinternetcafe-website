let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
}

saveTostorage();

function saveTostorage() {
  localStorage.setItem('score', JSON.stringify(score));
}

let isPlaying = false;
let setIntervalId;

document.querySelector('.js-autoplay')
  .addEventListener('click', () => {

   
if (!isPlaying) {
  setIntervalId = setInterval(() => {
    const playerMove = randomNofunc();
     mainGameFunc(playerMove)
   }, 1000)
   isPlaying = true;
  } else  {

    clearInterval(setIntervalId);
    isPlaying = false;
  }

  });


function mainGameFunc(playerMove) {

 const computer = randomNofunc();

  let result = '';

if (playerMove === 'Rock') {

if (computer === 'Scissors') {
  result = 'You loss'
} if (computer === 'Paper') {
  result = 'You win!'
} if (computer === 'Rock') {
  result = 'Tie';
}

} if (playerMove === 'Paper') {

  if (computer === 'Scissors') {
    result = 'You loss'
  } if (computer === 'Rock') {
    result = 'You win!'
  } if (computer === 'Paper') {
    result = 'Tie';
  }

} if (playerMove === 'Scissors') {

  if (computer === 'Scissors') {
    result = 'Tie'
  } if (computer === 'Paper') {
    result = 'You loss'
  } if (computer === 'Rock') {
    result = 'You win!';
  }

}

if (result === 'You win!') {
  score.wins += 1;
  
} if (result === 'You loss') {
  score.losses += 1;

} if (result === 'Tie') {
  score.ties += 1;
}



document.querySelector('.js-result').innerHTML = result;

document.querySelector('.js-you-and-computer').innerHTML = `You <img src="/images/${playerMove}-emoji.png">    ________     <img src="/images/${computer}-emoji.png"> Computer `;

document.querySelector('.js-scores-text')
  .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

  saveTostorage();

}


function updateScore() {
  document.querySelector('.js-scores-text')
  .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

}




function randomNofunc() {

const randomNumber = Math.random();

let computer = '';


if (randomNumber >= 0 && randomNumber <= 0.3 ) {
  computer = 'Rock';
} if (randomNumber >= 0.3 && randomNumber <= 0.6) {
  computer = 'Paper';
} if (randomNumber >= 0.6 && randomNumber <= 1) {
  computer = 'Scissors'
}

return computer;

}



document.querySelector('.js-rock-handle')
  .addEventListener('click', () => {
    mainGameFunc('Rock');
  });

  document.querySelector('.js-paper-handle')
  .addEventListener('click', () => {
    mainGameFunc('Paper');
  });

  document.querySelector('.js-scissors-handle')
  .addEventListener('click', () => {
    mainGameFunc('Scissors');
  });

  document.body.addEventListener('keydown', (event) => {
    
    if (event.key === 's' || event.key === 'S') {
    mainGameFunc('Scissors');
    } else if (event.key === 'p' || event.key === 'P') {
      mainGameFunc('Paper');
    } else if (event.key === 'r' || event.key === 'R') {
      mainGameFunc('Rock');
    } else if (event.key === 'Backspace') {
      score = {
        wins: 0,
        losses: 0,
        ties: 0
      }
      localStorage.removeItem('score');
      updateScore();
    }
  });

  
  


  document.querySelector('.js-reset-game-handle')
  .addEventListener('click', () => {
    score = {
      wins: 0,
      losses: 0,
      ties: 0
    }
    localStorage.removeItem('score');
    updateScore();

  });



function noResetGame() {
  localStorage.getItem('score');
  updateScore();
 
}
