let myName = "kyu";

function greet() {
  let age = "30";
  let myName = "dong"; // 위의 myName 변수를 shadowing(함수 밖의 변수는 잠시 가려진다)

  console.log(myName, age);
}

greet();
