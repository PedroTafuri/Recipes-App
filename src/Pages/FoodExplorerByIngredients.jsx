import React from 'react';
import Header from '../Components/Header';

function FoodExplorerByIngredients() {
  return (
    <div>
      <header>
        <Header title="Explorar Ingredientes de comida" searchButton={false} />
      </header>
    </div>
  );
}

export default FoodExplorerByIngredients;
