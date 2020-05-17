import React from 'react';
import {RadioGroup, Radio, FormControl, FormLabel, FormControlLabel} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({});

export default function Tradiogrp(props) {
  const classes = useStyles();

  const {
    name = "ahmad",
    row = true,
    defaultValue,
    disabled = false,
    disabledValues,
    disabledIndexes,
    items,
    valueKey,
    labelKey,
    onChange
  } = props.option || props;

  const [state,
    setState] = React.useState(String(defaultValue));

  const handleChange = event => {
    // event.persist();
    if (onChange) {
      var selctedItem = items.filter(item => {
        return (item[valueKey] == event.target.value);
      });
      if (selctedItem && selctedItem.length) {
        selctedItem = selctedItem[0];
      }
      onChange(event, selctedItem);
    }
    setState(event.target.value);
  }

  return (

    <FormControl disabled={disabled}>
      <FormLabel>Gender</FormLabel>
      <RadioGroup row={row} name={name} value={state} onChange={handleChange}>
        {items.map((item, index) => <FormControlLabel
          disabled={(disabledValues)
          ? disabledValues.includes(Number(item[valueKey]) || String(item[valueKey]))
          : disabledIndexes.includes(Number(index) || String(index))}
          key={String(item[valueKey])}
          control={< Radio value = {
          String(item[valueKey])
        } />}
          label={String(item[labelKey])}/>)}

      </RadioGroup>
    </FormControl>

  );
}