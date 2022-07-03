import React, { Component } from 'react'
import Header from './components/Header/Header'
import CreateService from './components/CreateService/CreateService'
import Cart from './components/Cart/Cart'
import Footer from './components/Footer/Footer'
import styled from 'styled-components'
import Home from './components/home/index'
import Lista from './components/lista'
import IconCart from "./assets/IconCart.png"
import CheckIcon from "./assets/checkIcon.png"
import IconBasket from "./assets/iconBasket.png"


 const DivPrincipalDefault = styled.div`
    /* display: flex;
    flex-direction: column;
    justify-content: center; */

`

 const DivPrincipalFinalizar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin: 0 15% 0 15%;
    padding: 5% 10% 5% 10%;
    border-left: solid #2980b9 10px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    box-shadow: 10px 5px 15px gray;
    font-family: Verdana, Tahoma, sans-serif;
    font-size: 14px;
`
const DivLogo = styled.div`
    display: flex;
    flex-direction: column;
    justify-self: center;
    align-items: center;
`
const DivCarrinho = styled.div`
    display: grid;
    grid-template-columns: 70% 30%;
    width: 100%;
`

const DivItemCarrinho = styled.div`
    display: grid;
    grid-template-columns: 200px 200px 50px;
    background-color: #2980b920;
    margin: 20px 0 20px 0;
`

export default class App extends Component {
  state = {
    paginas: 'Home',
    carrinho: [],
    quantidade: 0,
    tela: "",
    valorTotal: 0,
    servicos: [],
  }

  componentDidUpdate = () => {
    console.log(this.state.carrinho)
  }

  mudarPagina = paginas => {
    this.setState({ paginas: paginas })
  }
  adicionarAoCarrinho = (id, title, description, price) => {
    const novoProduto = {
      "id": id,
      "title": title,
      "description": description,
      "price": price
    }
    const novoCarrinho = [...this.state.carrinho, novoProduto]
    this.setState({ carrinho: novoCarrinho, quantidade: +1, tela: "cheio" })
  }


componentDidMount = () => {
    this.carrinhoCheio()
}


TelaFinalizarCompra = () => {
    this.setState({ tela: "finalizar" })
}

removerServico = (servicoId) => {
    const novosServicos = this.state.carrinho.filter((servico) => {
        if (servico.id !== servicoId) {
            return servico
        }
    })
    this.setState({ carrinho: novosServicos, quantidade: -1 })
}

carrinhoCheio = () => {
    if(this.state.quantidade === 0){
        return(this.setState({tela: ""}))
    }else{
        return(this.setState({tela: "cheio"}))
    }
}
  TelaCarrinho = () => {
    switch (this.state.tela) {
      case "cheio":
        return (
          <DivCarrinho>
            <div>
              {this.state.carrinho.map((servico) => {
                return (
                  <DivItemCarrinho key={servico.id}>
                    <div>
                      <img
                        src={IconBasket}
                        alt='imagem do produto opcional'
                      />
                    </div>
                    <div>
                      <p>{servico.title}</p>
                      <p>{servico.description}</p>
                      <p>Valor: R${servico.price}</p>
                    </div>
                    <div>
                      <button
                        onClick={() => this.removerServico(servico.id)}
                      >Deletar</button>
                    </div>
                  </DivItemCarrinho>)
              })}
            </div>
            <div>
              <p>Quantidade: {this.state.carrinho.length}</p>
              <p>Total: R${this.state.valorTotal}</p>
              <button
                onClick={this.TelaFinalizarCompra}
              >Finalizar compra</button>
            </div>

          </DivCarrinho>
        );
      case "finalizar":
        return (
          <DivPrincipalFinalizar>
            <DivLogo>
              <img src={CheckIcon}
                alt="Icone Check"
              />
              <h2>Compra realizada!</h2>
            </DivLogo>
            <h4>A LabeNinja agradece sua preferência!</h4>
            <h4>Falta pouco para você aproveitar dos serviços contratados, <br />
              confirme a data e horário que enviamos para o seu e-mail<br />
              para que nossa equipe possa estar realizando o serviço.</h4>
            <h4>Qualquer dúvida entre em contato conosco:</h4>
            <p>atentimentoaocliente@labeninjas.com</p>
          </DivPrincipalFinalizar>
        )

      default:
        return (
          <DivPrincipalDefault>
            <h3>Seu carrinho está vazio </h3>
            <img
              src={IconCart}
              alt='Carrinho Vazio'
            />
            <button
              onClick={() => this.mudarPagina('Lista')}
            >Continuar comprando</button>
          </DivPrincipalDefault>
        );
    }
  }
  render() {
    const escolherPagina = () => {
      switch (this.state.paginas) {
        case 'CreateService':
          return <CreateService />
        case 'Cart':
          return this.TelaCarrinho()
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
