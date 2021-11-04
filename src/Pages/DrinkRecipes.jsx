import React, { useContext } from 'react';
import propTypes from 'prop-types';
import Header from '../Components/Header';
import Context from '../Context/Context';
import Footer from '../Components/Footer';
import ControlledCarouselForDrink from '../Components/ControlledCarouselForDrink';

function DrinkRecipes({ history }) {
  const {
    drink,
    loading,
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

  return (
    <div>
      <header>
        <Header title="Bebidas" searchButton />
      </header>
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
