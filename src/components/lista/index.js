import axios from 'axios'
import React, { Component } from 'react'
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



export default class Lista extends Component {
  state = {
    servicos: [
      {
        "id": "136e6826-ac86-4765-a3d6-669775c0dda9",
        "title": "Desenvolvedor Front-End",
        "description": "Desenvolver web sites para empresas",
        "price": 4500,
        "paymentMethods": [
          "Pix",
          "PayPal"
        ],
        "dueDate": "2022-12-30T00:00:00.000Z",
        "taken": false
      },
      {
        "id": "425068f4-5c5a-4abd-a33b-4aeab539c092",
        "title": "Jardineiro",
        "description": "jardineiro",
        "price": 200,
        "paymentMethods": [
          "Cartão de crédito",
          "Cartão de débito",
          "PayPal",
          "Boleto",
          "Pix"
        ],
        "dueDate": "2023-03-03T00:00:00.000Z",
        "taken": false
      }
      ,
      {
        "id": "6e6c2274-f9be-4ef8-8774-11a39765d223",
        "title": "Pintor",
        "description": "pintor",
        "price": 230,
        "paymentMethods": [
          "Cartão de crédito",
          "Cartão de débito",
          "PayPal",
          "Boleto"
        ],
        "dueDate": "2024-03-03T00:00:00.000Z",
        "taken": false
      },
    ],
    filtroPesquisar: "",
    minValor: "",
    maxValor: "",
    filtroOrdernacao: 1,
    ordemServicos: "titulo",
  }

  updateQuery = (event) => {
    this.setState({
      filtroPesquisar: event.target.value
    })
  }

  updateMinPrice = (event) => {
    this.setState({
      minValor: event.target.value
    })
  }

  updateMaxPrice = (event) => {
    this.setState({
      maxValor: event.target.value
    })
  }

  updateSortingParameter = (event) => {
    this.setState({
      ordemServicos: event.target.value
    })
  }

  updateOrdem = (event) => {
    this.setState({
      filtroOrdernacao: event.target.value
    })

  }

  render() {
    return (
      <PaginaCards>
        <CampoInput>
          <input
            type="number"
            placeholder="Valor minimo"
            value={this.state.minValor}
            onChange={this.updateMinPrice}

          />
          <input
            type="number"
            placeholder="Valor Maximo"
            value={this.state.maxValor}
            onChange={this.updateMaxPrice}
          />
          <input
            placeholder="Pesquisar"
            value={this.state.filtroPesquisar}
            onChange={this.updateQuery}
          />
          <label for="sort"></label>
          <select
            name="sort"
            value={this.state.ordemServicos}
            onChange={this.updateSortingParameter}
          >
            <option value={"nome"}>Título</option>
            <option value={"valor"}>Valor</option>
          </select>
          <select
            name="ordenacao"
            value={this.state.filtroOrdernacao}
            onChange={this.updateOrdem}
          >
            <option value={1}>Crescente</option>
            <option value={-1}>Decrescente</option>
          </select>
        </CampoInput>
        {this.state.servicos.filter((servico) => {
          return servico.title.toLowerCase().includes(this.state.filtroPesquisar.toLowerCase()) || servico.description.toLowerCase().includes(this.state.filtroPesquisar.toLocaleLowerCase())
        })
          .filter((servico) => {
            return this.state.minValor === '' || servico.price >= this.state.minValor
          })
          .filter((servico) => {
            return this.state.maxValor === "" || servico.price <= this.state.maxValor
          })
          .sort((valor1, valor2) => {
            switch (this.state.ordemServicos) {
              case 'nome':
                return this.state.filtroOrdernacao * (valor1.title.localeCompare(valor2.title))
              default:
                return this.state.filtroOrdernacao * (valor1.price - valor2.price)
            }
          })
          .map((servico) => {
            return (
              <Card key={servico.id}>
                <h1>Card de informação</h1>
                <div>
                  <h3>{servico.title}</h3>
                  <h3>{servico.description}</h3>
                  <h4>Valor: R${servico.price}</h4>
                </div>
                <BotaoCard>
                  <button>Visualizar</button>
                  <button>Adiciona ao carrinho</button>
                </BotaoCard>
              </Card>)
          })}
      </PaginaCards>
    )
  }
}


// export const Lista = () => {
//   return (
    // <PaginaCards>
    //   <CampoInput>
    //     <input placeholder="Valor minimo"></input>
    //     <input placeholder="Valor Maximo"></input>
    //     <input placeholder="Pesquisar"></input>
    //     <select>
    //       <option>Sem filtro</option>
    //       <option>a</option>
    //       <option>b</option>
    //       <option>b</option>
    //       <option>c</option>
    //     </select>
    //   </CampoInput>
    //   <Card>
    //     <h1>Card de informação</h1>
    //     <div>
    //       <h3>info1</h3>
    //       <h3>info2</h3>
    //     </div>
    //     <BotaoCard>
    //       <button>Visualizar</button>
    //       <button>Adiciona ao carrinho</button>
    //     </BotaoCard>
    //   </Card>
    // </PaginaCards>
//   )
// }


