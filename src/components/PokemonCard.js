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

  return (
    <>
    <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top"  src={pokecard.sprites.front_default} /> */}
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {pokecard?.abilities.ability.map(powers => (
              <ul>{powers.name}</ul>
          ))}
          <p>text about ldaskf la h</p>
        </Card.Text>
      </Card.Body>
    </Card>
    </>
  );
}

export { PokemonCard };
