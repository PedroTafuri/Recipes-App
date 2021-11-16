import React, { useContext } from 'react';
import { useState } from 'react/cjs/react.development';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Context from '../Context/Context';
import '../CSS/share-and-fav-recipes.css';

function ShareAndFavRecipes() {
  const [like, setLike] = useState(false);
  const [showSpan, setShowSpan] = useState(false);
  const { detailedSelectedRecipe } = useContext(Context);

  const saveFavRecipes = () => {
    if (!like) {
      setLike(true);
      localStorage.setItem('favoriteRecipes', JSON.stringify[{
        id: detailedSelectedRecipe.idMeal,
        area: detailedSelectedRecipe.strArea,
        category: detailedSelectedRecipe.strCategory,
        name: detailedSelectedRecipe.strMeal,
        image: detailedSelectedRecipe.strMealThumb,
      }]);
    } else {
      setLike(false);
      // localStorage.setItem("favoriteRecipes", [{
      //   id: detailedSelectedRecipe.idMeal,
      //   area: detailedSelectedRecipe.strArea,
      //   category: detailedSelectedRecipe.strCategory,
      //   name: detailedSelectedRecipe.strMeal,
      //   image: detailedSelectedRecipe.strMealThumb,
      // }]);
    }
  };

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
