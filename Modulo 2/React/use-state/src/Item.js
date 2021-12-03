import React, {useState} from 'react';

function Item(props)
{
    const [itemList, setItemList] = useState([
        {id:1,name:'Primer Item'},
        {id:2,name:'Segundo Item'},
        {id:3,name:'Tercer Item'}
    ]);

    const [palabra, setPalabra] = useState('Inicial');

    
    function addItem()
    {
        let nombreNuevo = document.getElementById('nombre');
        let idNuevo = document.getElementById('numero');

        let nuevoItem = 
        {
        id:idNuevo.value,
        name: nombreNuevo.value
        };

        setItemList([...itemList, nuevoItem]);
    }
    
    return(<div>
        <ul>
            {itemList.map(item => (
                <li>{item.id}:{item.name}</li>
            ))}
        </ul>
        <input type='text' id="nombre"></input>
        <input type='number' id="numero"></input>
        <button onClick={() => addItem('0','Otro Item')}>Agregar Item</button>
        <hr></hr>
        <input value={palabra}></input>
        <p>{palabra}</p>
    </div>)
}



export default Item