import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

function Profile() {
  return (
    <div>
      <header>
        <Header title="Perfil" searchButton={false} />
      </header>
      <Footer />
    </div>
  );
}

export default Profile;
