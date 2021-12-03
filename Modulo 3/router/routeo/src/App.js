import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import Usuarios from "./Usuarios";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";

function App() {

  const [nombreUsuario, setNombreUsuario] = useState('');

  return (
    <>
     
      <Router>
      <Navbar></Navbar>
        <button onClick={() => setNombreUsuario('Max')}> Max</button>
        <Switch>
          <Route exact path="/">
            <Home usuario={nombreUsuario}></Home>
          </Route>
          <Route path="/usuarios">
            <Usuarios usuario={nombreUsuario}></Usuarios>
          </Route>
          <Route path="/usuariosusuarios">
            <Usuarios usuario={nombreUsuario}></Usuarios>
            <Usuarios></Usuarios>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
