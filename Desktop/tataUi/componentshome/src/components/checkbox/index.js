import React from 'react';
import {Checkbox} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({});

export default function Tchekbox(props) {
  const classes = useStyles();

  const {
    checked,
    color = "primary",
    disabled = false,
    required = false,
    size = "medium"
  } = props.option;

  const [state,
    setState] = React.useState(checked);

  const handleChange = event => {
    if ("onChange" in props) {
      props.onChange(event.target.checked);
    }
    setState(event.target.checked);
  }

  return (
    <div>
      <Checkbox
        onChange={handleChange}
        color={color}
        disabled={disabled}
        checked={state}/>
    </div>
  );
}