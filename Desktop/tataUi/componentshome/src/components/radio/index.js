import React from 'react';
import {Radio, FormControlLabel} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({});

export default function Tradio(props) {
  const classes = useStyles();

  const {
    valueKey = "value",
    labelKey = "label",
    item,
    disabled = false
  } = props.option || props;

  const radioValue = item[valueKey];
  const radioLabel = item[labelKey];

  return (

    <FormControlLabel
      disabled={disabled}
      key={String(radioValue)}
      control={< Radio value = {
      radioValue
    } />}
      label={radioLabel}/>
  );
}