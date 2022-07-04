import axios from "axios";
import React, { Component } from "react";
import styled from "styled-components";
import { headers } from "../../constants";
import { baseURL } from "../../constants";

const SectionCard = styled.div`
	display: flex;
	flex-direction: row;
`;

const Card = styled.div`
	display: flex;
	flex-direction: column;
	width: 300px;
	height: 250px;
	text-align: center;
	padding: 10px;
	margin: 12px;
	border-radius: 5%;
	background-color: #3580b3;
	box-shadow: 5px 4px 4px #2980b9;
	font-family: "Roboto Condensed", sans-serif;
`;
const PaginaCards = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	flex-wrap: wrap;
	align-items: center;

	justify-content: center;
	background-color: white;

	.container-cards {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
`;

const BotaoCard = styled.div`
	border: 1px;
	justify-content: center;
	display: flex;
	gap: 10px;
`;
const Botao = styled.button`
	background-color: white;
	border-radius: 4px;
	color: black;
	width: 100px;
	height: 30px;
	font-size: 10px;
	border: none;
	&:hover {
		background-color: lightblue;
	}
`;
const CampoInput = styled.div`
	display: flex;
	flex-direction: row;
	height: 1.5rem;
	margin: 24px;
	justify-content: space-around;
`;
const TituloServico = styled.h3`
	font-size: 25px;
	font-weight: 800;
`;
const DescricaoTexto = styled.h4`
	font-size: 15px;
`;

export default class Lista extends Component {
	state = {
		servicos: [],
		filtroPesquisar: "",
		minValor: "",
		maxValor: "",
		filtroOrdernacao: 1,
		ordemServicos: "titulo",
	};

	componentDidMount = () => {
		this.getAllJobs();
	};

	getAllJobs = () => {
		axios
			.get(`${baseURL}/jobs`, headers)
			.then((resposta) => {
				return this.setState({ servicos: resposta.data.jobs });
			})
			.catch((erro) => {
				console.log(erro.response);
			});
	};

	updateQuery = (event) => {
		this.setState({
			filtroPesquisar: event.target.value,
		});
	};

	updateMinPrice = (event) => {
		this.setState({
			minValor: event.target.value,
		});
	};

	updateMaxPrice = (event) => {
		this.setState({
			maxValor: event.target.value,
		});
	};

	updateSortingParameter = (event) => {
		this.setState({
			ordemServicos: event.target.value,
		});
	};

	updateOrdem = (event) => {
		this.setState({
			filtroOrdernacao: event.target.value,
		});
	};

	render() {
		return (
			<PaginaCards>
				<CampoInput>
					<input
						type="number"
						placeholder="Valor minimo"
						value={this.state.minValor}
						onChange={this.updateMinPrice}
					/>
					<input
						type="number"
						placeholder="Valor Maximo"
						value={this.state.maxValor}
						onChange={this.updateMaxPrice}
					/>
					<input
						placeholder="Pesquisar"
						value={this.state.filtroPesquisar}
						onChange={this.updateQuery}
					/>
					<label for="sort"></label>
					<select
						name="sort"
						value={this.state.ordemServicos}
						onChange={this.updateSortingParameter}
					>
						<option value={"nome"}>Título</option>
						<option value={"valor"}>Valor</option>
					</select>
					<select
						name="ordenacao"
						value={this.state.filtroOrdernacao}
						onChange={this.updateOrdem}
					>
						<option value={1}>Crescente</option>
						<option value={-1}>Decrescente</option>
					</select>
				</CampoInput>

				<div className="container-cards">
					{this.state.servicos
						.filter((servico) => {
							return (
								servico.title
									.toLowerCase()
									.includes(
										this.state.filtroPesquisar.toLowerCase()
									) ||
								servico.description
									.toLowerCase()
									.includes(
										this.state.filtroPesquisar.toLocaleLowerCase()
									)
							);
						})
						.filter((servico) => {
							return (
								this.state.minValor === "" ||
								servico.price >= this.state.minValor
							);
						})
						.filter((servico) => {
							return (
								this.state.maxValor === "" ||
								servico.price <= this.state.maxValor
							);
						})
						.sort((valor1, valor2) => {
							switch (this.state.ordemServicos) {
								case "nome":
									return (
										this.state.filtroOrdernacao *
										valor1.title.localeCompare(valor2.title)
									);
								default:
									return (
										this.state.filtroOrdernacao *
										(valor1.price - valor2.price)
									);
							}
						})
						.map((servico) => {
							return (
								<SectionCard>
									<Card key={servico.id}>
										<div>
											<TituloServico>{servico.title}</TituloServico>
											<DescricaoTexto>
												{servico.description}
											</DescricaoTexto>
											<h4>Valor: R${servico.price}</h4>
										</div>
										<BotaoCard>
											<Botao>Visualizar Detalhes</Botao>
											<Botao
												onClick={() =>
													this.props.adicionarAoCarrinho(
														servico.id,
														servico.title,
														servico.description,
														servico.price
													)
												}
											>
												Adicionar ao carrinho
											</Botao>
										</BotaoCard>
									</Card>
								</SectionCard>
							);
						})}
				</div>
			</PaginaCards>
		);
	}
}
