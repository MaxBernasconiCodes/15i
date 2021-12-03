function Home(props) {
    return (
    <>
    <h1>Hola {props.nombre} {props.apellido}</h1>
    <button onClick={() => props.modificador()}>Modificar</button>
    </>
    );
}

export default Home;