import './App.css';
import Componente from './components/Compónente'

function App() {
  let mapa = [1,2,3,4,5,6,7];
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hola como estas ?</h1>
        <Componente array={mapa}  />
      </header>
    </div>
  );
}

export default App;