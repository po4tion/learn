// -------------- hoisting ---------------

console.log(userName);

var userName = "user"; // undefined 출력, 이유는 var 키워드로 선언된 변수는 파일의 시작부분으로 올라간다. 이때 변수가 선언만 되었고 초기화는 되어 있지 않으므로 undefined를 출력하게 된다

/* 
  var 키워드 hoisting 작동방식
  var userName;
  console.log(userName);
  userName = "user";

  var 키워드를 사용하여 위와 같은 hoisting을 사용하게 된다면 코드를 읽는 입장에서는 userName이 어디에서 선언되었는지 찾아야하는 번거로움이 생긴다.
  이보다는 변수를 사용하기 전에 강제로 선언하는 것이 더 명확하고 개발자의 입장에서도 편리하다
*/

console.log(playerName);

let playerName = "player"; // Uncaught ReferenceError: Cannot access 'playerName' before initialization
