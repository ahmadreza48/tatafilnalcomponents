import React from 'react';
import {TextField} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({});

export default function Ttextbox(props) {
  const classes = useStyles();

  const [state,
    setState] = React.useState({value: ''});

  const handleChange = event => {
    props.changeTextFunc(event.target.value);
    setState({value: event.target.value});
  }

  const {
    defaultValue = "default value",
    color,
    disabled
  } = props.option;

  return (
    <div>
      <TextField
        onChange={handleChange}
        color={color}
        disabled={disabled}
        defaultValue={defaultValue}
        value={state.value}/>
    </div>
  );
}

//test sample
{/* <div>
        <Ttextbox
          option={{
          color: "textSecondary",
          disabled: false
        }}/>
      </div> */
}