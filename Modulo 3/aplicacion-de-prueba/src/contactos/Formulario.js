function Formulario(props){
return (
    <form>
        <h2>{props.titulo}</h2>
        <input type="text" className="form-control" placeholder="Nombre"/>
        <input type="text" placeholder="Apellido"className="form-control" />
        <input type="text" placeholder="Telefono"className="form-control" />
        <button className="btn btn-primary my-2">{props.textoBoton}</button>
    </form>
);
}

export default Formulario