/* eslint-disable */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import DrinkRecipeDetailed from './Pages/DrinkRecipeDetailed';
import FoodRecipeDetailed from './Pages/FoodRecipeDetailed';
import DrinkRecipeInProgress from './Pages/DrinkRecipeInProgress';
import FoodRecipeInProgress from './Pages/FoodRecipeInProgress';
import DrinkRecipes from './Pages/DrinkRecipes';
import FoodRecipes from './Pages/FoodRecipes';
import Login from './Pages/Login';
import Explorer from './Pages/Explorer';
import Profile from './Pages/Profile';
import FavoriteRecipes from './Pages/FavoriteRecipes';

function App() {
  return (
      <Switch>
        <Route path="/receitas-favoritas" component={FavoriteRecipes} />
        <Route path="/perfil" component={Profile} />
        <Route path="/explorar" component={Explorer} />
        <Route path="/comidas/:idReceita/progress" component={FoodRecipeInProgress} />
        <Route path="/bebidas/:idReceita/progress" component={DrinkRecipeInProgress} />
        <Route path="/comidas/:idReceita" component={FoodRecipeDetailed} />
        <Route path="/bebidas/:idReceita" component={DrinkRecipeDetailed} />
        <Route exact path="/comidas" component={FoodRecipes} />
        <Route exact path="/bebidas" component={DrinkRecipes} />
        <Route exact path="/" component={Login} />
      </Switch>
  );
} 

export default App;
