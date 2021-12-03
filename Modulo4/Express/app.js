const { request, response } = require("express");

const app = require("express")();

const port = 4500;

const rutaUsuarios = require('./routes/usuarios');
const rutaPosts = require('./routes/posts');
app.use('/usuarios', rutaUsuarios);
app.use('/posts', rutaUsuarios);

app.get("/home", (request, response) => {
  response.send("Home");
  console.log("estoy en Home");
});

app.get("/tetera", (request, response) => {
  response.status("418").send("Soy una Tetera");
});

app.get("*", (request, response) => {
  response.status("404").send('No encontrada');
});

app.listen(port, () => console.log("Server andando en " + port));