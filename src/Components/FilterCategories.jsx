import React from 'react';
import { useContext, useEffect } from 'react/cjs/react.development';
import propTypes from 'prop-types';
import Context from '../Context/Context';
import '../CSS/filter-categories.css';

export default function FilterCategories({ title }) {
  const {
    requestCategoriesFromAPI,
    filterCategories,
    setCategorySelected,
  } = useContext(Context);
  useEffect(() => {
    requestCategoriesFromAPI(title);
  }, []);
  return (
    <ul id="filter-categories-main-div">
      <li><button className="button" onClick={setCategorySelected(true)} type="button">Todas</button></li>
      {filterCategories.map((category) => (
        <li key={category.strCategory}>
          <button className="button" onClick={(e) => setCategorySelected(e.target.innertext)} value={category.strCategory} type="button">{category.strCategory}</button>
        </li>
      ))}
    </ul>
  );
}

FilterCategories.propTypes = {
  title: propTypes.string.isRequired,
};
