import React from 'react';
import pokemons from './data';
import PokemonsData from './Pokemon';


class Pokedex extends React.Component {
  render() {
    return <>
      {pokemons.map(poke =>
        <PokemonsData
          key={poke.id}
          name={poke.name}
          type={poke.type}
          averageWeight={poke.averageWeight.value}
          measurementUnit={poke.averageWeight.measurementUnit}
          image={poke.image}
        />
      )}
    </>
  }
}

export default Pokedex;