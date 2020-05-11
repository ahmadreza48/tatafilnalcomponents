import React from 'react';
import {Button, Card, CardActions, CardContent, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
});

const Tcard = () => {
    return (
        <Card>
            <CardContent>
                <Typography>hi</Typography>
                <CardActions>
                    <Button>bye</Button>
                </CardActions>
            </CardContent>
        </Card>
    )
};

export default Tcard;