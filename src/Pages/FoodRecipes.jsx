import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import Header from '../Components/Header';
import Context from '../Context/Context';
import Footer from '../Components/Footer';

function FoodRecipes({ history }) {
  const {
    meal,
    loading,
  } = useContext(Context);

  function renderingFoodListOrItem() {
    if (meal.length === 0) {
      return null;
    }
    if (meal.length === 1) {
      return history.push(`/comidas/${meal[0].idMeal}`);
    }
    return (meal.map((mealItem) => (
      <Link to={`/comidas/${mealItem.idMeal}`} key={mealItem.idMeal}>
        <p>{mealItem.strMeal}</p>
        <img src={mealItem.strMealThumb} alt={mealItem.strMeal} />
      </Link>
    )));
  }

  return (
    <div>
      <header>
        <Header title="Comidas" searchButton />
      </header>
      {loading ? 'Loading...' : renderingFoodListOrItem()}
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
