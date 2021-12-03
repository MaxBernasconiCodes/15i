import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home/Home";

function App() {
  let nombre = "Rodrigo";
  let apellido = "Castillo";
  const [link, setLink] = useState('/home')
  const [listado, setListado] = useState([1,2,3,4,5,6]);

  function cambioLink()
  {
    setListado([...listado,7]);
    console.log(listado);
  }

  return ( 
    <>
    <Header/>
    <a href="/">{link}</a>
    <br/>
    <Home nombre={listado} apellido={apellido} modificador={cambioLink}/>
    <Home></Home>
    <Footer/>
    </>
   );
}

export default App;