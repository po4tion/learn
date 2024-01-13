const ul = document.body.firstElementChild.nextElementSibling;
const firstLi = ul.firstElementChild;

console.log(firstLi);

const section = document.querySelector("section");
const button = document.querySelector("button");

// section.style.backgroundColor = 'blue';
section.className = "red-bg";

button.addEventListener("click", () => {
  // if (section.className === 'red-bg visible') {
  //   section.className = 'red-bg invisible';
  // } else {
  //   section.className = 'red-bg visible';
  // }

  // section.classList.toggle('visible');
  section.classList.toggle("invisible");
});

/* 
  스타일 적용 우선순위는 인라인이 가장 높다
*/
