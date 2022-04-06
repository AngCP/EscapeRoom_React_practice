/* 
 * Implementa función para acceder a cada sala de escape a partir de su nombre
 * y extraer la información del archivo JSON.
 */

import { escapeRooms, escRooms } from '../data/escapeRooms';

export const getEscapeRoomsByName = ( name = '' ) => {

    if( name.length === 0 ){

        return [];
    }
    name = name.toLocaleLowerCase();

    return escapeRooms.filter(escapeRoom => escapeRoom.titulo.toLowerCase().includes(name));

}