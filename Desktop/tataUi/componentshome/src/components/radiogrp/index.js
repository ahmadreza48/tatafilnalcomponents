import React from 'react';
import {RadioGroup, Radio, FormControl, FormLabel, FormControlLabel} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Tradio from './../radio/index';

const useStyles = makeStyles({});

export default function Tradiogrp(props) {
  const classes = useStyles();

  let {
    name = "name",
    row = true,
    defaultValue,
    disabled = false,
    disabledValues,
    disabledIndexes,
    items = [],
    valueKey = "value",
    labelKey = "label",
    onChange
  } = props.option || props;

  let staticList = [];

  if (props.children) {
    if (Array.isArray(props.children)) {
      props
        .children
        .forEach(child => {
          const option = child.props.option;
          staticList.push(option.item);
        });
    } else {
      const option = props.children.props.option;
      staticList.push(option.item);
    }

    items = [
      ...staticList,
      ...items
    ];
  }

  const [state,
    setState] = React.useState({staticList, defaultValue: String(defaultValue)});

  const handleChange = event => {
    // event.persist();
    if (onChange) {
      var selctedItem = items.filter(item => {
        return (String(item[valueKey]) === String(event.target.value));
      });

      selctedItem = selctedItem[0];
      onChange(event, selctedItem);
    }
    setState({
      ...state,
      defaultValue: event.target.value
    });
  };

  return (

    <FormControl disabled={disabled}>
      <FormLabel>Test</FormLabel>
      <RadioGroup
        row={row}
        name={name}
        value={state.defaultValue}
        onChange={handleChange}>

        {items.map((item, index) => <Tradio
          disabled={(disabled)
          ? true
          : (disabledValues.length)
            ? disabledValues.includes(Number(item[valueKey]) || String(item[valueKey]))
            : disabledIndexes.includes(Number(index) || String(index))}
          key={String(item[valueKey])}
          value={String(item[valueKey])}
          label={String(item[labelKey])}/>)}

      </RadioGroup>
    </FormControl>

  );
}