import React from 'react';
import {Card, CardContent, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
});

const Tcard = (props) => {
    const classes = useStyles();
    const {children, raised, align, color, display, gutterBottom, noWrap, paragraph, variant,} = props.option || props;
    return (
        <Card
            children={children}
            classes={classes}
            raised={raised}
        >
            <CardContent children={children}>
                <Typography
                    align={align}
                    color={color}
                    display={display}
                    gutterBottom={gutterBottom}
                    noWrap={noWrap}
                    paragraph={paragraph}
                    variant={variant}
                >
                    {props.children}
                </Typography>
            </CardContent>
        </Card>
    )
};

export default Tcard;