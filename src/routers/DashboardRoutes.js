//CONTROL DE LAS RUTAS.

import { Routes, Route } from 'react-router-dom';
import { Navbar } from "../components/ui/Navbar";
import { HistoriaScreen } from '../components/historia/HistoriaScreen';
import { CienciaFiccionScreen } from '../components/cienciaFiccion/CienciaFiccionScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { EscapeRoomScreen } from "../components/escapeRoom/EscapeRoomScreen";

//className='container' deja cierto margen a izquierda y derecha.
export const DashboardRoutes = () => {
    return(
        <>
            <Navbar />
            <div className='container'>
                <Routes>
                    <Route path="marvel" element={<CienciaFiccionScreen />} />
                    <Route path="dc" element={<HistoriaScreen />} />

                    <Route path="search" element={<SearchScreen />} />
                    <Route path="escapeRoom/:escapeRoomId" element={<EscapeRoomScreen />} />

                    <Route path="/" element={<CienciaFiccionScreen />} />
                </Routes>
            </div>      
        </>
    )
}