import React, { Component } from 'react'
import styled from 'styled-components'
import iconHeader from '../../assets/logoBranco.png'
import LogoPreto from '../../assets/LogoPretoNew.png'

const StyleHead = styled.div`
display: flex;
background-color: #2980b9;
flex-direction: row;
justify-content: space-between;
width: 99vw;
align-items: baseline;
padding-top: 20px;

`
const StyleButton = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 40px;
margin-right: 100px;
margin-bottom: 10px;
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
const LogoHeader = styled.img`
    width: 90px;
`
const StyleLogo = styled.div`
 
  display: flex;
  align-items: center;
  margin-left: 50px;
  gap: 25px;
`


 
const Header = (props) => {
    return (
      <StyleHead>
        <StyleLogo>
           <LogoHeader src={LogoPreto}></LogoHeader>
           <img src={iconHeader}></img>
        </StyleLogo>
          <StyleButton>

            <BotaoHeader onClick={() => props.mudarPagina('Home')}>Home</BotaoHeader>
            <BotaoHeader  onClick={() => props.mudarPagina('Cart')}>Carrinho</BotaoHeader>
        </StyleButton>
      </StyleHead>
    )
  
}

export default Header