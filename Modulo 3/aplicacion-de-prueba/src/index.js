import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ComponenteVacio from './contactos/ComponenteVacio';

ReactDOM.render(
    <>
    <App />
    <ComponenteVacio/>
    </> ,//esto es QUE renderizas
  document.getElementById('root') //esto es DONDE lo renderizas
);
