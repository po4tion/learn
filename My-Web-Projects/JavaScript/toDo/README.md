# toDo

## Skils

1. HTML
2. CSS
3. Javascript

## Using API

1. none

## Function

1. writeText : TODOlist를 입력할 수 있게 폼 생성
2. closeText : TODOList 입력폼을 닫는 기능
3. submitText : TODOList 출력 기능
4. clickColor: TODOList 버튼 이벤트 기능

## Problems

1. appendChild 시 id값이 중복으로 사용되는 바람에 클릭 이벤트들이 최상위 요소에만 적용됐었다. 그러니 아무리 많은 todolist들이 생성되어도 이벤트는 맨 첫번째 todolist에만 적용이 되는 문제가 발생했다. 문제해결은 각 todolist마다 고유 id값을 부여하는 것으로 해결하였다.

## Result

![tool](./img/readme.png)
