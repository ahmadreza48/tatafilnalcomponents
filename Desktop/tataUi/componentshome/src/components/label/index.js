import React from 'react';
import {Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({});

export default function Tlabel(props) {
  const classes = useStyles();

  const {value, variant, color, display} = props.option || props;

  return (
    <div>
      <Typography variant={variant} color={color} display={display}>{value}</Typography>
    </div>
  );
}