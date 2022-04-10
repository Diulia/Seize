import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Fade from '@material-ui/core/Fade';


export const Note = ({children}) => {
  const [state, setState] = React.useState({
    open: false,
    Transition: Fade,
  });

  const handleClick = (Transition) => () => {
    setState({
      open: true,
      Transition,
    });
  };

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };

  const style = {
    background: '#5b9aa0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexFlow: '',
    alignContent: 'center',
    margin: 'auto',
    fontFamily: 'Arial, Helvetica, sans-serif',
    color: '#3A004C',
    borderColor:'#3A004C',
    borderStyle: 'solid',
    borderWidth: '1.5px',
    borderRadius: '5px'
}
  return (
    <div>
      {children}
      <Button style={style} onClick={handleClick(Fade)}>Registrar Crise</Button>

      <Snackbar
        open={state.open}
        onClose={handleClose}
        TransitionComponent={state.Transition}
        message="Registro feito com sucesso"
        key={state.Transition.name}
      />
    </div>
  );
}
