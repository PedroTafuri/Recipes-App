import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Carousel, CarouselItem } from 'react-bootstrap';
import Context from '../Context/Context';

function ControlledCarouselForFood() {
  const {
    meal,
    categorySelected,
  } = useContext(Context);
  return (
    <div>
      <Carousel>
        {meal
          .filter((item) => (categorySelected ? true : item.strCategory === categorySelected))
          .map((mealItem) => (
            <CarouselItem>
              <Link to={`/comidas/${mealItem.idMeal}`} key={mealItem.idMeal}>
                <img className="d-block w-100" src={mealItem.strMealThumb} alt={mealItem.strMeal} />
                <p>{mealItem.strMeal}</p>
              </Link>
            </CarouselItem>
          ))}
      </Carousel>
    </div>

  );
}

export default ControlledCarouselForFood;
