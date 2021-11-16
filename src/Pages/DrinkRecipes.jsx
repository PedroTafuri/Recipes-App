import React, { useContext } from 'react';
import propTypes from 'prop-types';
import Header from '../Components/Header';
import Context from '../Context/Context';
import Footer from '../Components/Footer';
import ControlledCarouselForDrink from '../Components/ControlledCarouselForDrink';
import SearchBar from '../Components/SearchBar';
import FilterCategories from '../Components/FilterCategories';
import '../CSS/drink-recipes.css';

function DrinkRecipes({ history }) {
  const {
    drink,
    loading,
    showSearchBar,
  } = useContext(Context);

  function renderingDrinkListOrItem() {
    if (drink.length === 0) {
      return null;
    }
    if (drink.length === 1) {
      return history.push(`/bebidas/${drink[0].idDrink}`);
    }
    return <ControlledCarouselForDrink />;
  }

  function toggleSearchOptions() {
    if (showSearchBar) {
      return <FilterCategories title="Bebidas" />;
    }
    return <SearchBar title="Bebidas" />;
  }

  return (
    <div id="drink-recipes-main-div">
      <Header title="Bebidas" searchButton />
      <div id="search-option">{toggleSearchOptions()}</div>
      {loading ? ('Loading...') : renderingDrinkListOrItem()}
      <Footer />
    </div>
  );
}

DrinkRecipes.propTypes = {
  history: propTypes.shape({
    push: propTypes.func,
  }).isRequired,
};

export default DrinkRecipes;
