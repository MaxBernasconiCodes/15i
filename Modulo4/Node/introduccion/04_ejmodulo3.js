//modulos ya incluidos 

const os = require('os');
const path = require('path');
const fileSystem = require('fs');
const http = require('http');


//os
//console.log(os.userInfo());
//console.log(os.tmpdir());
//console.log(os.version());
//console.log(os.uptime());
//console.log(os.totalmem());
//console.log(os.freemem());

//path
//console.log(path.sep);
//const relativa = path.join('/ejemplo','/otramas',//'ejtxt.txt')
//console.log(relativa);
//const absoluta = path.join(__dirname,'/ejemplo',//'ejtxt.txt')
//console.log(absoluta);


setInterval(() => crearArchivo(), 1000);

const crearArchivo = () =>{
let fechadehoy  = new Date();
let log = fechadehoy.getTime();

let patcharchivo = './ejemplo/otramas/'+ log + '.txt';

fileSystem.writeFileSync(patcharchivo,(' | Un nuevo dato' + log ), {flag:'a'});

archivobonito = fileSystem.readFileSync(patcharchivo, 'utf8');
console.log(archivobonito);
}

// let usuario1 = {
//     'id':0,
//     'nombre':'max',
//     'apellido': 'bernasconi'
// }

// let usuario2 = {
//     'id':0,
//     'nombre':'max',
//     'telefono': 32123165,
//     'email':'user2@fkbjn'

// }

// let usuario3 = {
//     'id':0,
//     'nombre':'max',
//     'apellido': 'bernasconi',
//     'telefono': '32123165',
//     'posts': [{'id':0, 'cuerpo':'sdkfjhvdhksjafv', 'eliminado': false}
//     ]
// }

// const usuarios = [usuario1, usuario2, usuario3];


// console.log(usuarios);