const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const start = document.getElementById('start');
const stop_ = document.getElementById('stop');
const clear = document.getElementById('clear');
const endTimer = document.getElementById('endTimer');

let changeTime;

start.addEventListener('click', startTimer);
stop_.addEventListener('click', stopTimer);
clear.addEventListener('click', clearTimer);

function startTimer () {
  start.value = '시작';
  let currentHour = +hour.value * 60 * 60;
  let currentMinute = +minute.value * 60;
  let currentSecond = +second.value;
  let sum = currentHour + currentMinute + currentSecond;

  changeTime = setInterval(() => {
    hour.value = parseInt(sum / 3600);
    minute.value = parseInt((sum % 3600) / 60);
    second.value = parseInt((sum % 3600) % 60);

    sum--;

    if (sum < 0) {
      // second value를 0으로 초기화 하지 않으면 타이머 종료 안내문구가 뜨기전 시작 버튼을 2번 누르게 될 경우 sum이 화면상에 마이너스 값을 띄게 된다.
      second.value = 0;

      clearInterval(changeTime);

      endTimer.style.display = 'flex';

      setTimeout(() => endTimer.style.display = 'none', 3000);
    }
  }, 1000);
}

function stopTimer () {
  clearInterval(changeTime);
  start.value = '재개';
}

function clearTimer () {
  hour.value = 0;
  minute.value = 0;
  second.value = 0;

  if (start.value === '재개') {
    start.value = '시작';
  }

  clearInterval(changeTime);
}