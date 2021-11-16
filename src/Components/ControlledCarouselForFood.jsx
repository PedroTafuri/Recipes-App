import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Carousel, CarouselItem } from 'react-bootstrap';
import Context from '../Context/Context';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/controlled-carousel-for-food.css';

function ControlledCarouselForFood() {
  const {
    meal,
    categorySelected,
  } = useContext(Context);
  return (
    <Carousel id="controlled-carousel-for-food">
      {meal
        .filter((item) => (categorySelected ? true : item.strCategory === categorySelected))
        .map((mealItem) => (
          <CarouselItem>
            <Link to={`/comidas/${mealItem.idMeal}`} key={mealItem.idMeal}>
              <img className="d-block w-100" src={mealItem.strMealThumb} alt={mealItem.strMeal} />
              <Carousel.Caption><p>{mealItem.strMeal}</p></Carousel.Caption>
            </Link>
          </CarouselItem>
        ))}
    </Carousel>

  );
}

export default ControlledCarouselForFood;
