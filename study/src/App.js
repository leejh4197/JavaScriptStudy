import React from 'react';
import './App.css';
import LifecycleEx from './studyChart/04_라이프사이클/LifecycleEx';

function App() {
  const [is_cat, setIsCat] = React.useState(true);
  return (
    <div className="App">
      {is_cat ? <LifecycleEx/> : null}
      <button onClick={() => {setIsCat(!is_cat)}}>바꾸기</button>
    </div>
  );
}

export default App;
