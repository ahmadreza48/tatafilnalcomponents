import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
    Button,
    DialogTitle,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    Typography
} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        marginTop: '20px'
    },
});

const Tdialog = (props) => {
    const classes = useStyles();
    const {onClose, selectedValue, open, simpleDialog, children} = props.option || props;

    const handleClose = () => {
        onClose();
    };

    // const handleListItemClick = (value) => {
    //     onClose(value);
    // };

    return (
        <Dialog {...simpleDialog} className={classes.root} onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}
                disableBackdropClick={false}>
            <DialogTitle id="simple-dialog-title">choose account</DialogTitle>
            <DialogContent children={children}/>

        </Dialog>
    );
};

export default Tdialog;
