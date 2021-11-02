// /* eslint-disable */
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';
import Context from '../Context/Context';

function FoodRecipeDetailed() {
  const { idReceita } = useParams();
  const { detailedSelectedRecipe, getSelectedMeal } = useContext(Context);

  useEffect(() => {
    getSelectedMeal(idReceita);
  }, []);

  const getIngredientNumber = (item) => {
    if (item.length === 14) return item[item.length - 1];
    return (`${item[item.length - 2]}${item[item.length - 1]}`);
  };

  const handleYouTubeLink = (link) => {
    const linkSplited = link.split('https://www.youtube.com/watch?v=');
    const newLink = `https://www.youtube.com/embed/${linkSplited[1]}`;
    return newLink;
  };

  const breakLinesFromInstructions = (info) => info.split('\r\n');

  return (
    <div>
      <img src={detailedSelectedRecipe.strMealThumb} alt={detailedSelectedRecipe.strMeal} />
      <h1>{detailedSelectedRecipe.strMeal}</h1>
      <h3>{detailedSelectedRecipe.strCategory}</h3>
      <h2>Ingredientes</h2>
      <ul>
        {Object.keys(detailedSelectedRecipe)
          .filter((item) => item.includes('strIngredient'))
          .map((item) => (
            detailedSelectedRecipe[item] && (
            <li key={getIngredientNumber(item)}>{`${detailedSelectedRecipe[item]} - ${detailedSelectedRecipe[`strMeasure${getIngredientNumber(item)}`]}`}</li>)
          ))}
      </ul>
      <h2>Instruções</h2>
      {breakLinesFromInstructions(detailedSelectedRecipe.strInstructions)
        .map((line) => <p>{line}</p>)}
      <h2>Vídeo</h2>
      <iframe src={handleYouTubeLink(detailedSelectedRecipe.strYoutube)} title={detailedSelectedRecipe.strMeal} width="560" height="315" />
      <button type="button">Iniciar</button>
    </div>
  );
}

export default FoodRecipeDetailed;
