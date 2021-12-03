import React, {useState} from 'react';

function Estado(props)
{
    const [estado, setEstado ] = useState(true);
    
    function cambioEstado()
    {
        if(props.elNumero % 2 == 0)
        {
            setEstado(!estado);
        } 
    }
    
    return (
    <div>
   
    <h2>Estado= {estado ? 'Verdadero' : 'Falso'}</h2>
    <button onClick={cambioEstado}> cambiar </button>
    </div>
    )
}

export default Estado;