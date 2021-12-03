import "./App.css";

function Hijo(props) {
  return (
    <div className="hijo contenedor">
      <div style={{ display: "flex", flexDirection: "column", margin:'0 8px 0 4px' }}>
        <button onClick={() => props.updateUsuario(props.indice)} className="btn btnUpdate"> Actualizar</button>
        <button onClick={() => props.deleteUsuario(props.indice)} className="btn btnDelete"> X </button>
      </div>
      <p>
        {" "}
        <strong>{props.indice} :</strong> {props.nombre} {props.apellido}{" "}
        {props.edad}
      </p>
    </div>
  );
}
export default Hijo;
