import React, { useContext } from 'react';
import Header from '../Components/Header';
import Context from '../Context/Context';

function FoodRecipes() {
  const {
    meal,
    loading,
  } = useContext(Context);
  return (
    <div>
      <header>
        <Header title="Comidas" searchButton />
      </header>
      {loading ? 'Loading...' : meal.map((mealItem) => (
        <div key={mealItem.idMeal}>
          <p>{mealItem.strMeal}</p>
          <img src={mealItem.strMealThumb} alt={mealItem.strMeal} />
        </div>
      ))}
    </div>
  );
}

export default FoodRecipes;
