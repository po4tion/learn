# 함수

## 매개변수

함수를 정의할 때 괄호 안에 지정하는 변수

```js
function setName(name) {}
```

## 인수

함수를 호출할 때 함수에 전달하는 구체적인 값

```js
setName("po4tion");
```

## 함수 선언

```js
function multiply(a, b) {
  return a * b;
}
```

함수 선언은 호이스팅되어 어느 곳에서나 사용가능하다.

## 함수 표현식

```js
const multiply = function (a, b) {
  return a * b;
};
```

함수 표현식도 호이스팅이되지만, 그 상수에는 정의되지 않은 값인 undefined가 저장된다.
