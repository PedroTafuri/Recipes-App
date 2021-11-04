import React, { useContext } from 'react';
import propTypes from 'prop-types';
import Header from '../Components/Header';
import Context from '../Context/Context';
import Footer from '../Components/Footer';
import ControlledCarouselForFood from '../Components/ControlledCarouselForFood';

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
    return <ControlledCarouselForFood />;
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
