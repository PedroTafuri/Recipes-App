import React from 'react';
import 'boxicons';
import { Link } from 'react-router-dom';
import '../CSS/footer.css';

function Footer() {
  return (
    <footer>
      <Link to="/bebidas"><box-icon color="white" size="md" name="drink" type="solid" /></Link>
      <Link to="/explorar"><box-icon color="white" size="md" name="expand" /></Link>
      <Link to="/comidas"><box-icon color="white" size="md" type="solid" name="pizza" /></Link>
    </footer>
  );
}

export default Footer;
