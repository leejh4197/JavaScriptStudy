import React from "react";

const BubbleCapture = () => {
  return (
    <form
      onClick={() => {
        alert("form");
      }}
    >
      <div
        onClick={() => {
          alert("div");
        }}
      >
        <p
          onClick={() => {
            alert("p");
          }}
        >
          여기를 클릭해보시지!
        </p>
      </div>
    </form>
  );
};

export default BubbleCapture;
// 버블링
// 한 요소에 이벤트가 발생하면 이 요소에 할당된 핸들러가 동작을하고 이어 부모요소의 핸들러가 동작한다.
// 가장 최상단의 조상요소를 만날때 까지 이과정을 반복하며 각 요소들에 할당된 핸들러가 동작한다.
// 이벤트 객체 메서드인 event.stopPropagation()로 버블링을 중단시킬 수 있다.
