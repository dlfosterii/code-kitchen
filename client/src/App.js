import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import Recipes from './components/Recipes';
import RecipeCard from './components/RecipeCard';

function App() {
  return (
    <BrowserRouter>
    <div className="App">


      <header className="App-header">
        <h1>Code Kitchen</h1>
        <p>
          Your place to save recipes
        </p>
      </header>

<Switch>
    <Route exact path='/' component={Recipes}/>
    <Route path='/recipes/:id' component={RecipeCard}/>
    <Route>
      <h1>Error! 404 - Not Found</h1>
    </Route>
</Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
