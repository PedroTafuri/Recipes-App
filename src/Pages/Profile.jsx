import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import '../CSS/profile.css';

function Profile() {
  const clearLocaLStorage = () => {
    localStorage.clear();
  };

  return (
    <div id="profile-main-div">
      <Header title="Perfil" searchButton={false} />
      <nav>
        <h1 id="email">{localStorage.getItem('email')}</h1>
        <Link to="/receitas-favoritas"><button type="button">Receitas Favoritas</button></Link>
        <Link to="/"><button onClick={() => clearLocaLStorage()} type="button">Sair</button></Link>
      </nav>
      <Footer />
    </div>
  );
}

export default Profile;
