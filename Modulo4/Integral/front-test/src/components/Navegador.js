import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navegador = () => {
    return (
        <div>
            <NavLink activeClass="activo" to="/" />
            <NavLink activeClass="activo" to="/usuarios"/>
            <NavLink activeClass="activo" to="/productos"/>
        </div>
    )
}
