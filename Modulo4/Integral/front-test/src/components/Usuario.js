import React from 'react'
import {Link} from 'react-router-dom';


export const Usuario = (props) => {
    return (
        <div className="card-container" style={{width:"100%", border:"solid black 2px", margin:2}}>
            <p>{props.nombre}</p>
            <p>{props.apellido}</p>
            <Link to={"/usuarios/" + props.id}> Ver Mas </Link>
        </div>
    )
}
