import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

function FoodExplorer() {
  return (
    <div>
      <header>
        <Header title="Explorar Comidas" searchButton={false} />
      </header>
      <Footer />
    </div>
  );
}

export default FoodExplorer;
