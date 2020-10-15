import React from 'react'
import User from './components/User'
import './App.css'

function onClickHandler() {
  console.log("onClickHandler");
}

 function App() {

  return (
    <div className="App">
      <User name="ali" state="offline" clickHandler={onClickHandler}/>
      <User name="mustafa" state="online" clickHandler={onClickHandler}/>
      <User name="mehmet" state="busy" clickHandler={onClickHandler}/>
    </div>
  )
}


export default App;