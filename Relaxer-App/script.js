const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500; // ms
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

function breatheAnimtion () {
  text.innerText = 'Breathe In!';
  container.className = 'container grow';

  setTimeout(() => {
    text.innerText = 'Hold';

    setTimeout(() => {
      text.innerText = 'Breathe Out';
      container.className = 'container shrink'
    }, holdTime);
  }, breatheTime);
}

setInterval(breatheAnimtion, totalTime);

breatheAnimtion();