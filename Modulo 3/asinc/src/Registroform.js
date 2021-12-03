import './App.css';

function Registroform(props) {
  return (
    <>
      <input id="nombre" type="text" required minLength={3} maxLength={60} />
      <input id="apellido" type="text" required minLength={3} maxLength={60} />
      <input id="edad" type="number" required min={0} max={150} />
      <button className="btn btnAdd" onClick={props.addUsuario}>Agregar</button>
    </>
  );
}

export default Registroform;
