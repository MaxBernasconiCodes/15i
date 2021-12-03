import EmpleadoRow from "./EmpleadoRow";

function EmpleadoList({usuarios}){
    function renderUsuarios()
    {
         return usuarios.map(usuario => <EmpleadoRow usuario={usuario}></EmpleadoRow>);
    }
    return(
        <div style={{display:"flex", flexDirection:"column"}}>
        {renderUsuarios()}
        </div>
    );
}
export default EmpleadoList