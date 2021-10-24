import React from 'react';
import propTypes from 'prop-types';

function PageTitle({ title }) {
  return (
    <div>{ title }</div>
  );
}

PageTitle.propTypes = {
  title: propTypes.string.isRequired,
};

export default PageTitle;
