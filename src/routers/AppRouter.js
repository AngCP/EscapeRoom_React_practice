//CONTROL DE LAS RUTAS.

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';

//Se van definiendo las rutas para acceder a las disitnas páginas de la aplicación:
    /**
     * De van definiendo los Route que son las rutas que llevan a las distintas páginas de la
     * aplicación.
     * Todos estos Route se integran dentro de un Routes y dentro de un BrowserRouter.
     */
export const AppRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/*" element={ <DashboardRoutes /> } />
            </Routes>
        </BrowserRouter>
    )
}