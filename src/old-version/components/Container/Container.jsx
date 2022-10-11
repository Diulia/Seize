import { Item } from "../Items/Items";
import { Registro } from "../Registro/Registro";
import { Fator } from "../Fator/Fator";
import { Dia } from "../Dia/Dia";
import { Crise } from "../Crise/Crise";
import { Botao } from "../Button/Button";

export const Espaco = () => {
  const style = {
      background: 'linear-gradient(to bottom, #c91bfe 0%, #f7dbff 100%)',
      width: '100%',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexFlow: '',
      alignContent: 'center',
      margin: 'auto',
      fontFamily: 'Arial',
      color: '#2A0934'
  }

  return (
    <div style={style}>
        <Item>
        <Registro>
          <Dia></Dia>
          <Crise></Crise>
          <Fator></Fator>
          <Botao>Registrar crise</Botao>
        </Registro>
        </Item>
    </div>
  );
}
