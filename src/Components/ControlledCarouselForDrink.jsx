import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Carousel, CarouselItem } from 'react-bootstrap';
import Context from '../Context/Context';
import 'bootstrap/dist/css/bootstrap.min.css';

function ControlledCarouselForDrink() {
  const {
    drink,
  } = useContext(Context);
  return (
    <div>
      <Carousel>
        {drink
          .map((drinkItem) => (
            <CarouselItem>
              <Link to={`/bebidas/${drinkItem.idDrink}`} key={drinkItem.idDrink}>
                <img src={drinkItem.strDrinkThumb} alt={drinkItem.strDrink} />
                <p>{drinkItem.strDrink}</p>
              </Link>
            </CarouselItem>
          ))}
      </Carousel>
    </div>

  );
}

export default ControlledCarouselForDrink;
