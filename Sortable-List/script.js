const draggable_list = document.getElementById('draggable-list');
const check = document.getElementById('check');

const languages = [
  'Python Programming',
  'Java Programming',
  'Javascript Programming',
  'C/C++ Programming',
  'PHP Programming',
  'GO Programming',
  'Swift Programming',
  'C# Programming',
  'Scala Programming',
  'R Programming'
];

// store items
const listItems = [];
let dragStartIndex;

createList();

function createList () {
  languages
  .map(a => ({ value: a, sort: Math.random() }))
  .sort((x, y) => x.sort - y.sort)
  .map(a => a.value)
  .forEach((language, index) => {
    const listItem = document.createElement('li');

    listItem.setAttribute('data-index', index);
    listItem.innerHTML = `
      <span class="number">${index + 1}</span>
      <div class="draggable" draggable="true">
        <p class="language-name">${language}</p>
        <i class="fas fa-grip-lines"></i>
      </div>
    `;

    listItems.push(listItem);
    draggable_list.appendChild(listItem);
  });

  addEventListeners();
}

function dragStart () {
  dragStartIndex = +this.closest('li').getAttribute('data-index');
  console.log(this);
}

function dragEnter () {
  this.classList.add('over');
}

function dragLeave () {
  this.classList.remove('over');
}

function dragOver (e) {
  e.preventDefault();
}

function dragDrop () {
  const dragEndIndex = +this.getAttribute('data-index');

  swapItems(dragStartIndex, dragEndIndex);
  this.classList.remove('over');
}

function swapItems (fromIndex, toIndex) {
  const itemOne = listItems[fromIndex].querySelector('.draggable');
  const itemTwo = listItems[toIndex].querySelector('.draggable');   // 주어진 노드가 이미 문서에 존재하는 노드를 참조하고 있다면 현재 위치에서 새로운 위치로 이동시킴. 즉, 부모 노드를 참조하고 있다면 appendChild의 기존 부모 노드 아래 있던 값은 사라지고 새로운 위치에만 존재하게 됨.

  listItems[fromIndex].appendChild(itemTwo);
  listItems[toIndex].appendChild(itemOne);
}

function addEventListeners() {
  const draggables = document.querySelectorAll('.draggable');
  const dragListItems = document.querySelectorAll('.draggable-list li');

  draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', dragStart);
  });

  dragListItems.forEach(item => {
    item.addEventListener('dragover', dragOver);
    item.addEventListener('drop', dragDrop);
    item.addEventListener('dragenter', dragEnter);
    item.addEventListener('dragleave', dragLeave);
  });
}

function checkOrder (e) {
  listItems.forEach((listItem, index) => {
    const languageName = listItem.querySelector('.draggable').innerText.trim();

    if (languageName !== languages[index]) {
      listItem.classList.add('wrong');
    } else {
      listItem.classList.remove('wrong');
      listItem.classList.add('right');
    }
  });
}

check.addEventListener('click', checkOrder);