/* 
 * Implementa función para acceder a cada sala de escape a partir de su id
 * y extraer la información del archivo JSON.
 */

import { escapeRooms } from '../data/escapeRooms';

export const getEscapeRoomById = ( id = '' ) => {
    return escapeRooms.find( escapeRoom => escapeRoom.id === id );
}