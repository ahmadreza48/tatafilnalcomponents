import React from 'react';
import {RadioGroup, Radio, FormControl, FormLabel, FormControlLabel} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({});

export default function Tradiogrp(props) {
  const classes = useStyles();

  const {
    name = "ahmad",
    defaultValue = 1,
    itemsList
  } = props.option;

  const [state,
    setState] = React.useState(defaultValue);

  const handleChange = event => {
    event.persist();
    if ("onChange" in props) {
      props.onChange(event.target);
    }
    setState(event.target.value);
  }

  return (

    <FormControl>
      <FormLabel>Gender</FormLabel>
      <RadioGroup name={name} value={state} onChange={handleChange}>

        {itemsList.map(item => <FormControlLabel
          control={< Radio id = {
          item.label
        }
        value = {
          item.value
        } />}
          label={item.label}/>)}

      </RadioGroup>
    </FormControl>

  );
}