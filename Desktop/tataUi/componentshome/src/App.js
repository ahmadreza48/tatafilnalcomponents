import React, {useState} from 'react';
import {Input, Typography, Radio, FormControlLabel} from '@material-ui/core';
import './App.css';
import logo from './logo.svg';
import Tbutton from './components/button/button';
import Tcard from './components/card/card';
import Tlabel from './components/label/index';
import Ttextbox from './components/textField/index';
import Tchekbox from './components/checkbox/index';
import Tradio from './components/radio/index';
import Tradiogrp from './components/radiogrp/index';
import TExpansionPanel from "./components/ExpansionPanel/ExpansionPanel";

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
    setSelectedRdb] = React.useState({});

  const handleTextChange = event => {
    setClick(false);
    setChecked(false);
    setText(event);
  }

  const handleChekboxChange = event => {
    setChecked(event);
  }

  const handleRdGrpChange = (event, selectedItem) => {
    console.log('handleRdGrpChange selectedItem:', selectedItem);
    console.log('handleRdGrpChange event:', event);
    setSelectedRdb(selectedItem);
  }

  const handleBtnClick = () => {
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

  const expansionPanelProps = {
    ExpansionPanel: {
      expanded: undefined,
      defaultExpanded: undefined,
      TransitionComponent: undefined,
      disabled: undefined,
      square: undefined,
      TransitionProps: undefined,
      expandIcon: undefined,
      onChange: undefined
    }
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
        option={{
        name: "reza",
        row: false,
        defaultValue: "200",
        disabled: false,
        disabledValues: [],
        disabledIndexes: [1],
        onChange: handleRdGrpChange,
        valueKey: "value",
        labelKey: "label",
        items: [
          {
            value: "1",
            label: "saeidi",
            title: "saeidi2",
            code: 100
          }, {
            value: "2",
            label: "talebi",
            title: "talebi2",
            code: 200
          }, {
            value: "3",
            label: "kashani",
            title: "kashani2",
            code: 300
          }
        ]
      }}>
        <Tradio
          option={{
          valueKey: "code",
          labelKey: "title",
          item: {
            code: 'staticValue1',
            title: 'staticLabel1'
          },
          disabled: false
        }}/>
        <Tradio
          option={{
          valueKey: "code",
          labelKey: "title",
          item: {
            code: 'staticValue2',
            title: 'staticLabel2'
          },
          disabled: false
        }}/>
        <Tradio
          option={{
          valueKey: "code",
          labelKey: "title",
          item: {
            code: 'staticValue3',
            title: 'staticLabel3'
          },
          disabled: false
        }}/>
      </Tradiogrp>

      <Tcard raised={true} title={"this is title"}>hi!!! this is test for simple card</Tcard>
      <TExpansionPanel
        header={"hiiii"}
        body={"this is test"}
        {...expansionPanelProps}>
        <Typography></Typography>
      </TExpansionPanel>

    </div>

  );

}

export default App;