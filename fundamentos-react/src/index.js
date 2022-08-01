import ReactDom from 'react-dom'
import React from 'react'
import './index.css'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'

ReactDom.render(
    <div id="app">
        <Primeiro></Primeiro> 
        <ComParametro 
            titulo="situação do aluno" 
            aluno="Renan Paiva" 
            nota={ 9.3 }/>
    </div>,
    document.getElementById('root')
     )