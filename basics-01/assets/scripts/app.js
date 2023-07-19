/**
 * * 변수와 상수명은 camelCase를 추천
 * * 변수와 상수명의 대소문자를 구분하므로 주의
 * * * 변수와 상수명은 문자 + 숫자로 지을 수 있다. 단, 숫자가 맨 앞에 오면 안된다.
 * * * 변수와 상수명은 $ 문자로 시작할 수 있다.
 * * * 변수와 상수명은 _ 문자로 시작할 수 있다.
 * ! 변수와 상수명을 지을 때 키워드들을 이름으로 사용할 수 없다. (let, const 등의 이름을 허용하지 않는다)
 * */

/**
 * * JavaScript는 위에서 아래로 코드가 실행된다.
 * * 변수와 상수는 사용하기 전에 먼저 선언을 해야 한다.
 */

let result = 0;
result = result + 10;

outputResult(result, "");

/**
 * * 함수에는 세미콜론을 붙이지 않는다.
 * * 공백, 줄 바꿈과 들여쓰기는 모두 선택 사항이지만, 읽기 쉬운 코드를 작성하기 위해서는 필요하다.
 * * 전역변수를 함수 내에서 사용하는 것은 함수를 이해하기 어렵게 만든다.
 * * 함수는 독립적으로 동작해야 한다.
 */

/**
 * ? 함수를 사용하기 전에 먼저 선언하지 않아도 되는 이유(함수의 위치는 자유롭다.)
 * * JavaScript는 script를 load할 때 위에서부터 아래로 실행을 하는데,
 * * 이때 전체 script를 구문 분석하되 이를 바로 실행하지 않고 먼저 위에서부터 아래로 읽기(read)를 한다.
 * * 이때 파일 내에서 함수를 찾게 되면 함수를 자동으로 맨 위로 끌고 가서 인식을 시킨다.
 * * 즉, script를 실행하기 전에 자동으로 모든 함수를 등록한다.
 */

/**
 * ? 함수의 variable shadowing 사용
 * * let userName = 'DongGyu';
 *
 * * function greetUser(name) {
 * *   let userName = name;
 * *   alert(userName);
 * * }
 *
 * * userName = 'Kuma';
 * * greetUser('DongGyu');
 *
 * * 함수의 변수는 자체 범위(block scope)를 갖기 때문에 JavaScript는 shadowing이라는 작업을 수행한다.
 * * userName이라는 변수명이 2번 선언되었지만 greetUser 함수 내에서는 userName을 참조할 때 항상 local shadowing 변수를 참조하기 때문에,
 * * userName이라는 지역 변수가 존재하지 않을 경우에만 전역에 선언되어 있는 userName을 사용한다.
 */

function add(num1, num2) {
  const result = num1 + num2;

  return result;
}

add(1, 5);
add(2, 7);
