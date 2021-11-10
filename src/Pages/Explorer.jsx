import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import '../CSS/explorer.css';

function Explorer() {
  return (
    <div id="explorer-main-div">
      <Header title="Explorar" searchButton={false} />
      <nav>
        <Link to="/comidas"><button type="button">Comidas</button></Link>
        <Link to="/bebidas"><button type="button">Bebidas</button></Link>
      </nav>
      <Footer />
    </div>
  );
}

export default Explorer;
