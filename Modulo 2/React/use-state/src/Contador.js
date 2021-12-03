import React, {useState} from 'react';
import Estado from './Estado';
import Item from './Item';

function Contador()
{
    const [cuenta, setCuenta ] = useState(0);
    
    function addOne(){
        setCuenta(cuenta +1); 
    }

    return (
    <div>
    <h1>Contador: {cuenta}</h1>
    <Estado elNumero={cuenta}/>
    <button onClick={addOne}> +1 </button>
    <Item />
    </div>
    )
}

export default Contador;