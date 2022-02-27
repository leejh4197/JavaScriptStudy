## "자바스크립트의 웹브라우저 동작원리"

- 이벤트 루프란?
Callback Event Queue에서 하나씩 꺼내서 동작시키는 Loop를 뜻한다.

```Javascript
console.log(1+1)
setTimeout(function(){console.log(2+2)},1000)
console.log(3+3)
```