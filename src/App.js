import React, { useEffect, useState } from 'react';
import { Navigation } from './components/Navigation';
import { PokemonCard } from './components/PokemonCard';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const LIMIT = 15;
const pokeApi = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`;

function App() {

  const [pokemonList, setPokemonList] = useState([])
  const [query, setQuery] = useState('')

  console.log(pokecard.filter(pk => pk.name.includes(query)))

  useEffect(() => {
    fetch(pokeApi)
    .then(res => res.json())
    .then((data) => {
      setPokemonList(data.results)
      // console.log(data)
    })
  }, [])

  let allCards = pokemonList.map(card => (<>
    <PokemonCard url={card.url} name={card.name}/> 
    </>))
    
  function handleSearch(){
    console.log(hi)
  }
  

  return (

    <div data-testid="app">
      <Navigation />
      <InputGroup className="mb-3" onChange={(e) => setQuery(e.target.value)}>
      <InputGroup.Text>Search</InputGroup.Text>
      <Form.Control aria-label="Search" />
      </InputGroup>
      <h1>Pokemon should appear here</h1>
      <div>{allCards}</div>
    </div>
  );
}

export { App };
