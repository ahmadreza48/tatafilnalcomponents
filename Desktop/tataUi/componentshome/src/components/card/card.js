import React from 'react';
import {Card, CardContent, CardHeader} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        width: '100%',
        marginTop: '15px',
    },
});

const Tcard = (props) => {
    const classes = useStyles();
    // const [expanded, setExpanded] = React.useState(false);
    const {children, raised, align, color, display, gutterBottom, noWrap, paragraph, variant, action, disableTypography, subheader, subheaderTypographyProps, title, titleTypographyProps} = props.option || props;
    return (
        <Card
            classes={classes}
            raised={raised}
        >
            <CardHeader
                children={children}
                action={action}
                disableTypography={disableTypography}
                subheader={subheader}
                subheaderTypographyProps={subheaderTypographyProps}
                title={title}
                titleTypographyProps={titleTypographyProps}
            >

            </CardHeader>
            <CardContent children={children}>

            </CardContent>
        </Card>
    )
};

export default Tcard;