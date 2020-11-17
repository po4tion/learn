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

allClear.addEventListener('click', clear);

calculation.addEventListener('click', calculate);

sign.addEventListener('click', () => {
  if (numStr > 0) {
    numStr = -numStr
    output(str + '(' + numStr + ')');
  } else if (numStr < 0) {
    numStr = -numStr
    output(str + numStr);
  }

});

function output (value) {
  calcOutput.innerText = value;
}

function clear () {
  calcOutput.innerText = 0;
  str = '';
  numStr = '';
  numArray = [];
  operArray = [];
  oneTime = true;
  sum = 0;
}

function numbers () {
  if (numStr.length > 8) {
    return alert("최대 입력 개수는 9개입니다.");
  }

  if (numStr === 0) {
    numStr = this.innerText;
  } else {
    numStr += this.innerText;
  }

  oneTime = true;

  output(str + numStr);
}

function operate () {
  // if (str.length + numStr.length > 8) {
  //   return alert("최대 입력 개수는 9개입니다.");
  // }

  if (oneTime !== true) {
    return;
  }

  if (calcOutput.innerText === '0') {
    return;
  }

  str += numStr + this.innerText;
  numArray.push(+numStr);
  numStr = '';
  operArray.push(this.innerText);

  oneTime = false;

  output(str);
}

function calculate () {
  let multi = 0;

  if (numArray.length === 0) {
    calcOutput.innerText = numStr;
    return;
  }

  numArray.push(+numStr);

  operArray.forEach((v, idx) => {
    if (v === '*') {
      multi = numArray[idx] * numArray[idx + 1];
      numArray[idx] = 0;
      numArray[idx + 1] = multi;
      v = '+';
    } else if (v === '/') {
      multi = numArray[idx] / numArray[idx + 1];
      numArray[idx] = 0;
      numArray[idx + 1] = multi;
      v = '+';
    } else if (v === '%') {
      multi = numArray[idx] % numArray[idx + 1];
      numArray[idx] = 0;
      numArray[idx + 1] = multi;
      v = '+';
    }
  });

  for(let i = 0; i < operArray.length; i++) {
    if (operArray[i] === '-') {
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
  str = '';

  if (String(sum).length > 9) {
    calcOutput.innerText = 'Error';

    setTimeout(() => {
      clear();
    }, 1000);
  } else {
    calcOutput.innerText = sum;
  }
}