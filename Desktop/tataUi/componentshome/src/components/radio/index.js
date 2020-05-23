import React from 'react';
import {Radio, FormControlLabel} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({});

export default function Tradio(props) {
  const classes = useStyles();

  const {
    disabled = false,
    value = "value",
    label = "label"
  } = props.option || props;

  return (

    <FormControlLabel
      disabled={disabled}
      key={value}
      control={< Radio value = {
      value
    } />}
      label={label}/>
  );
}