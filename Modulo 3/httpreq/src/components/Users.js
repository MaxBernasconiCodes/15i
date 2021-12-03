import axios from "axios";
import { useEffect, useState } from "react";

function Users() {
        const [usuarios, setUsuarios] = useState([]);
        const [nombreNuevo, setNombreNuevo] = useState('');
        const [apellidoNuevo, setApellidoNuevo] = useState('');

        useEffect(() => {
            getUsuarios();
        },[]
        )

    async function getUsuarios(){
         axios.get('https://61675debba841a001727c2ec.mockapi.io/api/usuarios')
        .then(function (response) {
            console.log(response.data)
         setUsuarios(response.data.filter( x => !x.deleted));
     });

    }
    async function getDeletedUsuarios(){
        axios.get('https://61675debba841a001727c2ec.mockapi.io/api/usuarios')
       .then(function (response) {
           console.log(response.data)
        setUsuarios(response.data.filter( x => x.deleted));
    });

   }

    async function getUsuarioById(id){
        axios.get('https://61675debba841a001727c2ec.mockapi.io/api/usuarios/' + id)
       .then(function (response) {
           console.log(response.data)
        setUsuarios([response.data]);
    });}

    async function addUsuario(){
        axios.post('https://61675debba841a001727c2ec.mockapi.io/api/usuarios',
        {
            "nombre": nombreNuevo,
            "apellido": apellidoNuevo,
        }
        );
        getUsuarios();
    }

    async function updateUsuario(id){
        const respuesta =  await axios.put('https://61675debba841a001727c2ec.mockapi.io/api/usuarios/' + id,
        {
            "nombre": nombreNuevo,
            "apellido": apellidoNuevo,
        }
        );
        setUsuarios([respuesta.data]);
    }
    async function borrarUsuario(id){
        const respuesta =  await axios.put('https://61675debba841a001727c2ec.mockapi.io/api/usuarios/' + id,
        {
            "deleted": true,
        }
        );
        setUsuarios([respuesta.data]);
    }

    async function deleteUsuario(id){
        await axios.delete('https://61675debba841a001727c2ec.mockapi.io/api/usuarios/' + id
        );
        const respuesta = await axios.get('https://61675debba841a001727c2ec.mockapi.io/api/usuarios');
        setUsuarios(respuesta.data);
    }

    return ( 
        <>
        <button onClick={() => getUsuarios()}>Volver</button>
        <button onClick={() => getDeletedUsuarios()}>Papelera</button>
        <input onChange={(e) => setNombreNuevo(e.target.value)} placeholder="Nombre"></input>
        <input onChange={(e) => setApellidoNuevo(e.target.value)} placeholder="Apellido"></input>
        <p>{nombreNuevo + " / " + apellidoNuevo}</p>
        <button onClick={() =>addUsuario()}>AddUsuario</button>
        { <ul>
        { usuarios.map(usuario => <li onClick={() => getUsuarioById(usuario.id)}> {usuario.id}: {usuario.nombre}  {usuario.apellido} <img src={usuario.avatar} width="100" height="100"/> {usuarios.length == 1 ? <> <button onClick={() => updateUsuario(usuario.id)}>Editar</button>  <button onClick={() => borrarUsuario(usuario.id)}>Eliminar</button> </>: null } </li>)}
        </ul> }
        </> 
        );
}

export default Users;