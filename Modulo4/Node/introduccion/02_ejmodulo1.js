const nombres = ['Carla','Jesus','Camila','Pato'];
//console.log(module);

let modificar = (datos) => datos.map(dato => dato.toUpperCase());

let procesado = modificar(nombres);

const saludar = (nombre) => console.log('Hola, como estas ' + nombre + '?');

module.exports = {procesado, saludar}