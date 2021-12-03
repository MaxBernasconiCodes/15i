import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Usuario } from './Usuario';

export const Home = () => {
    
    const [usuarios, setUsuarios] = useState([]);

    useEffect(()=>{ 
        axios.get('http://localhost:4500/usuarios').then(res => {setUsuarios(res.data)
        console.log(res.data)});
        console.log(usuarios);
    },[]);
    return (
        <div>
            {usuarios.map(usuario => <Usuario id={usuario._id} nombre={usuario.nombre} apellido={usuario.apellido} />)}
        </div>
    )
}
