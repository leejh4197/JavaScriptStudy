import React from "react";
import DetailLifeCycle from "./detailLifeCycle.png";

var classStyle = "color:red";

class ClassEx extends React.Component {
  // 클래스 state 방식
  state = {
    number: this.props.initNumber,
    date: new Date().toString(),
  };

  // this.setState({number:Math.random()})에 의해서 state 값이 바뀌고
  // state가 바뀌면서 render메서드가 호출되며 바뀐 state값이 반영된다.

  // 클래스형 라이프사이클

  // render되기 전에 실행 된다.
  componentWillMount() {
    console.log("%cclass => componentWillMount", classStyle);
  }
  // reder 후 처리해야될 내용이 있다면 componentDidmount를 사용
  componentDidMount() {
    console.log("%cclass => componentDidMount", classStyle);
  }
  // reder 호출 유무를 shouldComponentUpdate함수 안에 코드를 통해서 판단하여
  // true를 리턴하면 reder가 호출되고 false를 리턴하면 render가 호출되지 않는다.
  shouldComponentUpdate(nextProps, nextState) {
    console.log("%cclass => shouldComponentUpdate", classStyle);
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("%cclass => componentWillUpdate", classStyle);
  }
  componentDidUpdate(nextProps, nextState) {
    console.log("%cclass => componentDidUpdate", classStyle);
  }

  render() {
    console.log("%cclass => render", classStyle);
    return (
      <div className="container">
        <h2>클래스형 컴포넌트 예시</h2>
        <p>클래스props방법 : {this.state.number}</p>
        <p>Date : {this.state.date}</p>
        <input
          type="button"
          value="random"
          onClick={function () {
            this.setState({ number: Math.random() });
          }.bind(this)}
        />
        <input
          type="button"
          value="date"
          onClick={function () {
            this.setState({ date: new Date().toString() });
          }.bind(this)}
        />
        <img src={DetailLifeCycle} style={{ width: "100%" }} />
      </div>
    );
  }
}

export default ClassEx;
