import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import React from 'react';

export const Fator = ({children}) => {
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
    }
    const [value, setValue] = React.useState();

    const handleChange = (event) => {
        setValue(event.target.value);
      };
    
    return (
        <div style={style}>
             <FormControl>
                 <FormLabel>Fatores que ocasionam uma crise: </FormLabel>
                 <RadioGroup onChange={handleChange}>
                     <FormControlLabel control={<Radio />} value='Sono' label='Sono'></FormControlLabel>
                     <FormControlLabel control={<Radio />} value='Estresse'label='Estresse'></FormControlLabel>
                     <FormControlLabel control={<Radio />} value='Medicação' label='Medicação'></FormControlLabel>
                 </RadioGroup>
             </FormControl>
        </div>
    )
}