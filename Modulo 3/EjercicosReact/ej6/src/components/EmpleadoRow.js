import EmpleadoAvatar from "./EmpleadoAvatar";
function EmpleadoRow({ usuario }) {
  const { avatar, nombre, apellido, empresa, departamento } = usuario;
  return (
      <div style={{display:"flex", flexDirection:"row",  borderBottom:"1px solid rgba(0, 0, 0, 0.3)", padding:"0.5rem"}}>
    <div>
    <EmpleadoAvatar imagen={avatar}></EmpleadoAvatar>
    </div>
    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", paddingLeft:"1rem"}}>
      <div style={{display:"flex", flexDirection:"row", fontWeight:700, fontSize:"2rem"}} >
      <p>{nombre + ' ' + apellido }</p>

      </div>
      <div style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"baseline"}}>
      <p style={{fontSize:"1.2rem"}}> {empresa} </p>
      <span style={{display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"#58BFE2", margin:"0 4px", padding:"6px", maxHeight:"1.3rem", color:"#FFF", fontWeight:"500", borderRadius:"10%"}}> {departamento} </span>
      </div>
    </div>
    </div>
  );
}
export default EmpleadoRow;
