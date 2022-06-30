import React, { Component } from 'react'
import styled from 'styled-components'

const StyleHead = styled.div`
display: flex;
background-color: #2980b9;
flex-direction: row;
justify-content: space-around;
width: 100vw;
align-items: center;
`
const StyleButton = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 40px;
`
const BotaoHeader = styled.button`
    color: white;
    background-color:  #3197dc;
    border: none;
    border-radius: 7px;
`



 
const Header = (props) => {
    return (
      <StyleHead>
        <h2>Logo-Labeninjas</h2>
          <StyleButton>

            <BotaoHeader>Home</BotaoHeader>
            <BotaoHeader  onClick={() => props.mudarPagina('Cart')}>Carrinho</BotaoHeader>
        </StyleButton>
      </StyleHead>
    )
  
}

export default Header