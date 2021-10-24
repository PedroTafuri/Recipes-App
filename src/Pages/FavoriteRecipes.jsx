import React from 'react';
import Header from '../Components/Header';

function FavoriteRecipes() {
  return (
    <div>
      <header>
        <Header title="Receitas Favoritas" searchButton={false} />
      </header>
    </div>
  );
}

export default FavoriteRecipes;
