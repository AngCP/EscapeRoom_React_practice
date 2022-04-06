/* 
 * PANTALLA DE LAS SALAS DE ESCAPE DE CIENCIA FICCIÓN.
 * Además, esta es la página que se abre por defecto una vez que el
 * usuario se ha logueado.
 */

import { EscapeRoomList } from "../escapeRoom/EscapeRoomList";

export const CienciaFiccionScreen = () => {
    return(
        <div>
            <h1>Ciencia Ficción</h1>
            <br></br>

            <EscapeRoomList publisher='Ciencia Ficcion' />
        </div>
    )
}