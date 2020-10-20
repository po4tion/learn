const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showSuccess (input) {
  const success = input.parentElement;
  success.className = 'form-control success';
}

function showError (input, msg = '은 유효하지 않습니다.') {
  const error = input.parentElement;
  const small = error.querySelector('small');
  error.className = 'form-control error'
  small.innerText = `${firstUpper(input)} ${msg}`;
}

function isNull (array) {
  array.forEach(item => {
    if (item.value.trim()  === '') {
      showError(item);
    } else {
      showSuccess(item); // 비빌번호 재확인을 위해
    }
  })
}

function checkLength (input, min, max) {
  const checkValue = input.value.trim();
  
  if (checkValue < min) {
    showError(input, `이(가) 최소 ${min}개 이상이어야 합니다.`)
  } else if (checkValue > max) {
    showError(input, `이(가) 최대 ${max}개 이하여야 합니다.`)
  } else {
    showSuccess(input);
  }
}

function isValidEmail (input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input);
  }
}

function isEqualPwd (input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, '는 위의 패스워드와 일치하지 않습니다.');
  }
}

function firstUpper (input) {
  const id = input.id;
  
  return id.charAt(0).toUpperCase() + id.slice(1);
}

form.addEventListener('submit', e => {
  e.preventDefault();

  isNull([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  isValidEmail(email);
  isEqualPwd(password, password2);
});
