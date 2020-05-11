import React from 'react';
import {Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        width: '100%'
    },
    text: {
        fontSize: '18px'
    }
});

const Tbutton = (props) => {
    const classes = useStyles();

    const handleClick = () => {
        props.clickBtnFunc();
    };

    return (
        <div className={classes.root}>
            <Button
                disabled={false}
                fullWidth={false}
                disableFocusRipple={true}
                disableRipple={true}
                size="medium"
                className={classes.text}
                onClick={handleClick}
                variant="outlined"
                color="secondary">
                type here to see input label
            </Button>
        </div>
    )
};

export default Tbutton;
