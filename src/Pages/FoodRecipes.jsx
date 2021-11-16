import React, { useContext } from 'react';
import propTypes from 'prop-types';
import Header from '../Components/Header';
import Context from '../Context/Context';
import Footer from '../Components/Footer';
import ControlledCarouselForFood from '../Components/ControlledCarouselForFood';
import SearchBar from '../Components/SearchBar';
import FilterCategories from '../Components/FilterCategories';
import '../CSS/food-recipes.css';

function FoodRecipes({ history }) {
  const {
    meal,
    loading,
    showSearchBar,
  } = useContext(Context);

  // const [hideSearchOptions, setHideSearchOptions] = useState(true);

  function renderingFoodListOrItem() {
    if (meal.length === 0) {
      return null;
    }
    if (meal.length === 1) {
      return history.push(`/comidas/${meal[0].idMeal}`);
    }
    return <ControlledCarouselForFood />;
  }

  function toggleSearchOptions() {
    if (showSearchBar) {
      return <FilterCategories title="Comidas" />;
    }
    return <SearchBar title="Comidas" />;
  }

  return (
    <div id="food-recipes-main-div">
      <Header title="Comidas" searchButton />
      <div id="search-option">{toggleSearchOptions()}</div>
      {loading ? <div id="loading-div" /> : renderingFoodListOrItem()}
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
