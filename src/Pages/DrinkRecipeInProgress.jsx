import React, { useContext } from 'react';
import Footer from '../Components/Footer';
import ShareAndFavRecepes from '../Components/ShareAndFavRecipes';
import Context from '../Context/Context';

function DrinkRecipeInProgress() {
  const { detailedSelectedDrink } = useContext(Context);

  const getIngredientNumber = (item) => {
    if (item.length === 14) return item[item.length - 1];
    return (`${item[item.length - 2]}${item[item.length - 1]}`);
  };
  return (
    <div>
      <img src={detailedSelectedDrink.strDrinkThumb} alt={detailedSelectedDrink.strDrink} />
      <h1>{detailedSelectedDrink.strDrink}</h1>
      <ShareAndFavRecepes />
      <h3>{detailedSelectedDrink.strCategory}</h3>
      <h2>Ingredientes</h2>
      <ul>
        {Object.keys(detailedSelectedDrink)
          .filter((item) => item.includes('strIngredient'))
          .map((item) => (
            detailedSelectedDrink[item] && (
              <div key={getIngredientNumber(item)}>
                <input type="checkbox" id={detailedSelectedDrink[item]} name={detailedSelectedDrink[item]} />
                <label htmlFor={detailedSelectedDrink[item]}>{`${detailedSelectedDrink[item]} - ${detailedSelectedDrink[`strMeasure${getIngredientNumber(item)}`]}`}</label>
              </div>
            )))}
      </ul>
      <h2>Instruções</h2>
      <p>{detailedSelectedDrink.strInstructions}</p>
      <Footer />
    </div>
  );
}

export default DrinkRecipeInProgress;
