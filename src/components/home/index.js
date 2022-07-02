import React from 'react'
import styled from 'styled-components'
// import axios from 'axios'

const BotoesHome = styled.div`
  display: flex;
  flex-direction: row;
  width: 500px;
  height: 100px;
  align-items: center;
  justify-content: center;
  justify-content: space-around;
`
const StyleHome = styled.div`
  width: 100vw;
  height: 50vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

const BotaoHome = styled.button`
  background-color: #2980b9;
  border-radius: 4px;
  color: white;
  width: 200px;
  height: 40px;
  font-size: 20px;
  border: none;
  box-shadow: 5px 4px 4px #2980b9;
  &:hover{
    width: 205px;
    height: 45px;
    transition: 0.3s;
   };
  `

const Home = props => {
  return (
    <StyleHome>
      <BotoesHome>
        <div>
          <BotaoHome onClick={() => props.mudarPagina('CreateService')}>
            Quero ser um ninja
          </BotaoHome>
        </div>
        <div>
          <BotaoHome onClick={() => props.mudarPagina('Lista')}>
            Contratar um ninja
          </BotaoHome>
        </div>
      </BotoesHome>
    </StyleHome>
  )
}

export default Home
