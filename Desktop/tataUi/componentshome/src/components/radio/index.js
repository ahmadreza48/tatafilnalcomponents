import React from 'react';
import {Radio, FormControlLabel} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({});

export default function Tradio(props) {
  const classes = useStyles();

  const {
    value,
    label,
    disabled = false
  } = props.option || props;

  return (

    <FormControlLabel
      disabled={disabled}
      value={value}
      control={< Radio />}
      label={label}/>
  );
}