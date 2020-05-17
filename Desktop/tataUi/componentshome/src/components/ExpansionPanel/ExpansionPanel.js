
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles({
    root: {
        width: '100%',
        marginTop: '20px'
    },
});

const TExpansionPanel = (props) => {
    const classes = useStyles();
    const {children, IconButtonProps, align, color, display, gutterBottom, noWrap, paragraph, variant, variantMapping, header, body, expansionPanel} = props.option || props;

    const handleChange = (event) => {
        console.log(event)
    };

    return (
        <ExpansionPanel
            {...expansionPanel}
            onChange={handleChange}
            className={classes.root}
        >
            <ExpansionPanelSummary
                children={children}
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel2a-content"
                id="panel2a-header"
                IconButtonProps={IconButtonProps}
            >
                <Typography className={classes.heading}
                            children={children}
                            align={align}
                            color={color}
                            display={display}
                            gutterBottom={gutterBottom}
                            noWrap={noWrap}
                            paragraph={paragraph}
                            variant={variant}
                            variantMapping={variantMapping}
                >
                    {header}
                </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails children={children}>
                {body}
            </ExpansionPanelDetails>
        </ExpansionPanel>
    )
};

export default TExpansionPanel;