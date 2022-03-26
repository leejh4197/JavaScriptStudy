import React from "react";

// 클래스형 컴포넌트
class LifecycleEx extends React.Component {
    // extends = 확장 자식클래스가 부모클래스를 갖고오는 것
    // React.Component(부모클래스) extends해서 LifecycleEx(자식클래스)에서 가져다쓴다는 의미.

// 생성자 함수
constructor(props) {
super(props);

this.state = {
cat_name: '나비',
};

console.log('in constructor!');
}

changeCatName = () => {
// state 업데이트 하는 방법
// componentDidUpdate()
this.setState({cat_name: '바둑이'});

console.log('고양이 이름을 바꾼다!');
}

componentDidMount(){
console.log('in componentDidMount!');
}

componentDidUpdate(prevProps, prevState){
console.log(prevProps, prevState);
console.log('in componentDidUpdate!');
}

componentWillUnmount(){
console.log('in componentWillUnmount!');
}

// 랜더 함수 안에 리액트 엘리먼트를 넣어준다.
render() {

console.log('in render!');

return (
<div>
{/* render 안에서 컴포넌트의 데이터 state를 참조할 수 있다. */}
<h1>제 고양이 이름은 {this.state.cat_name}입니다.</h1>
<button onClick={this.changeCatName}>고양이 이름 바꾸기</button>
</div>
);
}
}

export default LifecycleEx;