import React, { useState } from 'react'
import HorizontalBlinds from './components/HorizontalBlinds';
import { GlobalStyle } from './GlobalStyle';

function App() {
  const [mode, setMode] = useState(false);
	function changeMode() {
		setMode(!mode);
	}
  return (
    <div className="App">
      <GlobalStyle dark={mode}/>
      <HorizontalBlinds changeMode={changeMode} />
    </div>
  );
}

export default App;
