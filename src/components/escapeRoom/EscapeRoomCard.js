/* 
 * TARJETAS: una tarjeta por sala de escape.
 */

import { Link } from 'react-router-dom';

    /**
     * Con className define los estilos de la librería Boostap:
     * className="card" para que se muestre como tarjetas
     * y className="col" para que aparezca como columnas.
     * className="card-body" encierra el contenido de cada tarjeta:
     * className="card-title" es el título de la tarjeta y className="card-text"
     * el texto.
     * @param {*} param0 
     * @returns 
     */
export const EscapeRoomCard = ({ 
    id,
    titulo, 
    publisher,
    resumen,
    descripcion,
    duracion,
 }) => {

    const imagePath = `/assets/${id}.jpg`; //Se importan las imágenes.

    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">
                <div className="col-4">
                    <img src={ imagePath } className="card.img" alt={titulo} />
                </div>
                <div className="col-8">
                    <div className="card-body">
                        
                        <h5 className="card-title">{titulo}</h5>
                        <p className="card-text">{resumen}</p>

                        <p className="card-text">
                            <small className="text-mutted">{ duracion }</small>
                        </p>

                        <Link to={`/escapeRoom/${id}`} >
                            <button>
                                Entrar
                            </button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}