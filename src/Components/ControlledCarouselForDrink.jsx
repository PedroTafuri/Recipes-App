import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Carousel, CarouselItem } from 'react-bootstrap';
import Context from '../Context/Context';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/controlled-carousel-for-drink.css';

function ControlledCarouselForDrink() {
  const {
    drink,
  } = useContext(Context);
  return (
    <div id="controlled-carousel-for-drink">
      <Carousel>
        {drink
          .map((drinkItem) => (
            <CarouselItem>
              <Link to={`/bebidas/${drinkItem.idDrink}`} key={drinkItem.idDrink}>
                <img className="d-block w-100" src={drinkItem.strDrinkThumb} alt={drinkItem.strDrink} />
                <Carousel.Caption><p>{drinkItem.strDrink}</p></Carousel.Caption>
              </Link>
            </CarouselItem>
          ))}
      </Carousel>
    </div>

  );
}

export default ControlledCarouselForDrink;
