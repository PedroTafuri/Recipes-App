import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';
import Footer from '../Components/Footer';
import ShareAndFavRecepes from '../Components/ShareAndFavRecipes';
import Context from '../Context/Context';

function DrinkRecipeDetailed() {
  const { idReceita } = useParams();
  const { detailedSelectedDrink, getSelectedDrink } = useContext(Context);

  useEffect(() => {
    getSelectedDrink(idReceita);
  }, []);

  const getIngredientNumber = (item) => {
    if (item.length === 14) return item[item.length - 1];
    return (`${item[item.length - 2]}${item[item.length - 1]}`);
  };

  // const handleYouTubeLink = (link) => {
  //   if (link.contains('https://www.youtube.com/watch?v=')) {
  //     const linkSplited = link.split('https://www.youtube.com/watch?v=');
  //     const newLink = `https://www.youtube.com/embed/${linkSplited[1]}`;
  //     return newLink;
  //   }
  //   return link;
  // };

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
            <li key={getIngredientNumber(item)}>{`${detailedSelectedDrink[item]} - ${detailedSelectedDrink[`strMeasure${getIngredientNumber(item)}`]}`}</li>)
          ))}
      </ul>
      <h2>Instruções</h2>
      <p>{detailedSelectedDrink.strInstructions}</p>
      <h2>Vídeo</h2>
      {/* <iframe
      src={handleYouTubeLink(detailedSelectedDrink.strVideo)}
      title={detailedSelectedDrink.strDrink} width="560" height="315" /> */}
      <Link to={`/bebidas/${idReceita}/progress`}><button type="button">Iniciar</button></Link>
      <Footer />
    </div>
  );
}

export default DrinkRecipeDetailed;
