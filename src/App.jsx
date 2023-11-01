import { useState } from 'react'
import styled from '@emotion/styled'
import ImagenCripto from '/home/adrian/Escritorio/CotizadorCripto/src/img/imagen-criptos.png'
import Formulario from './components/formulario'

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media(min-width: 992px){
    display:grid;
    grid-temprate-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`

const Imagen =styled.img`
  max-width:400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display : block;
`

const Heading = styled.h1 `
 font-family: 'Lato', sans-serif;
 color: #FFF;
 text-align: center;
 font-weight: 700;
 margin-top: 80 px;
 margin-bottom: 50 px;
 font-size:34px;

 &::after{
  content: '';
  width: 100px;
  height: 6px;
  background-color: #66A2FE;
  display: block;
  margin: 10px auto 0 auto;
 }
`


function App() {


  return (
    <Contenedor>
      <Imagen
        src={ImagenCripto}
        alt="imagenes criptomonedas"
      ></Imagen>
      <Heading> Cotiza criptomonedas al instante </Heading>
      <Formulario></Formulario>

    </Contenedor>

  )
}

export default App
