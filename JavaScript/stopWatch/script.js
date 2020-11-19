const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const stop_ = document.getElementById('stop');
const save = document.getElementById('save');
const record = document.getElementById('record');

// time
let times = 0; // 전체 초
let hours = 0;
let minutes = 0;
let seconds = 0;

// interval
let intervalTime;

play.addEventListener('click', timeStart);
pause.addEventListener('click', timePause);
stop_.addEventListener('click', timeStop);
save.addEventListener('click', timeSave);

function timeStart () {
  play.style.display = 'none';
  pause.style.display = 'block';

  intervalTime = setInterval(() => {
    times++;

    hours = parseInt(times / 3600);
    minutes = parseInt(times % 3600 / 60);
    seconds = parseInt(times % 3600 % 60);

    init();
  }, 10);
}

function timePause () {
  play.style.display = 'block';
  pause.style.display = 'none';

  clearInterval(intervalTime);
}

function timeStop () {
  if (play.style.display === 'none') {
    play.style.display = 'block';
    pause.style.display = 'none';
  }

  times = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;

  init();
  clearInterval(intervalTime)
  record.innerHTML = '';
}

function timeSave () {
  const recordList = document.createElement('li');

  recordList.innerHTML = `
  <i class="fas fa-history"></i> ${hours} h : ${minutes} m : ${seconds} s <span class="new">NEW</span>
  `;

  const new_ = document.querySelectorAll('.new');

  if (new_.length > 0) {
    new_[new_.length - 1].classList.remove('new');
    
    new_[new_.length -1].innerText = '';
  }

  record.appendChild(recordList);
  console.log(new_);
}

function init () {
  hour.innerText = hours + ' h';
  minute.innerText = minutes + ' m';
  second.innerText = seconds + ' s';
}

init();