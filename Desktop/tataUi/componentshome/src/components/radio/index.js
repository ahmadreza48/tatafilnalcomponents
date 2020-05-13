import React from 'react';
import {RadioGroup, Radio, FormControlLabel} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({});

export default function Tradiogroup(props) {
  const classes = useStyles();

  const [value,
    setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // const {   checked,   color = "primary",   disabled = false,   required =
  // false,   size = "medium" } = props.option; const [state,   setState] =
  // React.useState(checked); const handleChange = event => {   if ("onChange" in
  // props) {     props.onChange(event.target.checked);   }
  // setState(event.target.checked); }

  return (
    <div>
      <RadioGroup ></RadioGroup>
    </div>
  );
}