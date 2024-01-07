const startGameBtn = document.getElementById("start-game-btn");

function startGame() {
  console.log("Game is starting...");
}

const person = {
  // 객체에 함수가 저장되어 있는 방식을 "메서드"라고 부른다
  greet: function greet() {
    console.log("Hello!");
  },
};

person.greet();

startGameBtn.addEventListener("click", startGame);

console.dir(startGame); // 함수 그 자체로도 하나의 객체다
/* 
f startGame()
  arguments: null
  caller: null
  length: 0
  name: "startGame",
  prototype: { constructor: f }
*/
