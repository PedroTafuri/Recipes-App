import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

function FoodExplorerByIngredients() {
  return (
    <div>
      <header>
        <Header title="Explorar Ingredientes de comida" searchButton={false} />
      </header>
      <Footer />
    </div>
  );
}

export default FoodExplorerByIngredients;
