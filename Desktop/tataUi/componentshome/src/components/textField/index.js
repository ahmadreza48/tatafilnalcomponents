import React from 'react';
import {TextField} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({});

export default function Ttextbox(props) {
  const classes = useStyles();

  const {
    defaultValue = "defaultValue",
    color = "primary",
    disabled = false
  } = props.option || props;

  const [state,
    setState] = React.useState({value: defaultValue});

  const handleChange = event => {
    if ("onChange" in props) {
      props.onChange(event.target.value);
    }
    setState({value: event.target.value});
  }

  return (
    <div>
      <TextField
        onChange={handleChange}
        color={color}
        disabled={disabled}
        value={state.value}/>
    </div>
  );
}