import React, {useState} from 'react';
import {Input, Typography} from '@material-ui/core';
import './App.css';
import logo from './logo.svg';
import Tbutton from './components/button/button';
import Tcard from './components/card/card';
import Tlabel from './components/label/index';
import Ttextbox from './components/textField/index';
import Tchekbox from './components/checkbox/index';

function App() {
  let showLabel = null;
  let showChekbox = null;

  const [getText,
    setText] = React.useState("");
  const [getClick,
    setClick] = React.useState(false);
  const [getChecked,
    setChecked] = React.useState(false);

  const handleTextChange = event => {
    setClick(false);
    setChecked(false);
    setText(event);
  }

  const handleChekboxChange = event => {
    setChecked(event);
  }

  const handleBtnClick = () => {
    console.log("handleBtnClick first line");
    setClick(true);
  }

  if (getClick) {
    showChekbox = <Tchekbox
      onChange={handleChekboxChange}
      option={{
      checked: getText === "checked"
    }}/>
  }

  if (getChecked) {
    showLabel = <Tlabel option={{
      value: getText
    }}/>
  }

  return (

    <div>
      <Ttextbox
        onChange={handleTextChange}
        option={{
        color: "primary",
        disabled: false
      }}/>

      <div className="App pullLeft">
        <Tbutton
          fullWidth={true}
          size="medium"
          color="primary"
          variant="contained"
          onClick={handleBtnClick}>hiii</Tbutton>
        <Tbutton
          size="medium"
          color="secondary"
          variant="contained"
          onClick={handleBtnClick}>byee</Tbutton>
      </div>

      {showLabel}

      {showChekbox}

      {/* <div className="App pullLeft">
      <Tcard/>
      </div> */}

    </div>

  );
}

export default App;