function Home(props) {

  function cambiar()
  {
    
  }
    return (
      <>
      <h1>Hola desde Home Component:</h1>
      <p>Bienvenido {props.nombreUsuario} {props.apellidoUsuario}</p>
      <button onClick={(evento) => props.cambiarApellido(evento.target.innerText)}>Cambio</button>
      </>
    );
  }
  
  export default Home;