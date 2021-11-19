import React, { useState } from 'react';
import propTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [meal, setMeal] = useState([]); // Variável que recebe o retorno da API de comida
  const [drink, setDrink] = useState([]); // Variável que recebe o retorno da API de bebida
  const [loading, setLoading] = useState(false); // Faz o set de carregamento enquanto a API carrega
  const [
    filterCategories,
    setFilterCategories,
  ] = useState([]); // Variável que recebe as opções secundárias de filtro
  const [categorySelected, setCategorySelected] = useState(true); // Pega as categorias e renderiza
  const [detailedSelectedRecipe, setDetailedSelectedRecipe] = useState(''); // Recebe os detalhes da receita de comida selecionada
  const [detailedSelectedDrink, setDetailedSelectedDrink] = useState(''); // Recebe os detalhes da receita de bebida selecionada
  const [showSearchBar, setShowSearchBar] = useState(false); // Mostra e oculta a barra de busca

  const requestFoodFromAPI = async (type, inputValue) => { // API de comidas
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
      alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    }
  };

  const requestDrinkFromAPI = async (type, inputValue) => { // API de bebidas
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
      alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    }
  };

  const requestCategoriesFromAPI = async (title) => {
    let response = null;
    if (title === 'Comidas') {
      response = await (await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')).json();
      setFilterCategories(response.meals);
    }
    if (title === 'Bebidas') {
      response = await (await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')).json();
      setFilterCategories(response.drinks);
    }
  };

  const getSelectedMeal = async (id) => {
    const response = await (await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)).json();
    console.log(`é${response.meals}`);
    setDetailedSelectedRecipe(response.meals[0]);
  };

  const getSelectedDrink = async (id) => {
    const response = await (await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)).json();
    setDetailedSelectedDrink(response.drinks[0]);
  };

  const context = {
    requestFoodFromAPI,
    meal,
    requestDrinkFromAPI,
    drink,
    setMeal,
    loading,
    filterCategories,
    requestCategoriesFromAPI,
    categorySelected,
    setCategorySelected,
    detailedSelectedRecipe,
    getSelectedMeal,
    detailedSelectedDrink,
    getSelectedDrink,
    showSearchBar,
    setShowSearchBar,
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
