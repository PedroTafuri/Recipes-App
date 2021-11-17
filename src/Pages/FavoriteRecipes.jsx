import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';

function FavoriteRecipes() {
  return (
    <div>
      <Header title="Receitas Favoritas" searchButton={false} />
      {JSON.parse(localStorage.getItem('favoriteRecipes'))
        .map((item) => (
          <Link to={`/comidas/${item.id}`}>
            <img src={item.image} alt={item.name} />
            <h2>{item.category}</h2>
            <h1>{item.name}</h1>
          </Link>
        ))}
    </div>
  );
}

export default FavoriteRecipes;
