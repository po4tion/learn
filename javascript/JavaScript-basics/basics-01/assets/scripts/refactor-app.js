/**
 * * 변수와 상수명은 camelCase를 추천
 * * 변수와 상수명의 대소문자를 구분하므로 주의
 * * * 변수와 상수명은 문자 + 숫자로 지을 수 있다. 단, 숫자가 맨 앞에 오면 안된다.
 * * * 변수와 상수명은 $ 문자로 시작할 수 있다.
 * * * 변수와 상수명은 _ 문자로 시작할 수 있다.
 * ! 변수와 상수명을 지을 때 키워드들을 이름으로 사용할 수 없다. (let, const 등의 이름을 허용하지 않는다)
 */

/**
 * * JavaScript는 위에서 아래로 코드가 실행된다.
 * * 변수와 상수는 사용하기 전에 먼저 선언을 해야 한다.
 */

const defaultResult = 0;
let currentNumber = defaultResult;
let logEntries = [];

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
 * * 섀도우 변수란 함수에서 선언된 지역 변수이면서 전역 변수로도 존재하는 변수
 *
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

/**
 * ? 리팩토링은 무엇인가
 * * 반복하지 않아도 되고, 로직을 나누지 않아도 되는 코드를 작성한다.
 */

function getUserNumberInput() {
  const result = parseInt(userInput.value, 10);

  return result;
}

/**
 * @param {*} prevCalculatedNumber 이전 계산된 값
 * @param {*} operator 연산자
 * @param {*} currentEnteredNumber 현재 입력된 값
 */
function createAndWriteOutput(
  prevCalculatedNumber,
  operator,
  currentEnteredNumber
) {
  const description = `${prevCalculatedNumber} ${operator} ${currentEnteredNumber}`;

  outputResult(currentNumber, description);
}

/**
 *
 * @param {*} prevCalculatedNumber 이전 계산된 값
 * @param {*} operation 연산자
 * @param {*} currentEnteredNumber 현재 입력된 값
 * @param {*} currentNumber 이전 값과 현재 값의 연산 결과
 */
function createLogEntry(
  prevCalculatedNumber,
  operation,
  currentEnteredNumber,
  currentNumber
) {
  const logEntry = {
    prevCalculatedNumber,
    operation,
    currentEnteredNumber,
    currentNumber,
  };

  logEntries.push(logEntry);
}

function add() {
  const enteredNumber = getUserNumberInput();
  const prevCalculatedNumber = currentNumber;

  // * input tag의 value 속성은 항상 문자열(string) 형태로 처리된다.
  currentNumber += parseInt(enteredNumber, 10);
  createAndWriteOutput(prevCalculatedNumber, "+", enteredNumber);
  createLogEntry(prevCalculatedNumber, "ADD", enteredNumber, currentNumber);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const prevCalculatedNumber = currentNumber;

  currentNumber -= parseInt(enteredNumber, 10);
  createAndWriteOutput(prevCalculatedNumber, "-", enteredNumber);
  createLogEntry(
    prevCalculatedNumber,
    "SUBTRACT",
    enteredNumber,
    currentNumber
  );
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const prevCalculatedNumber = currentNumber;

  currentNumber *= parseInt(enteredNumber, 10);
  createAndWriteOutput(prevCalculatedNumber, "*", enteredNumber);
  createLogEntry(
    prevCalculatedNumber,
    "MULTIPLY",
    enteredNumber,
    currentNumber
  );
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const prevCalculatedNumber = currentNumber;

  currentNumber /= parseInt(enteredNumber, 10);
  createAndWriteOutput(prevCalculatedNumber, "/", enteredNumber);
  createLogEntry(prevCalculatedNumber, "DIVIDE", enteredNumber, currentNumber);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
