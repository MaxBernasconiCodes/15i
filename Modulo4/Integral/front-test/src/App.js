import "./App.css";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import { Home } from "./components/Home";
import { UsuarioVista } from "./components/UsuarioVista";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/usuarios/:id" element={<UsuarioVista />} />
      </Routes>
    </Router>
  );
}

export default App;
