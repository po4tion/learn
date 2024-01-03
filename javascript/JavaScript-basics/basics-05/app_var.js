// -------------- var ---------------
var myName2 = "jung";
// var myName2 = "jung2"; myName2를 위에서 선언해도 오류가 발생하지 않는다

function greet2() {
  var myName2 = "ha";
  var age = "31";

  console.log(myName2, age);
}

console.log(myName2, age); // Uncaught ReferenceError 발생

greet2();
