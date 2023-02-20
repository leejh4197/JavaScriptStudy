import React from "react";

// 이벤트 핸들링이란 마우스 클릭, 키보드 입력 등 사용자가 어떠한 행위를 하였을때 발생하는 이벤트를 처리하는 것을 말한다.
class EventHandle extends React.Component {
  state = {
    value: "",
  };
  handleClick = (e) => {
    this.setState({ value: e.target.value });
  };
  render() {
    return (
      <div>
        <h1>클래스형 이벤트</h1>
        <input
          value={this.state.value}
          onChange={(e) => {
            console.log(this.state);
            this.setState({ value: e.target.value });
          }}
        />
      </div>
    );
  }
}

export default EventHandle;
