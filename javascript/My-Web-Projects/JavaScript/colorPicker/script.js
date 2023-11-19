const paragraph = document.querySelectorAll('p');
const clicked = document.getElementById('clicked');

const colors = ['#1abc9c', '#2ecc71', '#f6e58d', '#30336b', '#16a085', '#27ae60', '#f9ca24', '#130f40', '#f1c40f', '#e67e22', '#70a1ff', '#ecf0f1', '#f39c12', '#d35400', '#1e90ff', '#c0392b'];

function painting () {
  let idx = 0;

  colors.forEach(color => {
    const p = paragraph[idx];

    p.innerText = color;
    p.style.backgroundColor = color;
    idx++;
  });
}

function clipboard () {
  paragraph.forEach(x => {
    x.addEventListener('click', () => {
      const color = x.innerText
      const area = document.createElement('textarea');

      area.value = color;
      document.body.appendChild(area);
      area.select();
  
      document.execCommand('copy');
      document.body.removeChild(area);

      setTimeout(() => {
        clicked.innerText = 'COPIED ' + color;
        clicked.style.display = 'flex';

        setTimeout(() => {
          clicked.style.display = 'none'
        }, 2000);
      }, 100);
    });
  });
}

painting();
clipboard();