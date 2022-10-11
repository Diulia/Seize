export const Item = ({children}) => {
    const style = {
        background: '#8601AF',
        minWidth: '400px',
        minHeight: '450px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexFlow: 'column wrap',
        alignContent: 'center',
        margin: '30px',
        boxShadow: '5px 10px #5b9aa0',
        borderStyle: 'solid',
        borderRadius: '5px',
        borderColor: '#3A004C',
        padding: '15px',
       
    }

    return (
        <div style={style}>
            {children}
        </div>
      );
}