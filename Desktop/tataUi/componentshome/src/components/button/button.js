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

    const {disabled, fullWidth, disableFocusRipple, disableRipple, size, className, variant, color, startIcon, endIcon} = props.option || props;

    const handleClick = (event) => {
        props.onClick(event);
    };

    return (
            <Button
                disabled={disabled}
                fullWidth={fullWidth}
                disableFocusRipple={disableFocusRipple}
                disableRipple={disableRipple}
                size={size}
                className={className}
                onClick={handleClick}
                variant={variant}
                color={color}
                startIcon={startIcon}
                endIcon={endIcon}
            >
                {props.children}
            </Button>
    )
};

export default Tbutton;
