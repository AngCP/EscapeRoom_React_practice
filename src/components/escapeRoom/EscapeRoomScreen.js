/*
 * PANTALLA PARA CADA SALA DE ESCAPE.
 * Contiene foto, título, breve descripción del juego, la categoría a la que pertenece y la duración
 * máxima del juego. Además, incluye 2 botones: "Volver" y "Jugar". Volver devuelve a la página anterior,
 * la del catálogo de juegos de esa categoría, y Jugar conduce a la zona de juego. La parte de la
 * zona de juego no ha sido implementada a efectos del presente trabajo de modo que ese botón, 
 * de momento, no hace nada.
 */

import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { getEscapeRoomById } from '../../selectors/getEscapeRoomById';

    /**
     * Con className define los estilos de la librería Boostap:
     * navigate( -1 ) va a la página anterior.
     * animate__animated animate__fadeInLeft y animate__animated animate__fadeIn
     * introducen una animación en la imagen y texto respectivamente.
     * Extrae las imágenes del directorio assests.
     * @returns
     */
export const EscapeRoomScreen = () => {

    const { escapeRoomId } = useParams();

    const navigate = useNavigate();

    const escapeRoom = getEscapeRoomById(escapeRoomId);

    const handleReturn = () => {
        navigate( -1 );
    }

    if(!escapeRoom){
        return <Navigate to='to' /> //Si el usuario introduce el url de una sala de escape que no existe.
    }

    const imagePath = `/assets/${escapeRoom.id}.jpg`;
    
    return(
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={ imagePath }
                    alt={ escapeRoom.titulo }
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>
            <div className='col-8 animate__animated animate__fadeIn'>
                <h3>{ escapeRoom.titulo }</h3>
                <hr></hr>
                <ul className="list-group list-group-flush">
                    <li className="lista-group-item"> <b> Descripción:</b> { escapeRoom.descripcion } </li>
                    <li className="lista-group-item"> <b> Categoría:</b> { escapeRoom.publisher } </li>
                    <li className="lista-group-item"> <b> Duración:</b> { escapeRoom.duracion } </li>
                </ul>

                <br></br>

                <button onClick={ handleReturn }>
                    Volver
                </button>

                <p></p>

                <button>
                    Jugar
                </button>

            </div>
        </div>
    )
}