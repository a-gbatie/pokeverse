import React, { useEffect, useState } from 'react';
import { Navigation } from './components/Navigation';
import { PokemonCard } from './components/PokemonCard';

const LIMIT = 5;
const pokeApi = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`;

function App() {

  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
    fetch(pokeApi)
    .then(res => res.json())
    .then((data) => {
      setPokemonList(data.results)
      // console.log(data)
    })
  }, [])

  // Object.keys(pokemonList)
  let allCards = pokemonList.map(card => (<>
    <PokemonCard url={card.url} name={card.name}/> 
    </>))
  

  return (

    <div data-testid="app">
      <Navigation />

      <h1>Pokemon should appear here</h1>
      <div>{allCards}</div>
    </div>
  );
}

export { App };
