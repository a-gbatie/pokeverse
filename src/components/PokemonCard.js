import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';

function PokemonCard({ url, name }) {
  const [pokecard, setPokeCard] = useState([])


  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then((data) => {
      setPokeCard(data)
      // console.log(data)
      console.log(data.sprites.front_default)
    })
  }, [])

  const getAbility = pokecard?.abilities?.map(powers => (
      <ul><li>{powers.ability.name}</li></ul>
      )) 

  

  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top"  src={pokecard?.sprites?.front_default} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text> Abilities:
          {getAbility}
        </Card.Text>
      </Card.Body>
    </Card>
    </>
  );
  
}

export { PokemonCard };
