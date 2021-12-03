import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Register } from './components/Register/Register';
import { useState } from 'react';

function App() {
  const [modalState, setModalState] = useState('inactive');
  return (
    <div className="App">
      <div className={`ModalNotice ${modalState}`}>

</div>
    <Router>
        <Routes>
          <Route exact path="/" />
          <Route path="/login" />
          <Route path="/register" element={<Register/>}/>
        </Routes>
    </Router>

      
    </div>
  );
}

export default App;