import React, { useState } from 'react';
import axios from 'axios';

import Header from './Header';
import Entry from './Entry';
import BottomTxtArea from './BottomTxtArea';
import TextScreen from './TextScreen';

const Body = () => {
  const [pokemon, setPokemon] = useState(null);
  const [searchInput, setSearchInput] = useState('');

  const apiURL = 'https://pokeapi.co/api/v2/pokemon/';

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchInput) {
      var url = apiURL + searchInput.toLowerCase();
    } else {
      return;
    }

    axios.get(url).then((data) => {
      setPokemon(data.data);
    });
    setSearchInput('');
  };

  const getRandom = (e) => {
    e.preventDefault();
    var number = Math.floor(Math.random() * 898) + 1;
    var randomUrl = apiURL + number.toString();

    axios.get(randomUrl).then((data) => {
      setPokemon(data.data);
    });
  };

  const getNext = (e) => {
    e.preventDefault();
    if (pokemon) {
      if (pokemon.id <= 898) {
        var next = pokemon.id + 1;
        var nextUrl = apiURL + next.toString();
      } else return;
    } else return;
    axios.get(nextUrl).then((data) => {
      setPokemon(data.data);
    });
  };

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <>
      <Header
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        getRandom={getRandom}
        getNext={getNext}
      />

      {pokemon != null ? <Entry current={pokemon} /> : <TextScreen />}

      <BottomTxtArea />
    </>
  );
};

export default Body;
