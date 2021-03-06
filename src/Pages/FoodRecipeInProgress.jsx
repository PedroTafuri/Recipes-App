import React, { useContext } from 'react';
import Footer from '../Components/Footer';
import ShareAndFavRecepes from '../Components/ShareAndFavRecipes';
import Context from '../Context/Context';
import '../CSS/food-recipe-in-progress.css';

function FoodRecipeInProgress() {
  const { detailedSelectedRecipe } = useContext(Context);

  const getIngredientNumber = (item) => {
    if (item.length === 14) return item[item.length - 1];
    return (`${item[item.length - 2]}${item[item.length - 1]}`);
  };

  return (
    <div>
      <div id="food-recipe-in-progress-main-div">
        <img src={detailedSelectedRecipe.strMealThumb} alt={detailedSelectedRecipe.strMeal} />
        <div id="recipe-name-and-buttons">
          <h1>{detailedSelectedRecipe.strMeal}</h1>
          <ShareAndFavRecepes />
        </div>
        <h3>{detailedSelectedRecipe.strCategory}</h3>
        <h2>Ingredientes</h2>
        <form>
          {Object.keys(detailedSelectedRecipe)
            .filter((item) => item.includes('strIngredient'))
            .map((item) => (
              detailedSelectedRecipe[item] && (
                <div className="list-itens" key={getIngredientNumber(item)}>
                  <input type="checkbox" id={detailedSelectedRecipe[item]} name={detailedSelectedRecipe[item]} />
                  <label htmlFor={detailedSelectedRecipe[item]}>{`${detailedSelectedRecipe[item]} - ${detailedSelectedRecipe[`strMeasure${getIngredientNumber(item)}`]}`}</label>
                </div>
              )))}
        </form>
        <h2>Instruções</h2>
        <p>{(detailedSelectedRecipe.strInstructions)}</p>
      </div>
      <Footer />
    </div>
  );
}

export default FoodRecipeInProgress;
