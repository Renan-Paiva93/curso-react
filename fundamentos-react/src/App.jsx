import React from "react";

import Aleatorio from "./components/Aleatorio";
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';

export default () => (
        <div id="app">
            <h1>Fundamentos React</h1>
            <Aleatorio min={10} max={60} />
            <Fragmento />
            <ComParametro
                titulo="situação do aluno"
                aluno="Renan Paiva"
                nota={9.3}
            />
            <Primeiro></Primeiro>
        </div>
);
