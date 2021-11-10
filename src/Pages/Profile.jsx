import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import '../CSS/profile.css';

function Profile() {
  return (
    <div id="profile-main-div">
      <Header title="Perfil" searchButton={false} />
      <Footer />
    </div>
  );
}

export default Profile;
