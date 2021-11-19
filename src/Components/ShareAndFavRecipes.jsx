import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react/cjs/react.development';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Context from '../Context/Context';
import '../CSS/share-and-fav-recipes.css';

function ShareAndFavRecipes() {
  const [like, setLike] = useState(false);
  const [showSpan, setShowSpan] = useState(false);
  const { detailedSelectedRecipe, detailedSelectedDrink } = useContext(Context);
  const { idReceita } = useParams();

  const getRecipesInformation = () => {
    // Verifica se a receita é de bebida ou comida, se for bebida retorna false se for comida true
    if ((window.location.href).split('/')[3] === 'comidas') {
      return {
        id: detailedSelectedRecipe.idMeal,
        type: 'comidas',
        area: detailedSelectedRecipe.strArea,
        category: detailedSelectedRecipe.strCategory,
        name: detailedSelectedRecipe.strMeal,
        image: detailedSelectedRecipe.strMealThumb,
      };
    }
    return {
      id: detailedSelectedDrink.idDrink,
      type: 'bebidas',
      area: detailedSelectedDrink.strAlcoholic, // Na API de bebida não tem area
      category: detailedSelectedDrink.strCategory,
      name: detailedSelectedDrink.strDrink,
      image: detailedSelectedDrink.strDrinkThumb,
    };
  };

  const saveFavRecipes = () => {
    if (!like) {
      setLike(true);
      const favoritesRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) ? JSON.parse(localStorage.getItem('favoriteRecipes')) : '';
      const updateFavoritesRecipes = [...favoritesRecipes, getRecipesInformation()];
      localStorage.setItem('favoriteRecipes', JSON.stringify(updateFavoritesRecipes));
    } else {
      setLike(false);
      const removingRecipe = JSON.parse(localStorage.getItem('favoriteRecipes'))
        .filter((item) => item.id !== ((window.location.href).split('/')[3] === 'comidas' ? detailedSelectedRecipe.idMeal : detailedSelectedDrink.idDrink));
      localStorage.setItem('favoriteRecipes', JSON.stringify(removingRecipe));
    }
  };

  const checkingIfIsFavorite = () => {
    if (localStorage.getItem('favoriteRecipes') === null ? false : JSON.parse(localStorage.getItem('favoriteRecipes')).some((item) => item.id === idReceita)) setLike(true);
  };

  useEffect(() => {
    checkingIfIsFavorite();
  }, []);

  const copyMessenge = () => {
    setShowSpan(true);
    setTimeout(() => setShowSpan(false), 1000);
  };

  return (
    <div id="share-and-fav-recipes-main-div">
      {showSpan
        ? <span>Link Copiado!</span>
        : (
          <div>
            <CopyToClipboard text={window.location.href}>
              <button className="buttons" onClick={() => copyMessenge()} type="button">
                <box-icon name="share-alt" />
              </button>
            </CopyToClipboard>
            <button className="buttons" onClick={() => saveFavRecipes()} type="button">
              {like ? <box-icon name="heart" type="solid" color="#ff0000" /> : <box-icon name="heart" type="solid" /> }
            </button>
          </div>
        )}
    </div>
  );
}

export default ShareAndFavRecipes;
