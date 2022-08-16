import React from "react";

import Card from "./components/layout/Card"
import Aleatorio from "./components/Aleatorio";
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';

export default () => (
    <div id="app">
        <h1>Fundamentos React</h1>

        <Card titulo="#04 - Desafio aleatório">
            <Aleatorio min={10} max={60} />
        </Card>

        <Card titulo="#03- Fragmento">
            <Fragmento />
        </Card>

        <Card titulo="#02 - Com Parâmetro">
            <ComParametro
                titulo="situação do aluno"
                aluno="Renan Paiva"
                nota={9.3}
            />
        </Card>

        <Card titulo="#01 - Primeiro Componente">
            <Primeiro></Primeiro>
        </Card>
    </div>
);
