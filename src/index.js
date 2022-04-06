import React from 'react';
import ReactDOM from 'react-dom';

import { EscapeRoomApp } from './EscapeRoomApp';

import './index.css'; //Se importa la hoja de estilos CSS.

//Aquí se renderiza:
ReactDOM.render(
    <EscapeRoomApp />,
    document.getElementById('root')
);