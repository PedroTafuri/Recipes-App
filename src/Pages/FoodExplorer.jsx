import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

function FoodExplorer() {
  return (
    <div>
      <Header title="Explorar Comidas" searchButton={false} />
      <Footer />
    </div>
  );
}

export default FoodExplorer;
