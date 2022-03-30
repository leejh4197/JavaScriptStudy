import React from 'react';
import './App.css';
import LifecycleEx from './studyChart/04_라이프사이클/LifecycleEx';
import Callbackhell from './studyChart/06_Callback/async/callbackhell';
import { Route } from 'react-router-dom';

function App() {
  const [is_cat, setIsCat] = React.useState(true);
  return (
    <div className="App">
      <Route exact>
      {is_cat ? <LifecycleEx/> : null}
      <button onClick={() => {setIsCat(!is_cat)}}>바꾸기</button>
      </Route>
      <Route component={Callbackhell} path="/callback" exact/>
    </div>
  );
}

export default App;
