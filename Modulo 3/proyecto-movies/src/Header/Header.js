function Header(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            RollingMovies
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Links nombre='Home' componente='Home' mover={props.mover} />
              <Links nombre='Top10' componente='Top' mover={props.mover}/>
              <Links nombre='Contacto' componente='Contacto' mover={props.mover}/>
              <Links nombre='Sobre Nosotros' componente='SobreNosotros' mover={props.mover}/>
            </ul>
            <span className="navbar-text">Bienvenido {props.nombre + ' ' + props.apellido}</span>
          </div>
        </div>
      </nav>
    </>
  );
}

function Links(props){
  return(
      <li className="nav-item">
          <span className="nav-link" onClick={() => props.mover(props.componente)} >
            {props.nombre}
          </span>
      </li>
  )
}

export default Header;
