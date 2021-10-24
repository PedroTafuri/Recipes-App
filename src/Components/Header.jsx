import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PageTitle from './PageTitle';
import ProfileButton from './ProfileButton';
import SearchButton from './SearchButton';

function Header({ title, searchButton }) {
  return (
    <header>
      <Link to="/perfil"><ProfileButton /></Link>
      <PageTitle title={title} />
      {searchButton ? <SearchButton title={title} /> : null}
    </header>
  );
}

Header.propTypes = {
  title: propTypes.string.isRequired,
  searchButton: propTypes.bool.isRequired,
};

export default Header;
