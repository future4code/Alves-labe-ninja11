import React, { Component } from 'react'
import IconCart from "../../assets/IconCart.png"
import axios from 'axios'
import styled from 'styled-components'

const StyleCarrinho = styled.div`
padding: 25px;
border: 1px solid black;
margin: 25px;
display: flex;
width: fit-content;
justify-content: center;
align-items: space-around;
width: 100vw;`

export default class Cart extends Component {
    state = {
        tela: true,
        quantidade: 0,
        produtos: [],
    }

    getAllJobs = () => {
        axios.get(
            'https://labeninjas.herokuapp.com/jobs', {
            headers: {
                Authorization: '19ea0a0a-b2de-4cc5-a102-54d7ed9db2fc'
            }
        }
        ).then((resposta) => {
            this.setState({ produtos: resposta.data.result.list })
        }
        ).catch((erro)=>{
            alert(erro.response.data.message)
        })
    }

    pegarValorTotal = () => {
        this.state.produtos.map((info) => {

        })
    }

    TelaCarrinho = () => {
        switch (this.state.tela) {
            case true:
                return (
                    <div>
                        <div>
                            <img
                                alt='imagem do produto opcional'
                            />
                            <p>Nome:</p>
                            <p>Preço:</p>
                            <button>Deletar</button>
                        </div>
                        <p>Quantidade: {this.state.quantidade}</p>
                        <p>Total:</p>
                        <button>Finalizar compra</button>
                        <button
                        onClick={this.getAllJobs}
                        >X</button>
                    </div>
                );
            default:
                return (
                    <div>
                        <h3>Seu carrinho está vazio </h3>
                        <img
                            src={IconCart}
                            alt='Carrinho Vazio'
                        />
                        <button>Continuar comprando</button>
                    </div>
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
