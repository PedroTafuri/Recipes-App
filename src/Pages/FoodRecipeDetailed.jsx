import React from 'react';
import { useParams } from 'react-router-dom';

function FoodRecipeDetailed() {
  const { idReceita } = useParams();

  return (
    <div>{`FoodRecipeDetailed sem header ${idReceita}`}</div>
  );
}

export default FoodRecipeDetailed;
