const mongoose = require("mongoose");
const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

const bcrypt = require('bcryptjs');

//variables de ambiente
const url = "mongodb://localhost/test";
const port = 4500;

//Importaciones del Modelo Usuario
const {
  getUsuarios,
  getUsuarioById,
  getUsuarioByNombre,
  createUsuario,
  getUsuarioByUsuario
} = require("./Models/Usuario");

const {
  getProductos,
  getProductoById,
  getProductoByCodigo,
  createProducto,
  updateProducto,
  movimientoStock,
} = require("./Models/Producto");

mongoose
  .connect(url, {})
  .then(() => console.log(`Conectado a db ${url}`))
  .catch((e) => console.log("error: " + e));

app.listen(port, () => {
  console.log(`Servidor levantado, escuchando puerto: ${port}`);
});

app.all("/", (req, res) => res.send("<h1>Hola desde la Api</h1>"));

app.get("/usuarios", async (req, res) => {
  let respuesta = await getUsuarios();
  res.send(respuesta);
});

app.get("/usuarios/:id", async (req, res) => {
  let idU = req.params.id;
  let respuesta = await getUsuarioById(idU);
  res.send(respuesta);
});

// Alta de Usuarios
app.post("/usuarios", async (req, res) => {
  let data = req.body;
  let resultado;
  let newPww = await bcrypt.hash(data.password,18);
//   console.log('pasapww: ' +  data.password);
//   console.log(newPww);
  try {
    resultado = await createUsuario(data,newPww);
  } catch (e) {
    console.log(e);
  }
  res.send(resultado);
});

app.put("productos/:codigo", (req, res) => res.send(updateProducto()));


app.post("/login", async (req, res) => {
    const data = req.body;
    let usuario = await getUsuarioByUsuario(data.usuario);
    let compare = await bcrypt.compare(data.password, usuario.password);
    if(compare){
        res.send('ok')
    }
    else{
        res.send('not ok')
    }
  });