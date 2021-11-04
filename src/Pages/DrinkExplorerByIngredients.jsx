import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

function DrinkExplorerByIngredients() {
  return (
    <div>
      <header>
        <Header title="Explorar Ingredientes Bebidas" searchButton={false} />
      </header>
      <Footer />
    </div>
  );
}

export default DrinkExplorerByIngredients;
