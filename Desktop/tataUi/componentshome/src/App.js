import React, {useState} from 'react';
import {Input, Typography} from '@material-ui/core';
import './App.css';
import logo from './logo.svg';
import Tbutton from './components/button/button';
import Tcard from './components/card/card';
import Tlabel from './components/label/index';
import Ttextbox from './components/textField/index';

function App() {
  let showLabel = null;
  const [getText,
    setText] = React.useState("");
  const [getClick,
    setClick] = React.useState(false);

  const handleTextChange = textValue => {
    setClick(false);
    setText(textValue);
  }

  const handleBtnClick = () => {
    setClick(true);
  }

  if (getClick) {
    showLabel = <Tlabel option={{
      value: getText
    }}/>
  }

  return (

    <div>
      <Ttextbox
        changeTextFunc={handleTextChange}
        option={{
        color: "textSecondary",
        disabled: false
      }}/>

      <div className="App pullLeft">
        <Tbutton clickBtnFunc={handleBtnClick}/>
      </div>

      {showLabel}

      <div className="App pullLeft">
        <Tcard/>
      </div>

    </div>

  );
}

export default App;