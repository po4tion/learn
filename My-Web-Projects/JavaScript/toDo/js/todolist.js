const plus = document.getElementById('plus');
const form = document.getElementById('form');
const close_ = document.getElementById('close');
const submit = document.getElementById('submit');
const todo = document.getElementById('todo');
const write = document.getElementById('writing');

let idx = 0;

plus.addEventListener('click', writeText);
close_.addEventListener('click', closeText);
submit.addEventListener('submit', (e) => {
  e.preventDefault();
  const value = write.value;
  write.value = '';
  
  submitText(value);
  closeText();
});

function writeText () {
  form.style.display = 'flex';
}

function closeText () {
  form.style.display = 'none';
}

function submitText (value) {
  const todoDiv = document.createElement('div');

  todoDiv.classList.add('todo__list');

  todoDiv.innerHTML = `
  <p class="todo__text"><i class="far fa-times-circle" id="cancel${idx}" onclick="clickCancel(${idx})"></i>${value}</p>
  <p class="todo__clicked" id="clicked${idx}" onclick="clickColor(${idx})"></p>
  <p id="centerline${idx}"></p>
  `;

  idx++;
  todo.appendChild(todoDiv);
}

function clickColor (idx) {
  const clicked = document.getElementById(`clicked${idx}`);
  const centerLine = document.getElementById(`centerline${idx}`);

  clicked.classList.toggle('todo__clicked--bg');
  centerLine.classList.toggle('todo__centerline');
}

function clickCancel (idx) {
  const cancel = document.getElementById(`cancel${idx}`);
  const cancelParent = cancel.parentNode;

  cancelParent.parentNode.remove();
}