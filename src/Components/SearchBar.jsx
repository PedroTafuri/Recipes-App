/* eslint-disable */ 
import React, { useContext, useState } from 'react';
import propTypes from 'prop-types';
import Context from '../Context/Context';
import '../CSS/search-bar.css';

function SearchBar({ title }) {
  const { requestFoodFromAPI, requestDrinkFromAPI } = useContext(Context);
  const [typeOfSearch, setTypeOfSearch] = useState('ingredientes');
  const [searchText, setSearchText] = useState('');

  const requestAPI = async () => {
    if (title === 'Comidas') await requestFoodFromAPI(typeOfSearch, searchText);
    if (title === 'Bebidas') await requestDrinkFromAPI(typeOfSearch, searchText);
  };

  return (
    <form >
      <div id="text-field" >
        <input type="text" onChange={(e) => setSearchText(e.target.value)} />
        <span />
        <label htmlFor="searchBar">Digite aqui</label>
      </div>
      <div className="radio-toolbar">
        <input type="radio" id="ingredients" name="typeOfSearch" value="ingredientes" checked onClick={(e) => setTypeOfSearch(e.target.value)} />
        <label for="ingredients">Ingredientes</label>
        <input type="radio" id="name" name="typeOfSearch" value="nome" onClick={(e) => setTypeOfSearch(e.target.value)}/>
        <label for="name">Nome</label>
      </div>
      <button onClick={async () => requestAPI()} type="button">Buscar</button>
    </form>
  );
}

SearchBar.propTypes = {
  title: propTypes.string.isRequired,
};

export default SearchBar;
