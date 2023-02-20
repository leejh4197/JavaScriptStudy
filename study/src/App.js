import React from "react";
import "./App.css";
import LifecycleEx from "./studyChart/04_라이프사이클/LifecycleEx";
import Callbackhell from "./studyChart/06_Callback/async/callbackhell";
import FunctionEx from "./studyChart/05_클래스형vs함수형/FunctionEx";
import ClassEx from "./studyChart/05_클래스형vs함수형/ClassEx";
import EventHandle from "./Lab7_study/day2/EventHandle";
import BubbleCapture from "./Lab7_study/day2/BubbleCapture";
import { Route } from "react-router-dom";

function App() {
  // const [is_cat, setIsCat] = React.useState(true);
  return (
    <div className="container">
      {/* {is_cat ? <LifecycleEx/> : null}
      <button onClick={() => {setIsCat(!is_cat)}}>바꾸기</button>
      <Route component={Callbackhell} path="/callback" exact />
      <h1>Hello World</h1>
      <FunctionEx initNumber={2} />
      <ClassEx initNumber={2} /> */}
      {/* <EventHandle /> */}
      <BubbleCapture />
    </div>
  );
}

export default App;
