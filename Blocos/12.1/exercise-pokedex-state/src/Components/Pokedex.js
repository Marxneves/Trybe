import React from 'react';
import Button from './Button';
import Pokemon from './Pokemon';
import pokemons from '../data';
import './pokedex.css'

class Pokedex extends React.Component {
	constructor() {
		super();

		this.state = {
			number: 0,
			type: 'All'
		}

		this.nextPokemon = this.nextPokemon.bind(this);
		this.filterType = this.filterType.bind(this);
	}

	nextPokemon() {
		if (this.state.number >= this.props.pokemons.filter(((pokemon) => (this.state.type !== 'All') ? pokemon.type === this.state.type : pokemon)).length - 1) {
			this.setState({
				number: 0
			})
		} else {
			this.setState((estadoAnterior) => ({
				number: estadoAnterior.number + 1
			}))
		}
	}

	async filterType(state) {
		await this.setState({
			type: state.type,
			number: 0
		})
		if ((this.props.pokemons.filter(((pokemon) => (this.state.type !== 'All') ? pokemon.type === this.state.type : pokemon)).length - 1) < 1) {
			const btn = document.querySelector('.next-button');
			btn.disabled = true;
			btn.className += ' disabled-btn'
		} else {
			const btn = document.querySelector('.next-button');
			btn.disabled = false;
			btn.className = 'next-button'
		}
	}

	render() {
		const poke = this.props.pokemons;
		const num = this.state.number;
		const type = this.state.type
		const pokemontypes = pokemons.map((pokemon) => pokemon.type);
		const types = ['All', ...new Set(pokemontypes)];

		return (
			<div>
				<div className="pokedex">
					{poke.filter(((pokemon) => (type !== 'All') ? pokemon.type === type : pokemon))
						.filter(((_, index) => num === index))
						.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
				</div>
				<div>
					{types.map(type => <Button key={type} stateCallback={this.filterType}>{type}</Button>)}
				</div>
				<button className="next-button" onClick={this.nextPokemon}>Próximo pokemon</button>
			</div>
		);
	}
}

export default Pokedex;