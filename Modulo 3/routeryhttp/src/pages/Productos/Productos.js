import axios from "axios";
import { useState } from "react";

function Productos() {
  const [productos, setProductos] = useState([]);
  const [nombre, setNombre] = useState('');
  const [categoria, setCategoria] = useState('');

  function getProductos() {
      axios.get('https://61675debba841a001727c2ec.mockapi.io/api/productos')
        .then(function (response) {
            setProductos(response.data);
   })}

   function updateProducto(id) {
    axios.put('https://61675debba841a001727c2ec.mockapi.io/api/productos/' + id, {
      "nombre": nombre,
      "categoria": categoria
    })
      .then(function (response) {
          getProductos();
 })}
 function deleteProducto(id) {
  axios.delete('https://61675debba841a001727c2ec.mockapi.io/api/productos/' + id)
    .then(function (response) {
        getProductos();
})}

 function addProducto() {
  axios.post('https://61675debba841a001727c2ec.mockapi.io/api/productos', {
    "nombre": nombre,
    "categoria": categoria
  })
    .then(function (response) {
        getProductos();
})}

   const getProductoById = (id) => {
    axios.get('https://61675debba841a001727c2ec.mockapi.io/api/productos/' + id)
      .then(function (response) {
          setProductos([response.data]);
 })}

    return ( 
        <>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://picsum.photos/1000/300" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://picsum.photos/1000/300" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://picsum.photos/1000/300" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div className="container p-4">
<h1 className="titulo-principal">Bienvenidos a la Productos</h1>
<div className="input-group">
<input className="form-control" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)}></input>
<input className="form-control" placeholder="Categoria" onChange={(e) => setCategoria(e.target.value)}></input >
<button className="btn btn-primary" onClick={addProducto}>Agregar</button>
<button className="btn btn-primary" onClick={getProductos}>Actualizar</button>
</div>
<ul>
{productos.map((producto) => <li><img src={producto.imagen}/> {producto.nombre + ' ' + producto.categoria}
<button className="btn btn-info" onClick={() => updateProducto(producto.id)}>Update</button>
<button className="btn btn-success" onClick={() =>getProductoById(producto.id)}>Mas</button>
<button className="btn btn-danger" onClick={() => deleteProducto(producto.id)}> X </button>
</li>)}
</ul>
</div>
        </>
     );
}

export default Productos;