//PANTALLA DE LAS SALAS DE ESCAPE DEHISTORIA.

import { EscapeRoomList } from "../escapeRoom/EscapeRoomList";

export const HistoriaScreen = () => {
    return(
        <div>
            <h1>Historia</h1>
            <br></br>

            <EscapeRoomList publisher='Historia' />
        </div>
    )
}