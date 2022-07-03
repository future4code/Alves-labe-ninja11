import React, { Component } from 'react'
import Header from './components/Header/Header'
import CreateService from './components/CreateService/CreateService'
import Cart from './components/Cart/Cart'
import Footer from './components/Footer/Footer'
import styled from 'styled-components'
import Home from './components/home/index'
import Lista from './components/lista'


export default class App extends Component {
  state = {
    paginas: 'Home',
    carrinho: [],
    quantidade: 0,
  }

  componentDidUpdate = () => {
    console.log(this.state.carrinho)
  }

  mudarPagina = paginas => {
    this.setState({ paginas: paginas })
  }
  adicionarAoCarrinho = (id,title, description, price ) => {
    const novoProduto = {
      "id": id,
      "title": title,
      "description": description,
      "price": price
    }
    const novoCarrinho = [...this.state.carrinho, novoProduto]
    this.setState({ carrinho: novoCarrinho, quantidade: +1 })
  }
  mandarServicos = () => {
    //aqui eu passaria o valor do estado por props
  }
  render() {
    const escolherPagina = () => {
      switch (this.state.paginas) {
        case 'CreateService':
          return <CreateService />
        case 'Cart':
          return <Cart mudarPagina={this.mudarPagina} />
        case 'Lista':
          return <Lista adicionarAoCarrinho={this.adicionarAoCarrinho} />
        case 'Home':
          return <Home mudarPagina={this.mudarPagina} />
      }
    }
    return (
      <div>
        <Header mudarPagina={this.mudarPagina} />
        {escolherPagina()}
        <Footer />
      </div>
    )
  }
}
