import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

function DrinkExplorer() {
  return (
    <div>
      <header>
        <Header title="Explorar Bebidas" searchButton />
      </header>
      <Footer />
    </div>
  );
}

export default DrinkExplorer;
