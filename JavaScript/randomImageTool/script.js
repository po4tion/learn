const unsplashKey = '7wR0bxTett5rO-qbqxQviHFmqOb0ndsDI7ep3rbcACQ';
const section = document.getElementById('section');
const btnLeft = document.getElementById('btn__left');
const btnRight = document.getElementById('btn__right');

const srcList = [];
let srcLength = 0;

async function getImage () {
  const res = await fetch(`https://api.unsplash.com/photos/random/?client_id=${unsplashKey}`);
  const data = await res.json();
  const urls = data.urls.small;

  section.innerHTML = `
  <img class="section__image" src="${urls}" alt="randomImage" />
  <p class="section__name" id="name"></p>
  `;

  const name = document.getElementById('name');

  name.innerText = data.alt_description;
  
  srcList.push(
    {
      url: urls,
      des: data.alt_description
    }
  );
  
  srcLength = srcList.length;

  leftArrow(srcLength);
}

function leftArrow (length) {
  if (length < 2) {
    btnLeft.style.display = 'none';
  } else {
    btnLeft.style.display = 'inline';
  }
}

function leftImage () {
  console.log('leftImage:', srcLength);
  if (srcLength === 2) {
    srcLength--;
    leftArrow(srcLength);

    section.innerHTML = `
    <img class="section__image" src="${srcList[0].url}" alt="randomImage" />
    <p class="section__name" id="name">${srcList[0].des}</p>
    `;
  } else if (srcLength > 2) {
    srcLength--;

    section.innerHTML = `
    <img class="section__image" src="${srcList[srcLength - 1].url}" alt="randomImage" />
    <p class="section__name" id="name">${srcList[srcLength - 1].des}</p>
    `;
  }
}

function rightImage () {
  if (srcLength === srcList.length) {
    init();
  } else {
    srcLength++;
    leftArrow(srcLength);

    section.innerHTML = `
    <img class="section__image" src="${srcList[srcLength - 1].url}" alt="randomImage" />
    <p class="section__name" id="name">${srcList[srcLength - 1].des}</p>
    `;
  }
}

function init () {
  getImage();
}

btnLeft.addEventListener('click', leftImage);
btnRight.addEventListener('click', rightImage);

init();