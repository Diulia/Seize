import React from 'react';
import TextField from '@material-ui/core/TextField';


export const Dia = ({children}) => {
  const style = {
        background: '#f7dbff',
        justifyContent: 'flex-start',
        flexFlow: 'row',
        alignContent: 'center',
        margin: '15px',
        padding: '10px',
        borderRadius: '5px',
        borderStyle: 'solid',
        borderColor: '#5b9aa0',
        width: '260px',
        height: '60px',
        display: 'flex',

  }
  return (
    <div style={style}>
      <form >
      <TextField 
        id="datetime-local"
        label="Registre o dia"
        type="date"
        defaultValue="2012-12-28"
        InputLabelProps={{
          shrink: true,
        }}
      />
      </form>
    </div>
    
  );
}
