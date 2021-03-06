import React, { useContext } from 'react';
import propTypes from 'prop-types';
import Header from '../Components/Header';
import Context from '../Context/Context';
import Footer from '../Components/Footer';
import ControlledCarouselForDrink from '../Components/ControlledCarouselForDrink';
import SearchBar from '../Components/SearchBar';
import RecipesList from '../Components/RecipesList';
import '../CSS/drink-recipes.css';

function DrinkRecipes({ history }) {
  const {
    drink,
    loading,
    showSearchBar,
  } = useContext(Context);

  function renderingDrinkListOrItem() {
    if (drink === null ? true : drink.length === 0) {
      return null;
    }
    if (drink.length === 1) {
      return history.push(`/bebidas/${drink[0].idDrink}`);
    }
    return showSearchBar ? <ControlledCarouselForDrink /> : null;
  }

  function toggleSearchOptions() {
    if (showSearchBar) {
      return <SearchBar title="Bebidas" />;
    }
    return <RecipesList title="Bebidas" />;
  }

  return (
    <div id="drink-recipes-main-div">
      <Header title="Bebidas" searchButton />
      {!loading && <div id="search-option">{toggleSearchOptions()}</div>}
      {loading
        ? (// Loading retirado do site https://loading.io/css/
          <div className="lds-spinner">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
        )
        : renderingDrinkListOrItem()}
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
