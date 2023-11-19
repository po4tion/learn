const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');

const words = [
  'sign',
  'tense',
  'airplane',
  'ball',
  'pies',
  'juice',
  'warlike',
  'bad',
  'north',
  'east',
  'south',
  'west',
  'dependant'
];

let randomWord;
let score = 0;
let time = 10;
let difficulty = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'medium';

difficultySelect.value = difficulty;

text.focus();     // 페이지의 input text요소에 바로 입력할 수 있음.

const timeInterval = setInterval(updateTime, 1000);

function getRandomWord () {
  return words[Math.floor(Math.random() * words.length)];
}

function addWordToDOM () {
  randomWord = getRandomWord();
  word.innerText = randomWord;
}

function updateScore () {
  score++;

  scoreEl.innerText = score;
}

function updateTime () {
  time--;

  timeEl.innerText = time + 's';

  if (time === 0) {
    clearInterval(timeInterval);

    gameOver();
  }
}

function gameOver () {
  endgameEl.innerHTML= `
    <h1>Time Ran out</h1>
    <p>Your final score is ${score}</p>
    <button onclick="location.reload()">Reload</button>
  `;

  endgameEl.style.display = 'flex';
}

addWordToDOM();

text.addEventListener('input', e => {
  const insertedText = e.target.value;
  
  if (insertedText === randomWord) {
    addWordToDOM();
    updateScore();

    e.target.value = '';
    
    if (difficulty === 'hard') {
      time += 2;
    } else if (difficulty === 'medium') {
      time += 5;
    } else {
      time += 10;
    }

    updateTime(); // updateTime 함수를 적용하지 않아도 시간은 업데이트되며 줄어들지만 시간에 +5s가 추가되는 속도가 updateTime()함수를 명시하면 더 빠르다.
  }
});

settingsBtn.addEventListener('click', () => settings.classList.toggle('hide'));
settingsForm.addEventListener('change', e => {
  difficulty = e.target.value;
  
  localStorage.setItem('difficulty', difficulty);
});