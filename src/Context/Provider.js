import React, { useState } from 'react';
import propTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [meal, setMeal] = useState([]);
  const [drink, setDrink] = useState([]);
  const [loading, setLoading] = useState(false);

  const requestFoodFromAPI = async (type, inputValue) => {
    try {
      setLoading(true);
      let response = '';
      if (type === 'ingredientes') {
        response = await (await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${inputValue}`)).json();
      }
      if (type === 'nome') {
        response = await (await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)).json();
      }
      setMeal(response.meals);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setMeal([]);
      alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    }
  };

  const requestDrinkFromAPI = async (type, inputValue) => {
    try {
      setLoading(true);
      let response = '';
      if (type === 'ingredientes') {
        response = await (await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${inputValue}`)).json();
      }
      if (type === 'nome') {
        response = await (await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`)).json();
      }
      setDrink(response.drinks);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setDrink([]);
      alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    }
  };

  const context = {
    requestFoodFromAPI,
    meal,
    requestDrinkFromAPI,
    drink,
    setMeal,
    loading,
  };

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: propTypes.objectOf(propTypes.any).isRequired,
};

export default Provider;
