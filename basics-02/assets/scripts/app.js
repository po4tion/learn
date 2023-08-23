const defaultResult = 0;
let currentNumber = defaultResult;
let logEntries = [];

function getUserNumberInput() {
  const result = parseInt(userInput.value, 10);

  return result;
}

/**
 * @param {*} prevCalculatedNumber 이전 계산된 값
 * @param {*} operator 연산자
 * @param {*} currentEnteredNumber 현재 입력된 값
 */
function createAndWriteOutput(prevCalculatedNumber, operator, currentEnteredNumber) {
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

/**
 *
 * @param {*} type 연산자 종류
 */
function calculateResult(type) {
  if (type !== "ADD" && type !== "SUBTRACT" && type !== "MULTIPLY" && type !== "DIVIDE") {
    return;
  }

  // 50번째 줄에서의 if 조건문을 통해 early return을 하고 있으므로 55번째줄의 if문은 선택사항이다.
  if (type === "ADD" || type === "SUBTRACT" || type === "MULTIPLY" || type === "DIVIDE") {
    const enteredNumber = getUserNumberInput();
    const prevCalculatedNumber = currentNumber;
    let operator = "";

    if (type === "ADD") {
      currentNumber += parseInt(enteredNumber, 10);
      operator = "+";
    } else if (type === "SUBTRACT") {
      currentNumber -= parseInt(enteredNumber, 10);
      operator = "-";
    } else if (type === "MULTIPLY") {
      currentNumber *= parseInt(enteredNumber, 10);
      operator = "*";
    } else if (type === "DIVIDE") {
      currentNumber /= parseInt(enteredNumber, 10);
      operator = "/";
    }

    createAndWriteOutput(prevCalculatedNumber, operator, enteredNumber);
    createLogEntry(prevCalculatedNumber, type, enteredNumber, currentNumber);
  }
}

function add() {
  calculateResult("ADD");
}

function subtract() {
  calculateResult("SUBTRACT");
}

function multiply() {
  calculateResult("MULTIPLY");
}

function divide() {
  calculateResult("DIVIDE");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
