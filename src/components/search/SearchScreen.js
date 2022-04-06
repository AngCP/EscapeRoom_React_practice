/* 
 * PÁGINA DE BÚSQUEDA:
 * Cuenta con 2 partes: una para la búsqueda y otra para mostrar los resultados.
 * La de búsqueda tiene un campo de texto y un botón que inicia la búsqueda.
 * La de resultados muestra el resultado de la búsqueda. Mientras no se haya
 * introducido nada en el campo de texto, muestra el mensaje "Buscar una sala de escape".
 */

import { useNavigate, useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { getEscapeRoomsByName } from '../../selectors/getEscapeRoomsByName';
import { EscapeRoomCard } from '../escapeRoom/EscapeRoomCard';

/* 
 * Con className define los estilos de la librería Boostap.
 * Define el formato de las queries si el usuario decide introducir la ruta directamente.
 * Utiliza los hooks useNavigate, useLocation y useForm.
 */
export const SearchScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = ''} = queryString.parse(location.search);

    const [ formaValues, handleInputChange ] = useForm({
        searchText: q,
    });

    const { searchText } = formaValues;

    const escapeRoomsFiltered = useMemo( () => getEscapeRoomsByName(q), [q] );

    const handleSearch = (event) => {
        event.preventDefault();
        navigate(`?q=${ searchText }`);
    }

    return(
        <>
            <h1>Buscar</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Buscar</h4>
                    <hr />

                    <form onSubmit={ handleSearch }>
                        <input
                            type="text"
                            placeholder="Buscar una sala de escape"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={ searchText }
                            onChange={ handleInputChange }
                        />
                        <br></br>
                        <button
                            type="submit">
                            Buscar
                        </button>

                    </form>
                </div>
                <div className='col-7'>
                    <h4>Resultados</h4>
                    <hr />

                    {
                        (q === '')
                        ? <div className="alert alert-info"> Buscar una sala de escape </div>
                        : ( escapeRoomsFiltered.length === 0 ) && <div className="alert alert-danger"> No hay resultados: { q } </div>
                    }

                    {
                        escapeRoomsFiltered.map(escapeRoom => (
                            <EscapeRoomCard
                                key={ escapeRoom.id }
                                { ...escapeRoom }
                            />
                        ))
                    }

                </div>
            </div>
        </>
    )
}