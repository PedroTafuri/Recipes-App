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
    categorySelected,
  } = useContext(Context);

  useEffect(() => {
    requestCategoriesFromAPI(title);
  }, []);

  useEffect(() => {
    requestCategoriesFromAPI(title);
  }, [categorySelected]);

  return (
    <ul id="filter-categories-main-div">
      <li id="button-all"><button className="button" onClick={setCategorySelected(true)} type="button">Todas</button></li>
      {filterCategories.map((category) => (
        <li key={category.strCategory}>
          <button className="button" onClick={() => setCategorySelected(category.strCategory)} value={category.strCategory} type="button">{category.strCategory}</button>
        </li>
      ))}
    </ul>
  );
}

FilterCategories.propTypes = {
  title: propTypes.string.isRequired,
};
