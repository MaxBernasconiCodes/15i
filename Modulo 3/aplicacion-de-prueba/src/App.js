import './App.css';
import Formulario from './contactos/Formulario';
import Producto from './contactos/Productos';

function App() {
  let producto1 = {
    titulo:'ProductoBarato',
    texto:'un productitomas',
    btnTexto:'Comprar $2000',
  }
  return (
    <div className="App">
     <div>
       <h2>Productos en venta</h2>
       <div style={{display:'flex'}}>
         <Producto titulo="Pagina Web barata" texto="Pagina web sigle page economica" btnTexto="Comprar $1000"/>
         <Producto titulo={producto1.titulo} texto={producto1.texto} btnTexto={producto1.btnTexto}/>
         <Producto titulo="Pagina Web barata" texto="Pagina web sigle page economica" btnTexto="Comprar $10000"/>
         <Producto titulo="Pagina Web Empresarial Full No-Steam" texto="Pagina web sigle page economica" btnTexto="Comprar U$S1000"/>
       </div>
     </div>
      <Formulario titulo='Formulario de Contacto' textoBoton="Contactar" />
    </div>
  );
}

export default App;
