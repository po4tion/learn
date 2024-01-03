// -------------- var ---------------
var myName2 = "jung";
// var myName2 = "jung2"; myName2를 위에서 선언해도 오류가 발생하지 않는다

if (myName2 === "jung") {
  // var hobbies = ["Soccer", "Basketball"];

  let hobbies = ["Soccer", "Basketball"]; // Uncaught ReferenceError 발생, 이유는 let은 var과 다르게 블록 밖에서는 사용할 수 없다.
  console.log(hobbies);
}

function greet2() {
  var myName2 = "ha";
  var age = "31";

  console.log(myName2, age, hobbies);
}

// console.log(myName2, age); // Uncaught ReferenceError 발생
console.log(myName2, hobbies);

greet2();

/* 
  우리들이 ES6 문법을 사용하는 이유는 의도가 분명히 드러나는 코드를 더 깔끔하게 작성할 수 있기 때문이다.

  그럼에도 불고하고 아직까지 var 키워드가 남아있는 이유는 브라우저 때문이다. 브라우저에서 더는 var 키워드에 대한 지원을 하지 않는다면 var 키워드를 사용하는 스크립트와 전세계 다양한 웹 페이지의 모든 스크립트의 실행이 중단될 것이기 때문이다.
*/
