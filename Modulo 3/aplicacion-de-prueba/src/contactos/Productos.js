function Producto(props){
    return(
        <div class="card" style={{width:'18rem'}}>
        <img src="https://picsum.photos/150/100" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{props.titulo}</h5>
          <p class="card-text">{props.texto}</p>
          <a href="#" class="btn btn-primary">{props.btnTexto}</a>
        </div>
      </div>
    );
}

export default Producto