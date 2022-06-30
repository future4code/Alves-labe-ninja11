import React, { Component } from 'react'
import Header from './components/Header/Header'
import CreateService from './components/CreateService/CreateService'
import Cart from './components/Cart/Cart'
import Footer from './components/Footer/Footer'
import styled from 'styled-components'

const BotoesHome = styled.div`
  margin: 10px;
`

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <CreateService />
        <BotoesHome>
          <button>Quero ser um ninja</button>
          <button>Contratar um ninja</button>
        </BotoesHome>
        {/* <Cart /> */}
        <Footer />
      </div>
    )
  }
}
