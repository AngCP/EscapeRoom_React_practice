/*
 * Muestra la lista de las salas de escape.
 */

import { EscapeRoomCard } from './EscapeRoomCard';

import { getEscapeRoomsByPublisher } from '../../selectors/getEscapeRoomsByPublisher';

/**
 * Recibe un publisher y devuelve las salas que corresponden a ese publisher.
 * Con className define los estilos de la librería Boostap (también introduce animaciones de la
 * librería Animate.css):
 * className="row row-cols-1" para que se muestre como tarjetas; row-cols-md-3 para
 * pantallas más pqueñas y g-3 para la separación entre las tarjetas.
 * animate__animated animate__fadeIn introduce una animación en las tarjetas cuando se carga la página.
 * @param {*} param0 
 * @returns 
 */
export const EscapeRoomList = ({ publisher }) => {

    const escapeRooms = getEscapeRoomsByPublisher( publisher ); //Devuelve todos las salas de escape que corresponden al publisher indicado.

    return (
        <div className="row row-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn">
            {
                escapeRooms.map( escapeRoom => (
                    <EscapeRoomCard 
                        key={ escapeRoom.id }
                        { ...escapeRoom }
                    />
                ))
            }
        </div>
    )
}