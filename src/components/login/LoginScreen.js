/* 
 * PANTALLA DE LOGIN.
 * Esta pantalla está pensada para que el usuario realice el login para
 * entrar en la app web y acceder a las distintas salas de escape.
 * Esta parte no se ha implementado a efectos del preente trabajo de modo que
 * simplemente se ha incluido un botón "login" que tras ser pulsado conduce
 * a la página principal en donde habrá un botón "logout" que tras ser pulsado devuelve
 * a esta página de login.
 */

import { useNavigate } from "react-router-dom"

/* 
 * Con className define los estilos de la librería Boostap.
 * Utiliza el hook useNavigate.
 */
export const LoginScreen = () => {
    
    //Se utiliza un Hook (useNavigate) que permite navegar a otras pantallas.
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/', {
            replace: true //Impide volver a la ruta anterior.
        }); //Va a esta ruta.
    }
    
    return(
        <div className="container mt-5">
            <h1>Login Screen</h1>
            <hr />

            <button 
                onClick={ handleLogin }
                >
                    Login
            </button>
        </div>
    ) //mt = margin to.
}