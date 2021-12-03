import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import 'bootstrap/dist/css/bootstrap.min.css';
//import Button from 'react-bootstrap/Button';

ReactDOM.render(
  <React.StrictMode>
    {/* <Button>Asd</Button> */}
    <button className="btn btn-secondary">Sin Import</button>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
