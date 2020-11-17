const calcOutput = document.getElementById('output');
const number = document.querySelectorAll('.number');
const operator = document.querySelectorAll('.operator');
const allClear = document.getElementById('allClear');
const calculation = document.getElementById('calculate');
const sign = document.getElementById('sign');

let str = ''; // 계산기에 입력하는 모든 값
let numStr = '';
let numArray = [];   // 숫자 값만
let operArray = [];   // 연산자만
let oneTime = true;   // 연산자 연속 입력 X
let sum = 0;

number.forEach(num => {
  num.addEventListener('click', numbers);
});

operator.forEach(oper => {
  oper.addEventListener('click', operate);
});

allClear.addEventListener('click', () => {
  calcOutput.innerText = 0;
  str = '';
  numStr = '';
  numArray = [];
  operArray = [];
  oneTime = true;
});

calculation.addEventListener('click', calculate);

// sign 기능 구현요망

function output (value) {
  calcOutput.innerText = value;
}

function numbers () {
  if (str.length > 8) {
    return alert("최대 입력 개수는 9개입니다.");
  }
  numStr += this.innerText;
  str += this.innerText;
  oneTime = true;

  output(str);
}

function operate () {
  if (str.length > 8) {
    return alert("최대 입력 개수는 9개입니다.");
  }

  if (oneTime !== true) {
    return;
  }

  numArray.push(+numStr);
  numStr = '';
  operArray.push(this.innerText);

  str += this.innerText;
  oneTime = false;

  output(str);
}

function calculate () {
  numArray.push(+numStr);

  for(let i = 0; i < operArray.length; i++) {
    if (operArray[i] === '%') {
      sum = numArray[i] % numArray[i + 1];
      numArray[i + 1] = sum;
    } else if (operArray[i] === '/') {
      sum = numArray[i] / numArray[i + 1];
      numArray[i + 1] = sum;
    } else if (operArray[i] === '*') {
      sum = numArray[i] * numArray[i + 1];
      numArray[i + 1] = sum;
    } else if (operArray[i] === '-') {
      sum = numArray[i] - numArray[i + 1];
      numArray[i + 1] = sum;
    } else {
      sum = numArray[i] + numArray[i + 1];
      numArray[i + 1] = sum;
    }
  }

  numArray = [];
  operArray = [];
  numStr = sum;
  str = String(sum);

  calcOutput.innerText = sum;
}