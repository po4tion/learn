# DogTimer

## Skils

1. HTML
2. CSS
3. Javascript

## Using API

1. none

## Function

1. startTimer : 타이머 시작
2. stopTimer : 타이머 정지
3. clearTimer : 타이머 초기화

## Problems

1. 0시간 0분 0초일 때 시간을 2번 누르게 되면 종료 문구가 뜨면서 초가 음수로 넘어가는 사이드 이펙트가 발생했었다. 전체 초(second)의 합이 0미만일 경우에 초의 value 값에 0을 줘서 해결하였다.
2. input의 value값들의 type 값들이 string인지 모르고 시분초 값을 더했었다. 시, 분, 초 각 값들을 정수화하여 해결하였다.

## Result

![tool](./img/readme.png)
