import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';

function Explorer() {
  return (
    <div>
      <header>
        <Header title="Explorar" searchButton={false} />
      </header>
      <nav>
        <Link to="/comidas"><button type="button">Comidas</button></Link>
        <Link to="/bebidas"><button type="button">Bebidas</button></Link>
      </nav>
    </div>
  );
}

export default Explorer;
