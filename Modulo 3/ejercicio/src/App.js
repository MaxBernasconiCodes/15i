import { useState } from 'react';
import Componente from './Componente';

function App() {
  const [nombre, setNombre] = useState('Maximiliano');
  return (
    <>
    <Componente nombre={nombre}/>
    </>
  );
}

export default App;
