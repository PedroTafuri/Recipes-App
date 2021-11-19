import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import '../CSS/favorite-recipes.css';

function FavoriteRecipes() {
  const [filteredCategory, setFilteredCategory] = useState(true);
  return (
    <div id="favorite-recipes-main-container">
      <Header title="Receitas Favoritas" searchButton={false} />
      <div id="favorite-recipes-central-container">
        <nav id="favorite-recipes-nav">
          <button onClick={() => setFilteredCategory(true)} type="button">Todas</button>
          <button onClick={() => setFilteredCategory('bebidas')} type="button">Bebidas</button>
          <button onClick={() => setFilteredCategory('comidas')} type="button">Comidas</button>
        </nav>
        {(localStorage.getItem('favoriteRecipes') === null ? false : JSON.parse(localStorage.getItem('favoriteRecipes'))
          .filter((item) => (filteredCategory === true ? true : item.type === filteredCategory))
          .map((item) => (
            <Link className="favorite-recipes-container" to={`/${item.type}/${item.id}`}>
              <img className="favorite-recipes-images" src={item.image} alt={item.name} />
              <div>
                <h2>{item.name}</h2>
                <h3>{item.category}</h3>
              </div>
            </Link>
          )))}
      </div>
      <Footer />
    </div>
  );
}

export default FavoriteRecipes;
