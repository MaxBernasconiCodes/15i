const router = require("express").Router();

const usuarios = [
    {
     "nombre": "Anastacio",
     "apellido": "Rogahn",
     "avatar": "https://cdn.fakercloud.com/avatars/SULiik_128.jpg",
     "email": "Anissa36@hotmail.com",
     "password": "rHH9awqtDodLTb2",
     "deleted": false,
     "id": "1"
    },
    {
     "nombre": "Eli",
     "apellido": "Schamberger",
     "avatar": "https://cdn.fakercloud.com/avatars/r_oy_128.jpg",
     "email": "Casimir_Lubowitz27@hotmail.com",
     "password": "Rz9A2tLxwJaNZLs",
     "deleted": true,
     "id": "3"
    },
    {
     "nombre": "Zula",
     "apellido": "Pfannerstill",
     "avatar": "https://cdn.fakercloud.com/avatars/luxe_128.jpg",
     "email": "Casey_Price@yahoo.com",
     "password": "JlGOduCQVEx_cbo",
     "deleted": false,
     "id": "14"
    },
    {
     "nombre": "Tyra",
     "apellido": "Kilback",
     "avatar": "https://cdn.fakercloud.com/avatars/thibaut_re_128.jpg",
     "email": "Kay.Schowalter34@yahoo.com",
     "password": "kzKWRaQvCuW7eYS",
     "deleted": true,
     "id": "15"
    },
    {
     "nombre": "Jimena",
     "apellido": "Martinez",
     "avatar": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmui.today%2Fvidasana%2FLibra-los-datos-mas-curiosos-sobre-el-signo-del-eterno-equilibrio-20201005-0067.html&psig=AOvVaw1q0YdOfPmuiR1jastzeGn-&ust=1635466180553000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNicqrro6_MCFQAAAAAdAAAAABAD",
     "email": "jiome@rolling",
     "password": "4Gl4iCdFgChYhwC",
     "deleted": true,
     "id": "16"
    }
   ];

router.get("/", (request, response) => {
  console.log("Todos los usuarios");
  response.status("200", "Todo bien Wacho").json(usuarios);
});

router.put("/:id", (request, response) => {});

router.delete("/:id", (request, response) => {});

router.get("/new", (request, response) => {
  response.status("200").send("Formulario");
});

router.get("/:id/avatar", (request, response) => {
    idUsuario = request.params.id;
    let encontrado = usuarios.find(usuario => usuario.id === idUsuario);
    console.log(encontrado.avatar);
    response.status("200").download('./assets/img/r_oy_128.jpg');
  });

router.get("/:id", (request, response) => {
  idUsuario = request.params.id;
  let encontrado = usuarios.find(usuario => usuario.id === idUsuario);
  console.log(`Usuario Id: ${encontrado.nombre}`);
  response.status("200").json(encontrado);
});

router.post("/", (request, response) => {
  let cuerpo = request.body;
  console.log(request);
  response.status("200").send("Creado");
  console.log("Correcto");
});

module.exports = router;
