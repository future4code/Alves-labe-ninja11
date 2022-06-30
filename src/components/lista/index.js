import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  width: 400px;
  height: 200px;
  text-align: center;
  padding: 10px;
  margin: 12px;
  border-radius: 5%;
  background-color: white;
`
const PaginaCards = styled.div`
  display: flex;
  background-color: gray;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
`

const BotaoCard = styled.div`
  border: 1px;
  justify-content: center;
`
const CampoInput = styled.div`
  display: flex;
  flex-direction: row;
  height: 1.5rem;
  margin: 24px;
  justify-content: space-around;
`

const Lista = () => {
  return (
    <PaginaCards>
      <CampoInput>
        <input placeholder="Valor minimo"></input>
        <input placeholder="Valor Maximo"></input>
        <input placeholder="Pesquisar"></input>
        <select>
          <option>Sem filtro</option>
          <option>a</option>
          <option>b</option>
          <option>b</option>
          <option>c</option>
        </select>
      </CampoInput>
      <Card>
        <h1>Card de informação</h1>
        <div>
          <h3>info1</h3>
          <h3>info2</h3>
        </div>
        <BotaoCard>
          <button>Visualizar</button>
          <button>Adiciona ao carrinho</button>
        </BotaoCard>
      </Card>
    </PaginaCards>
  )
}

export default Lista
