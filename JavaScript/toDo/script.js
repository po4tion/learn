const plus = document.getElementById('plus');
const form = document.getElementById('form');
const close_ = document.getElementById('close');
const submit = document.getElementById('submit');
const todo = document.getElementById('todo');
const write = document.getElementById('writing');

plus.addEventListener('click', writeText);
close_.addEventListener('click', closeText);
submit.addEventListener('submit', (e) => {
  e.preventDefault();
  const value = write.value;
  write.value = '';
  
  submitText(value);
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
  <p>${value}</p>
  <p class="todo__clicked clicked" onclick="clickColor()"></p>
  <p class="centerline"></p>
  `;

  todo.appendChild(todoDiv);
}

function clickColor () {
  const clicked = document.getElementById('clicked');
  const centerLine = document.getElementById('centerline');

  clicked.classList.toggle('todo__clicked--bg');
  centerLine.classList.toggle('todo__centerline');
}