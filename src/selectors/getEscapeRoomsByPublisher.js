/* 
 * Implementa función para acceder a cada sala de escape a partir de su publisher
 * y extraer la información del archivo JSON.
 */

import { escapeRooms } from '../data/escapeRooms';

//Función getEscapeRoomsByPublicher():
    /**
     * Devuelve las salas de escape que cumplan con la condición que se le
     * introduzca por parámetro y que será un determinado publisher:
     */
export const getEscapeRoomsByPublisher = ( publisher ) => {

    const validPublishers = ['Historia', 'Ciencia Ficcion'];
    if( !validPublishers.includes( publisher ) ) {
        throw new Error( `${ publisher } is not a valid publisher` );
    }

    return escapeRooms.filter( escapeRoom => escapeRoom.publisher === publisher );
}