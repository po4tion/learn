const ul = document.body.firstElementChild.nextElementSibling;
const firstLi = ul.firstElementChild;

console.log(firstLi);

const section = document.querySelector("section");
const button = document.querySelector("button");
const div = document.querySelector("div");

// section.style.backgroundColor = 'blue';
section.className = "red-bg";

/* 
  스타일 적용 우선순위는 인라인이 가장 높다
*/
button.addEventListener("click", () => {
  // if (section.className === 'red-bg visible') {
  //   section.className = 'red-bg invisible';
  // } else {
  //   section.className = 'red-bg visible';
  // }

  // section.classList.toggle('visible');
  section.classList.toggle("invisible");

  // innerHTMl로 바뀐 컨텐츠는 다시 렌더링된다. 그래서 자식 엘리먼트인 Input이 계속 초기화된다
  div.innerHTML += "<p>Rerender</p>";
});

const noRerenderButton = document.getElementById("no-rerender");

noRerenderButton.addEventListener("click", () => {
  // insertAdjacentHTML는 전체를 리렌더링 하지 않고 새로운 코드만 렌더링한다
  div.insertAdjacentHTML("beforeend", "<p>No Rerender</p>");
});
