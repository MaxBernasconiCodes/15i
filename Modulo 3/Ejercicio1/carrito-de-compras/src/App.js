import './App.css';

function App(props) {
  return (
    <div>
      <h2>Titulo: {props.titulo}</h2>
      <p>Texto: {props.texto}</p>
      <button>Boton: {props.boton}</button>
      <hr></hr>
    </div>
  );
}

export default App;
