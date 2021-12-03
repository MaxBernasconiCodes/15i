import Hijo from "./Hijo";
import "./App.css";
import { useState } from "react";
import Registroform from "./Registroform";

function Padre() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [edad, setEdad] = useState('');
  const [usuarios, setUsuarios] = useState([]);

  function cargarUsuarios() {
    return usuarios.map((x, indice) => (
        !x.eliminado ?
      <Hijo
        indice={indice}
        nombre={x.nombre}
        apellido={x.apellido}
        edad={x.edad}
        updateUsuario={updateUsuario}
        deleteUsuario={removeUsuario}
      />
      : null
    ));
  }

  function addUsuario() {
    let UsuarioNuevo = {
      nombre: nombre,
      apellido: apellido,
      edad: edad,
      eliminado: false,
    };
    setUsuarios([...usuarios, UsuarioNuevo]);
  }

  /*
  Actualiza los datos de los usuarios
  debe recibir el id y los datos a actualizar
    */
  function updateUsuario(id) {
      
      let nuevoListado = [...usuarios];

      nuevoListado[id].nombre = nombre != '' ? nombre : nuevoListado[id].nombre;

      nuevoListado[id].apellido = apellido != '' ? apellido : nuevoListado[id].apellido;

      nuevoListado[id].edad = edad != '' ? edad : nuevoListado[id].edad;

      setUsuarios([...nuevoListado]);
  }

  /*
  Elimina al usuario de la base de manera Fisica
  Recibe el parametro del Id  
    */
  function deleteUsuario(id) {
      let newArray = [...usuarios];
      newArray.splice(id,1);
      setUsuarios([...newArray]);
  }

  /*
  Elimina al usuario de la base de manera Logica
  Recibe el parametro del Id 
    */
  function removeUsuario(id) {
    let newArray = [...usuarios];
    newArray[id].eliminado = true;
    setUsuarios([...newArray]);
  }
  /*
    Cambia el estado del usuario entre eliminado y activo
    recibe el parametro del id del usuario a modificar
    */
  function toggleUsuario(id) {
    let newArray = [...usuarios];
    newArray[id].eliminado = !newArray[id].eliminado;
    setUsuarios([...newArray]);
  }

  return (
    <div className="padre contenedor">
      <h2>Listado de Usuarios</h2>
      <input id="nombre" type="text" required minLength={3} maxLength={60} value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre"/>
      <input id="apellido" type="text" required minLength={3} maxLength={60} value={apellido} onChange={(e) => setApellido(e.target.value)} placeholder="Apellido"/>
      <input id="edad" value={edad} onChange={(e) => setEdad(e.target.value)} type="number" required min={0} max={150} placeholder="Edad" />
      <button className="btn btnAdd" onClick={addUsuario}>Agregar</button>
      
      {cargarUsuarios()}
    </div>
  );
}


export default Padre;
