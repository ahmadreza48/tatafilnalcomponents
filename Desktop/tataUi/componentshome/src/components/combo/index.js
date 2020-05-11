import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function Combo(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        value: ''
    });

    const uniqueID = function () {
        // Math.random should be unique because of its seeding algorithm.
        // Convert it to base 36 (numbers + letters), and grab the first 9 characters
        // after the decimal.
        return '_' + Math.random().toString(36).substr(2, 9);
    };

    const {label, items, valueProp = 'value', labelProp = 'label', id = uniqueID(), onSelectedItemChanged, disabled = false, selectedValue, fullWidth = false} = props.option;

    const handleChange = (event) => {
        setState({
            value: event.target.value,
        });

        if (onSelectedItemChanged) {
            var item = items.filter(item => String(item[valueProp]) === String(event.target.value));
            if (item && item.length > 0) {
                item = item[0];
            }
            onSelectedItemChanged(event, item);
        }
    };

    return (
        <FormControl className={classes.formControl} disabled={disabled} fullWidth={fullWidth}>
            <InputLabel htmlFor={`${id}-combo`}>{label}</InputLabel>
            <Select
                native
                value={state.value || selectedValue}
                onChange={handleChange}
                inputProps={{
                    id: `${id}-combo`,
                }}
            >
                <option aria-label="None" value=""/>
                {items.map(item => <option key={item[valueProp]} value={item[valueProp]}>{item[labelProp]}</option>)}
            </Select>
        </FormControl>);
}
