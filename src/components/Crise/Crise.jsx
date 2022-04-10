import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import React from 'react';


export const Crise = ({children}) => {
    const style = {
        background: '#f7dbff',
        justifyContent: 'flex-start',
        alignSelf:'auto',
        alignContent: 'auto',
        alignItems:'baseline',
        margin: '15px',
        padding: '10px',
        borderRadius: '5px',
        borderStyle: 'solid',
        borderColor: '#5b9aa0',
        display: 'flex'
    }
    
    const [value, SetValue] =  React.useState()

    const handleChange = (event) => {
        SetValue(event.target.value);
    };

    return (
        <div style={style}>
             <FormControl>
                 <FormLabel>Tipo da crise: </FormLabel>
                 <RadioGroup onChange={handleChange}>
                     <FormControlLabel control={<Radio />} value='Ausencia' label='Ausência'></FormControlLabel>
                     <FormControlLabel control={<Radio />} value='Convulsiva'label='Convulsiva'></FormControlLabel>
                     <FormControlLabel control={<Radio />} value='Ansiedade' label='Ansiedade'></FormControlLabel>
                 </RadioGroup>
             </FormControl>
        </div>
    )
}