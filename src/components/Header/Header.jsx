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
`


 
const Header = (props) => {
    return (
      <StyleHead>
        <h2>Logo-Labeninjas</h2>
          <StyleButton>
            <button onClick={() => props.mudarPagina('Home')}>Home</button>
            <button  onClick={() => props.mudarPagina('Cart')}>Carrinho</button>
        </StyleButton>
      </StyleHead>
    )
  
}

export default Header