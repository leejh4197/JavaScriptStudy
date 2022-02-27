## "자바스크립트의 웹브라우저 동작원리"

- 이벤트 루프란?
Callback Event Queue에서 하나씩 꺼내서 동작시키는 Loop를 뜻한다.

```Javascript
console.log(1+1)
setTimeout(function(){console.log(2+2)},1000)
console.log(3+3)
```
(코드 순서에 상관없이 빠르게 실행가능한 코드부터 실행)

코드 실행시 2,6,4 순으로 콘솔에 찍히는 것을 볼 수 있었다.
혹시 1초 뒤 콘솔이 실행되도록 작성하여 나중에 찍히는 것 인가 생각하여
0초로 변경 뒤 실행 시켜 보았다.
```Javascript
console.log(1+1)
setTimeout(function(){console.log(2+2)},0)
console.log(3+3)
```
마찬가지로 2,6,4 순으로 콘솔에 찍히는 것을 확인하였다.
이것으로 setTimeout 함수는 시간 관계없이 이벤트 루프를 돌게 되는구나 깨달았다.

