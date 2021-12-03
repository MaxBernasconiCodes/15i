const http = require('http');

const servidor = http.createServer((req, res) =>{
    res.write('Este es nuestro servidor re trucho');
    res.end();
});

console.log('arranca');
servidor.listen(4500);
console.log('sigue');