import React, {useState} from 'react';
import {Input, Typography} from '@material-ui/core';
import './App.css';
import logo from './logo.svg';
import Tbutton from './components/button/button';
import Tcard from './components/card/card';
import Tlabel from './components/label/index';
import Ttextbox from './components/textField/index';
import Tchekbox from './components/checkbox/index';
import Tradiogrp from './components/radio/index';

function App() {
  let showLabel = null;
  let showChekbox = null;

  const [getText,
    setText] = React.useState("");
  const [getClick,
    setClick] = React.useState(false);
  const [getChecked,
    setChecked] = React.useState(false);
  const [getSelectedRdb,
    setSelectedRdb] = React.useState({id: "", value: ""});

  const handleTextChange = event => {
    setClick(false);
    setChecked(false);
    setText(event);
  }

  const handleChekboxChange = event => {
    setChecked(event);
  }

  const handleRdGrpChange = event => {
    // console.log(`handleRdGrpChange label: ${event.id}`);
    // console.log(`handleRdGrpChange value: ${event.value}`);
    setSelectedRdb({id: event.id, value: event.value});
  }

  const handleBtnClick = () => {
    console.log(`handleBtnClick getSelectedRdb value: ${getSelectedRdb.value} `);
    console.log(`handleBtnClick getSelectedRdb label: ${getSelectedRdb.id} `);
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

      {showLabel}

      {showChekbox}

      <Tcard raised={true}>hi!!! this is test for simple card</Tcard>

      <Tradiogrp
        onChange={handleRdGrpChange}
        option={{
        name: "reza",
        itemsList: [
          {
            value: "1",
            label: "saeidi"
          }, {
            value: "2",
            label: "talebi"
          }, {
            value: "3",
            label: "kashani"
          }
        ]
      }}></Tradiogrp>

    </div>

  );
}

export default App;