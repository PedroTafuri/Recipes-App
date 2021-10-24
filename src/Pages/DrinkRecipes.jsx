import React, { useContext } from 'react';
import Header from '../Components/Header';
import Context from '../Context/Context';

function DrinkRecipes() {
  const {
    drink,
    loading,
  } = useContext(Context);
  return (
    <div>
      <header>
        <Header title="Bebidas" searchButton />
      </header>
      {loading ? 'Loading...'
        : drink.map((drinkItem) => (
          <div key={drinkItem.idDrink}>
            <p>{drinkItem.strDrink}</p>
            <img src={drinkItem.strDrinkThumb} alt={drinkItem.strDrink} />
          </div>
        ))}
    </div>
  );
}

export default DrinkRecipes;
