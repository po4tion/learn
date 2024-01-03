// -------------- let ---------------
let myName = "kyu";
// let myName = "kyu2"; 위에서 이미 myName을 선언했기 때문에 에러발생

function greet() {
  let myName = "dong"; // 위의 myName 변수를 shadowing(함수 밖의 변수는 잠시 가려진다)
  let age = "30";

  console.log(myName, age);
}

greet();
