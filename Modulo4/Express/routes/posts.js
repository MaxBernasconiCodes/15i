const router = require('express').Router();

router.get("/", (request, response) => {console.log('Todos los usuarios');
response.status('200', 'Todo bien Wacho').send(`Todos los Usuarios`);});

router.put("/:id", (request, response) => {});
router.delete("/:id", (request, response) => {});

router.get('/new', (request, response) => { response.status('200').send('Formulario')});

router.get("/:id", (request, response) => {
    console.log(`Usuario Id: ${request.params.id}`);
    response.status('200').send(`Usuario Id: ${request.params.id}`);
});

router.post("/", (request, response) => {
  let cuerpo = request.body;
  console.log(request);
  response.status("200").send('Creado');
  console.log('Correcto');
});

module.exports = router;