const datos = require('./02_ejmodulo1');

//console.log(datos);

const {procesado, saludar} = datos;
//console.log(nombres);

//nombres.forEach(nombre => {
//    console.log('hola ' + nombre);
//});

function saludar2(){
    console.log('Hola Juan Carlos');
}

procesado.forEach(nombre => {
    saludar(nombre);
});