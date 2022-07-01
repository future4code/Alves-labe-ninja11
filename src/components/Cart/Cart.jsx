import React, { Component } from 'react'
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
import styled from 'styled-components'

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
        tela: "cheio",
        quantidade: 0,
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
        ],
    }

    TelaFinalizarCompra = () => {
        this.setState({ tela: "finalizar" })
    }

    removerServico = (servicoId) => {
        // const novosServicos = this.state.servicos.map((servico)=>{
        //     if (servico.id === servicoId){
        //         return (
        //             this.state.servicos.splice(servico.id)
        //         )
        //     }
        // }).filter((servico) => servico)
        // this.setState({servicos: novosServicos})
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
                                            onClick={()=> this.removerServico(servico.id)}
                                            >Deletar</button>
                                        </div>
                                    </DivItemCarrinho>)
                            })}
                        </div>
                        <div>
                            <p>Quantidade: {this.state.servicos.length}</p>
                            <p>Total:</p>
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
                            enviamos uma confirmação de data e horário para o seu e-mail cadastrado.</h4>
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
                        <button>Continuar comprando</button>
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
