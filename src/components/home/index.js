import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

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

const Home = props => {
  return (
    <StyleHome>
      <BotoesHome>
        <div>
          <button onClick={() => props.mudarPagina('CreateService')}>
            Quero ser um ninja
          </button>
        </div>
        <div>
          <button>Contratar um ninja</button>
        </div>
      </BotoesHome>
    </StyleHome>
  )
}

export default Home
