/*
 * BARRA DE NAVEGACIÓN:
 * Gestiona las rutas para ir pasando de una página a otra de la app.
 */

import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

/*
 * Con className define los estilos de la librería Boostap.
 * Construye la barra de menú con sus distintos botones
 * y el título de la app, Escape Rooms:
 *  - Ciencia Ficción.
 *  - Historia.
 *  - Buscar.
 *  - Logout.
 * Además, aparece el nombre del usuario logueado. Esta parte no está
 * implementada así que se ha dejado por defecto el nombre de la autora
 * del mismo.
 * Utiliza el hook useNavigate.
 */
export const Navbar = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login', {
            replace: true //Para no poder volver a la ruta anterior.
        }); //va a login.
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                id="menuIzquierda"
                className="navbar-brand" 
                to="/"
            >
                Escape Rooms
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({ isActive }) => 'nav-item nav-link ' + ( isActive ? 'active' : '') } 
                        to="/marvel"
                    >
                        Ciencia Ficcion
                    </NavLink>

                    <NavLink 
                        className={ ({ isActive }) => 'nav-item nav-link ' + ( isActive ? 'active' : '') } 
                        to="/dc"
                    >
                        Historia
                    </NavLink>

                    <NavLink 
                        className={ ({ isActive }) => 'nav-item nav-link ' + ( isActive ? 'active' : '') } 
                        to="/search"
                    >
                        Buscar
                    </NavLink>
                </div>
            </div>

            <div id="menuDerecha" className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <span className='nav-item nav-link text info'>
                        Ángela
                    </span>

                    <button 
                        className="nav-item nav-link" 
                        onClick={ handleLogout }
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}