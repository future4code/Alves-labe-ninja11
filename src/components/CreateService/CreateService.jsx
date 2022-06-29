import axios from "axios";
import React, { Component } from "react";
import { baseURL, headers } from "../../constants";

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
			<div>
				<h2>Cadastre o seu serviço</h2>
				<input
					type={"text"}
					placeholder="Título do serviço"
					value={this.state.title}
					onChange={this.onChangeInputTitle}
				/>

				<input
					type={"text"}
					placeholder="Descrição do serviço"
					value={this.state.description}
					onChange={this.onChangeInputDescription}
				/>

				<input
					type={"number"}
					placeholder="Preço"
					value={this.state.price}
					onChange={this.onChangeInputPrice}
				/>

				<select
					multiple
					value={this.state.selectedPayments}
					onChange={this.onChangeSelectPayments}
				>
					<option>Cartão de crédito</option>
					<option>Cartão de débito</option>
					<option>PayPal</option>
					<option>Boleto</option>
					<option>Pix</option>
				</select>

				<input
					type="date"
					placeholder="Data do serviço"
					value={this.state.date}
					onChange={this.onChangeInputDate}
				/>

				<button onClick={this.createService}>
					Cadastrar Serviço
				</button>
			</div>
		);
	}
}
