import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
    Button,
    DialogTitle,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    Typography,
    IconButton,
    Divider,
} from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles({
    root: {
        marginTop: '20px'
    },
    closeButton: {
        position: 'absolute',
        top: '0',
        right: '0',
    },
    btnPos: {
        display: 'block',
        margin: '0 auto',
    }
});


const Tdialog = (props) => {
    const classes = useStyles();
    const {onClose, open, simpleDialogProps, children, heading, confirmBtnTitle, rejectBtnTitle, position, scroll, dividers} = props.option || props;

    const handleClose = () => {
        onClose();
    };
    console.log("handleClose:", handleClose);

    // const handleListItemClick = (value) => {
    //     onClose(value);
    // };

    return (
        <Dialog {...simpleDialogProps} className={classes.root} onClose={handleClose}
                aria-labelledby="simple-dialog-title" open={open}
                disableBackdropClick={false} fullWidth={true}>
            <DialogTitle id="simple-dialog-title">
                <h3>{heading}</h3>
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon/>
                </IconButton>
            </DialogTitle>
            <Divider/>
            <DialogContent children={children} dividers={scroll === 'paper'}/>
            <Divider/>
            <DialogActions className={(position === 'center' ? classes.btnPos : '')}>
                <Button onClick={handleClose}>{confirmBtnTitle}</Button>
                <Button onClick={handleClose}>{rejectBtnTitle}</Button>
            </DialogActions>
        </Dialog>
    );
};

export default Tdialog;
