import axios from "axios";
import React, { Component } from "react";
import styled from "styled-components";
import { baseURL, headers } from "../../constants";

const CadastrarSev = styled.section`
	width: 253px;
	height: 400;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 10px;
	justify-content: center;
	background-color: #3580b3;
	margin-top: 20px;
	border-radius: 10px;
	margin-bottom: 20px;
	box-shadow: 5px 4px 4px #2980b9;
`;

const ConteinerCad = styled.div`
	display: flex;
	width: fit-content;
	justify-content: center;
	align-items: space-around;
	width: 100vw;
`;

const StyleInput = styled.input`
  min-width: 230px;
  border-radius: 22px;
  border: 2px blueviolet solid;
  padding: 5px;
  margin: 0px 0px 12px -5px;
`
const StyleSelect = styled.select`
 min-width: 240px;
  border-radius: 5px;
  border: 2px blueviolet solid;
  padding: 5px;
  margin: 0px 0px 12px -5px;
  ::-webkit-scrollbar{
	background-color:white;
	width: 9px;
	border-radius: 3px;
  }
  ::-webkit-scrollbar-thumb{
	background-color:#3580b3;
	border-radius: 3px;
	
  }
`

export default class CreateService extends Component {
	state = {
		title: "",
		description: "",
		price: "",
		selectedPayments: [],
		date: "",
	};

	onChangeInputTitle = (e) => {
		this.setState({ title: e.target.value });
	};

	onChangeInputDescription = (e) => {
		this.setState({ description: e.target.value });
	};

	onChangeInputPrice = (e) => {
		this.setState({ price: Number(e.target.value) });
	};

	onChangeSelectPayments = (e) => {
		/* 
      Foi preciso iniciar o valor do select no state como um array vázio,
      após isso foi necessário converter o event.target.selectedOptions
      que é um HTMLOptionsCollection para array usando o Array.from() e
      usar a função map para obter o valor de cada item do array criado.

      https://stackoverflow.com/questions/50090335/how-handle-multiple-select-form-in-reactjs
    */
		this.setState({
			selectedPayments: Array.from(
				e.target.selectedOptions,
				(item) => item.value
			),
		});
	};

	onChangeInputDate = (e) => {
		this.setState({ date: e.target.value });
	};

	createService = () => {
		const body = {
			title: this.state.title,
			description: this.state.description,
			price: this.state.price,
			paymentMethods: this.state.selectedPayments,
			dueDate: this.state.date,
		};

		axios
			.post(`${baseURL}/jobs`, body, headers)
			.then((response) => {
				alert(response.data.message);
				this.setState({
					title: "",
					description: "",
					price: "",
					selectedPayments: "",
					date: "",
				});
			})
			.catch((error) => {
				alert("Ocorreu um erro, tente novamente!");
				console.log(error.response.data.message);
			});
	};

	render() {
		return (
			<ConteinerCad>
				<CadastrarSev>
					<h2>Cadastre o seu serviço</h2>
					<StyleInput
						type={"text"}
						placeholder="Título do serviço"
						value={this.state.title}
						onChange={this.onChangeInputTitle}
					/>

					<StyleInput
						type={"text"}
						placeholder="Descrição do serviço"
						value={this.state.description}
						onChange={this.onChangeInputDescription}
					/>

					<StyleInput
						type={"number"}
						placeholder="Preço"
						value={this.state.price}
						onChange={this.onChangeInputPrice}
					/>

					<StyleSelect
						multiple
						value={this.state.selectedPayments}
						onChange={this.onChangeSelectPayments}
					>
						<option>Cartão de crédito</option>
						<option>Cartão de débito</option>
						<option>PayPal</option>
						<option>Boleto</option>
						<option>Pix</option>
					</StyleSelect>

					<StyleInput
						type="date"
						placeholder="Data do serviço"
						value={this.state.date}
						onChange={this.onChangeInputDate}
					/>

					<button onClick={this.createService}>
						Cadastrar Serviço
					</button>
				</CadastrarSev>
			</ConteinerCad>
		);
	}
}
