import React, { Component } from 'react'
import styled from 'styled-components'
import iconHeader from '../../assets/logoBranco.png'

const StyleHead = styled.div`
display: flex;
background-color: #2980b9;
flex-direction: row;
justify-content: space-around;
width: 100vw;
align-items: baseline;
padding-top: 20px;

`
const StyleButton = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 40px;
padding-bottom: 5px;

`
const BotaoHeader = styled.button`
    color: white;
    background-color:  #3197dc;
    border: none;
    border-radius: 7px;
    &:hover {
    background-color: lightblue;
  }
`



 
const Header = (props) => {
    return (
      <StyleHead>
        <img src={iconHeader}></img>>
          <StyleButton>

            <BotaoHeader onClick={() => props.mudarPagina('Home')}>Home</BotaoHeader>
            <BotaoHeader  onClick={() => props.mudarPagina('Cart')}>Carrinho</BotaoHeader>
        </StyleButton>
      </StyleHead>
    )
  
}

export default Header