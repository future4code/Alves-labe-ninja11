import React, { Component } from 'react'

export default class CreateService extends Component {
  render() {
    return (
      <div>
        <h2>Cadastre o seu serviço</h2>
        <input type={"text"} placeholder="Título"/>
        <input type={"text"} placeholder="Descrição"/>
        <input type={"number"} placeholder="Preço"/>

        <select multiple>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
          <option>PayPal</option>
          <option>Boleto</option>
          <option>Pix</option>
        </select>

        <input type="date" />
        <button>Cadastrar Serviço</button>
      </div>
    )
  }
}
