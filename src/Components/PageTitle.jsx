import React from 'react';
import propTypes from 'prop-types';
import '../CSS/page-title.css';

function PageTitle({ title }) {
  return (
    <h1>{ title }</h1>
  );
}

PageTitle.propTypes = {
  title: propTypes.string.isRequired,
};

export default PageTitle;
