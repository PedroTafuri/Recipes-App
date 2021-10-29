/* eslint-disable */
import React from 'react';
import { useParams } from 'react-router-dom';

function DrinkRecipeDetailed() {
  const { idReceita } = useParams()
  return (
    <div>{`DrinkRecipeDetailed sem header ${idReceita}`}</div>
  );
}

export default DrinkRecipeDetailed;
