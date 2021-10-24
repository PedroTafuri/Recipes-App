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
import FoodExplorer from './Pages/FoodExplorer';
import DrinkExplorer from './Pages/DrinkExplorer';
import FoodExplorerByIngredients from './Pages/FoodExplorerByIngredients';
import DrinkExplorerByIngredients from './Pages/DrinkExplorerByIngredients';
import Origin from './Pages/Origin';
import Profile from './Pages/Profile';
import DoneRecipes from './Pages/DoneRecipes';
import FavoriteRecipes from './Pages/FavoriteRecipes';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/receitas-favoritas" component={FavoriteRecipes} />
        <Route path="/receitas-feitas" component={DoneRecipes} />
        <Route path="/perfil" component={Profile} />
        <Route path="/explorar/comidas/area" component={Origin} />
        <Route path="/explorar/comidas/ingredientes" component={FoodExplorerByIngredients} />
        <Route path="/explorar/bebidas/ingredientes" component={DrinkExplorerByIngredients} />
        <Route path="/explorar/comidas" component={FoodExplorer} />
        <Route path="/explorar/bebidas" component={DrinkExplorer} />
        <Route path="/explorar" component={Explorer} />
        <Route path="/comidas/:id-da-receita/in-progress" component={FoodRecipeInProgress} />
        <Route path="/bebidas/:id-da-receita/in-progress" component={DrinkRecipeInProgress} />
        <Route path="/comidas/:id-da-receita" component={FoodRecipeDetailed} />
        <Route path="/bebidas/:id-da-receita" component={DrinkRecipeDetailed} />
        <Route path="/comidas" component={FoodRecipes} />
        <Route path="/bebidas" component={DrinkRecipes} />
        <Route exact path="/" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
