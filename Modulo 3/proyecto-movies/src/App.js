import Header from './Header/Header';
import HomeComponent from './Home/Home';
import Top10Component from './Top10/Top10';
import ContactoComponent from './Contacto/Contacto';
import Footer from './Footer/Footer';
import { useState } from 'react';

function App() {
  const [nombreUsuario, setNombreUsuario] = useState();
  const [apellidoUsuario, setApellidoUsuario] = useState('Bernasconi');
  const [vista, setVista] =  useState('Home');
  const [peliculas, setPeliculas] = useState()

  function activeTab(valor)
  {
    setVista(valor);
  }
  
  return (
    <>
    <Header  nombre={nombreUsuario} apellido={apellidoUsuario} mover={activeTab}/>
      {vista == 'Home' ? <HomeComponent nombreUsuario={nombreUsuario} apellidoUsuario={apellidoUsuario}  /> : vista == 'Top' ? <Top10Component /> : vista == 'Contacto' ? <ContactoComponent /> : <h1>404 pagina no encontrada</h1>}
    <Footer />
    </>
  );
}

export default App;
