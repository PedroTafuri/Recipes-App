/* eslint-disable */
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';
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

  // const breakLinesFromInstructions = (info) => (info.contains('r') ? info.split('\r\n') : info);

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
      {/* {breakLinesFromInstructions(detailedSelectedDrink.strInstructions)
        .map((line) => <p>{line}</p>)} */}
      {/* <h2>Vídeo</h2>
      <iframe src={handleYouTubeLink(detailedSelectedDrink.strVideo)} title={detailedSelectedDrink.strMeal} width="560" height="315" /> */}
      <button type="button">Iniciar</button>
    </div>
  );
}

export default DrinkRecipeDetailed;
