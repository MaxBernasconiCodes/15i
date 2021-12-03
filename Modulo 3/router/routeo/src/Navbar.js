import {NavLink} from 'react-router-dom'

function Navbar(){
    return(
        <>
        <NavLink   exact to="/">Home  |</NavLink>
        <NavLink   to="/usuarios">Usuarios  |</NavLink>
        <NavLink   to="/usuariosusuarios">Usuariosusuarios  |</NavLink>
        <a href="/usuarios">UsuariosA</a>
        </>
    )
}

export default Navbar