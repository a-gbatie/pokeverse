import React, { useEffect, useState } from 'react';
import { Navigation } from './components/Navigation';
import { PokemonCard } from './components/PokemonCard';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const LIMIT = 150;
const pokeApi = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`;

function App() {

  const [pokemonList, setPokemonList] = useState([])
  const [query, setQuery] = useState('')

  useEffect(() => {
    fetch(pokeApi)
    .then(res => res.json())
    .then((data) => {
      setPokemonList(data.results)
      // console.log(data)
    })
  }, [])

  // let allCards = pokemonList.map(card => (<>
  //   <PokemonCard url={card.url} name={card.name}/> 
  //   </>))
    
  function handleSearch(e){
    setQuery(e.target.value)
    // console.log(hi)
  }
  

  return (
    <Container>
      <div data-testid="app">
        <Navigation />
        <InputGroup className="mb-3" >
        <InputGroup.Text>Search</InputGroup.Text>
        <Form.Control aria-label="Search" onChange={handleSearch} />
        </InputGroup>
        <h1>Pokemon should appear here</h1>
        {/* <div>{allCards}</div> */}
        <Row>
          {pokemonList.filter(card => card.name.toLowerCase().includes(query.toLowerCase())).map(card => (
            <Col>
              <PokemonCard key={card.name} url={card.url} name={card.name} />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}



export { App };
