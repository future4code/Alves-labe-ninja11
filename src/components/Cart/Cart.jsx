import React, { Component } from 'react'
import styled from 'styled-components'
import IconCart from "../../assets/IconCart.png"
import CheckIcon from "../../assets/checkIcon.png"
import IconBasket from "../../assets/iconBasket.png"
// import axios from 'axios'
// import { headers } from '../../constants'
// import { baseURL } from '../../constants'
import { DivPrincipalFinalizar } from './Styled'
import { DivPrincipalDefault } from './Styled'
import { DivLogo } from './Styled'
import { DivItemCarrinho } from './Styled'
import { DivCarrinho } from './Styled'


const StyleCarrinho = styled.div`
padding: 25px;
border: 1px solid black;
margin: 25px;
display: flex;
width: fit-content;
justify-content: center;
align-items: space-around;
width: 100vw;
`


export default class Cart extends Component {
    state = {
        tela: "",
        valorTotal: 0,
        quantidade: 0,
        servicos: [],
    }

    adicionarAoCarrinho = () => {
        //Aqui eu pegaria o valor do estado por props do APP
        //e setaria o estado servicos com esse valor
        // this.setState({servicos: })
    }

    componentDidMount = () => {
        this.carrinhoCheio()
    }


    TelaFinalizarCompra = () => {
        this.setState({ tela: "finalizar" })
    }

    removerServico = (servicoId) => {
        const novosServicos = this.state.servicos.filter((servico) => {
            if (servico.id !== servicoId) {
                return servico
            }
        })
        this.setState({ servicos: novosServicos })
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
                            {this.state.servicos.map((servico) => {
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
                            <p>Quantidade: {this.state.servicos.length}</p>
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
                            onClick={() => this.props.mudarPagina('Lista')}
                        >Continuar comprando</button>
                    </DivPrincipalDefault>
                );
        }
    }

    render() {
        return (
            <StyleCarrinho>
                {this.TelaCarrinho()}
            </StyleCarrinho>
        )
    }
}
