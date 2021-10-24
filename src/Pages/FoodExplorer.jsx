import React from 'react';
import Header from '../Components/Header';

function FoodExplorer() {
  return (
    <div>
      <header>
        <Header title="Explorar Comidas" searchButton={false} />
      </header>
    </div>
  );
}

export default FoodExplorer;
