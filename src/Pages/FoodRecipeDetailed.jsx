import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';
import Footer from '../Components/Footer';
import ShareAndFavRecepes from '../Components/ShareAndFavRecipes';
import Context from '../Context/Context';
import '../CSS/food-recipe-detailed.css';

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

  // const handleYouTubeLink = (link) => {
  //   {console.log(detailedSelectedRecipe.strYoutube)}
  //   const linkSplited = link.split('https://www.youtube.com/watch?v=');
  //     const newLink = `https://www.youtube.com/embed/${linkSplited[1]}`;
  //     return newLink;
  //   };

  return (
    <div>
      <div id="food-recipe-detailed-main-div">
        <img src={detailedSelectedRecipe.strMealThumb} alt={detailedSelectedRecipe.strMeal} />
        <div id="recipe-name-and-buttons">
          <h1>{detailedSelectedRecipe.strMeal}</h1>
          <ShareAndFavRecepes />
        </div>
        <h3>{detailedSelectedRecipe.strCategory}</h3>
        <h2 id="h2">Ingredientes</h2>
        <ul>
          {Object.keys(detailedSelectedRecipe)
            .filter((item) => item.includes('strIngredient'))
            .map((item) => (
              detailedSelectedRecipe[item] && (
              <li key={getIngredientNumber(item)}>{`${detailedSelectedRecipe[item]} - ${detailedSelectedRecipe[`strMeasure${getIngredientNumber(item)}`]}`}</li>)
            ))}
        </ul>
        <h2 id="h2">Instruções</h2>
        <p>{(detailedSelectedRecipe.strInstructions)}</p>
        <h2 id="h2">Vídeo</h2>
        {/* <iframe
        src={handleYouTubeLink(detailedSelectedRecipe.strYoutube)}
        title={detailedSelectedRecipe.strMeal} width="560" height="315" /> */}
        <Link to={`/Comidas/${idReceita}/progress`}><button type="button">Iniciar</button></Link>
      </div>
      <Footer />
    </div>
  );
}

export default FoodRecipeDetailed;
