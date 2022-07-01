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
    paginas: 'Home'
  }

  mudarPagina = paginas => {
    this.setState({ paginas: paginas })
  }
  render() {
    const escolherPagina = () => {
      switch (this.state.paginas) {
        case 'CreateService':
          return <CreateService />
        case 'Cart':
          return <Cart mudarPagina={this.mudarPagina}/>
        case 'Lista':
          return <Lista />
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
