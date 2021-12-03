import axios from 'axios';
import { useParams
} from "react-router-dom";
import React, { useState, useEffect } from 'react';

       
export const UsuarioVista = () => {
    const [usuario, setUsuario] = useState({});
    let { id } = useParams();
    useEffect(()=>{ 
        axios.get('http://localhost:4500/usuarios/' + id).then(res => {setUsuario(res.data)
        console.log(res.data)});
        console.log(usuario);
    },[]);
    
  return (
    <div>
      <div
        style={{
        width: "100%",
        backgroundColor:"#FF0E0E",
        border: "solid black 2px",
        margin: 2,
        }}
      >
        <p>{usuario._id}</p>
        <p>{usuario.nombre}</p>
        <p>{usuario.apellido}</p>
        <p>{usuario.edad}</p>
        <p>{usuario.eliminado}</p>
      </div>
    </div>
  );
};
