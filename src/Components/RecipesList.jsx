import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import propTypes from 'prop-types';
import '../CSS/recipes-list.css';
import { Link } from 'react-router-dom';

export default function RecipesList({ title }) {
  const [list, setList] = useState([]);
  const [type, setType] = useState('');

  const checkIfThisPageIsFoodOrDrink = () => {
    if (title === 'Comidas') {
      return setType('Meal');
    }
    return setType('Drink');
  };

  const getRandomListFromApi = async () => {
    if (title === 'Comidas') {
      const response = await (await fetch('https://www.themealdb.com/api/json/v1/1/random.php')).json();
      setList((prevState) => [...prevState, response.meals[0]]);
    }
    if (title === 'Bebidas') {
      const response = await (await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')).json();
      setList((prevState) => [...prevState, response.drinks[0]]);
    }
  };

  useEffect(() => {
    checkIfThisPageIsFoodOrDrink(title);
    for (let index = 0; index < 6; index += 1) {
      getRandomListFromApi(title);
    }
  }, []);

  return (
    <div id="recipes-list-main-div">
      {list.map((item) => (
        <Link className="random-list" to={`/${title.toLowerCase()}/${item[`id${type}`]}`} key={item[`id${type}`]}>
          <img className="random-list-image" src={item[`str${type}Thumb`]} alt={item[`str${type}`]} />
          <p className="randompst-name">{item[`str${type}`]}</p>
        </Link>
      ))}
    </div>
  );
}

RecipesList.propTypes = {
  title: propTypes.string.isRequired,
};
