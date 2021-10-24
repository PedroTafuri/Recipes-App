import React, { useContext, useState } from 'react';
import propTypes from 'prop-types';
import Context from '../Context/Context';

function SearchBar({ title }) {
  const { requestFoodFromAPI, requestDrinkFromAPI } = useContext(Context);
  const [typeOfSearch, setTypeOfSearch] = useState('ingredientes');
  const [searchText, setSearchText] = useState('');

  const requestAPI = async () => {
    if (title === 'Comidas') await requestFoodFromAPI(typeOfSearch, searchText);
    if (title === 'Bebidas') await requestDrinkFromAPI(typeOfSearch, searchText);
  };

  return (
    <form action="ingredients">
      <label htmlFor="searchBar">
        <input type="text" onChange={(e) => setSearchText(e.target.value)} placeholder="Digite aqui" />
      </label>
      <label htmlFor="ingredients">
        Ingredientes
        <input name="typeOfSearch" onClick={(e) => setTypeOfSearch(e.target.value)} value="ingredientes" checked id="ingredients" type="radio" />
      </label>
      <label htmlFor="name">
        Nome
        <input name="typeOfSearch" onClick={(e) => setTypeOfSearch(e.target.value)} value="nome" id="name" type="radio" />
      </label>
      <button onClick={async () => requestAPI()} type="button">Buscar</button>
    </form>
  );
}

SearchBar.propTypes = {
  title: propTypes.string.isRequired,
};

export default SearchBar;
