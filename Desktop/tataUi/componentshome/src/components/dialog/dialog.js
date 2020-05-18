import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Dialog} from '@material-ui/core/Dialog';
import {DialogTitle} from '@material-ui/core/DialogTitle';

const emails = ['username@gmail.com', 'user02@gmail.com'];

const useStyles = makeStyles({
    root: {},
});

const Tdialog = (props) => {
    const classes = useStyles();


    return (
        <Dialog/>
    )
};

export default Tdialog;