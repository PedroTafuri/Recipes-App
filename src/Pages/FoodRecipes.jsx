import React, { useContext } from 'react';
import propTypes from 'prop-types';
import Header from '../Components/Header';
import Context from '../Context/Context';
import Footer from '../Components/Footer';
import ControlledCarouselForFood from '../Components/ControlledCarouselForFood';
import SearchBar from '../Components/SearchBar';
import RecipesList from '../Components/RecipesList';
import '../CSS/food-recipes.css';

function FoodRecipes({ history }) {
  const {
    meal,
    loading,
    showSearchBar,
  } = useContext(Context);

  function renderingFoodListOrItem() {
    if (meal === null ? true : meal.length === 0) {
      return null;
    }
    if (meal.length === 1) {
      return history.push(`/comidas/${meal[0].idMeal}`);
    }
    return showSearchBar ? <ControlledCarouselForFood /> : null;
  }

  function toggleSearchOptions() {
    if (showSearchBar) {
      return <SearchBar title="Comidas" />;
    }
    return <RecipesList title="Comidas" />;
  }

  return (
    <div id="food-recipes-main-div">
      <Header title="Comidas" searchButton />
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
        : renderingFoodListOrItem()}
      <Footer />
    </div>
  );
}

FoodRecipes.propTypes = {
  history: propTypes.shape({
    push: propTypes.func,
  }).isRequired,
};

export default FoodRecipes;
