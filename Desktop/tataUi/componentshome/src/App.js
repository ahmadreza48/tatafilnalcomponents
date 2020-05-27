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
import Tdialog from "./components/dialog/dialog";
import Tnavigationbar from './components/navigation-bar';

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

  // for Dialog

  const [open,
    setOpen] = React.useState(false);
  const [scroll,
    setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

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
    body: "this is expansion panel",
    header: "Hi everyBody",
    expansionPanel: {
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

  // simple Dialog props const simpleDialogProps = {     simpleDialog: {
  // disableBackdropClick: undefined,         disableEscapeKeyDown: undefined,
  // fullScreen: undefined,         fullWidth: undefined,         maxWidth:
  // undefined,         onBackdropClick: undefined,         onClose: undefined,
  // onEnter: undefined,         onEntered: undefined,         onEntering:
  // undefined,         onEscapeKeyDown: undefined,         onExit: undefined,
  // onExited: undefined,         onExiting: undefined,         open: undefined,
  // PaperComponent: undefined,         PaperProps: undefined, scroll: undefined,
  //    TransitionComponent: undefined, transitionDuration: undefined,
  // TransitionProps: undefined, dividers: true     } }

  return (

    <div>

      <Tnavigationbar/>

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
        disabledValues: [
          10, 200
        ],
        disabledIndexes: [],
        onChange: handleRdGrpChange,
        valueKey: "code",
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
          item: {
            value: "staticValue1",
            label: "staticLabel1",
            code: 10
          },
          disabled: false
        }}/>
        <Tradio
          option={{
          item: {
            value: "staticValue2",
            label: "staticLabel2",
            code: 20
          },
          disabled: false
        }}/>
        <Tradio
          option={{
          item: {
            value: "staticValue3",
            label: "staticLabel3",
            code: 30
          },
          disabled: false
        }}/>
      </Tradiogrp>

      <Tcard raised={true} title={"this is title"}>hi!!! this is test for simple card</Tcard>
      <TExpansionPanel option={{
        ...expansionPanelProps
      }}/>
      <Tbutton variant="outlined" color="primary" onClick={handleClickOpen('paper')}>
        Open simple dialog
      </Tbutton>
      <Tdialog
        open={open}
        onClose={handleClose}
        heading={"this is header!"}
        confirmBtnTitle={"agree"}
        rejectBtnTitle={"cancel"}
        position={'center'}
        scroll={scroll}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
        deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
        id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.

        <Tcard raised={true} title={"this is title"}>hi!!! this is test for simple card
        </Tcard>
      </Tdialog>

    </div>
  );

}

export default App;