import React from 'react';
import 'boxicons';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <Link to="/bebidas"><box-icon name="drink" type="solid" /></Link>
      <Link to="/explorar"><box-icon name="expand" /></Link>
      <Link to="/comidas"><box-icon type="solid" name="pizza" /></Link>
    </footer>
  );
}

export default Footer;
