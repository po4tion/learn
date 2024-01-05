const addListenerBtn = document.getElementById("add-listener-btn");
const clickableBtn = document.getElementById("clickable-btn");
const messageInput = document.getElementById("click-message-input");

function printMessage() {
  const value = messageInput.value;
  console.log(value || "Clicked me!");
}

/* 
  클릭 버튼을 누를 때마다 이벤트 리스너가 중첩되어 등록되지 않는 이유는
  자바스크립트는 이전에 사용한 함수를 다시 호출하는 경우, 새로운 리스너를 만드는 대신에
  기존 리스너를 새로운 리스너로 교체한다.
*/
function addListener() {
  clickableBtn.addEventListener("click", printMessage);
}

// 이름이 없는 함수는 매번 다시 만들어진다. 이는 메모리 누수를 야기한다.
function addListenerSideEffect() {
  clickableBtn.addEventListener("click", function () {
    const value = messageInput.value;
    console.log(value || "Clicked me!");
  });
}

addListenerBtn.addEventListener("click", addListenerSideEffect);
