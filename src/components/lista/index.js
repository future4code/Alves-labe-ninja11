import axios from 'axios'
import React, { Component } from 'react'
import styled from 'styled-components'
import { headers } from '../../constants'
import { baseURL } from '../../constants'

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
    servicos: [],
    filtroPesquisar: "",
    minValor: "",
    maxValor: "",
    filtroOrdernacao: 1,
    ordemServicos: "titulo",
  }

  componentDidMount = () => {
    this.getAllJobs()
  }

  getAllJobs = () => {
    axios.get(
      `${baseURL}/jobs`,
       headers
    ).then((resposta)=>{
      return this.setState({servicos: resposta.data.jobs})
    }).catch((erro)=>{
      console.log(erro.response)
    })
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
                  <button
                  onClick={() => this.props.adicionarAoCarrinho(servico.id, servico.title, servico.description, servico.price)}
                  >Adicionar ao carrinho</button>
                </BotaoCard>
              </Card>)
          })}
      </PaginaCards>
    )
  }
}
