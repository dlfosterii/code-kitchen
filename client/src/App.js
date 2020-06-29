import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import './App.css';
import Recipes from './components/Recipes';
import RecipeCard from './components/RecipeCard';
import InputForm from './components/InputForm';

function App() {
  return (
    <BrowserRouter>
    <div className="App">


      <header className="App-header">
        <h1>Code Kitchen</h1>
          Your place to save recipes
          <Link to="/new" style={{color: 'white'}}>New Recipe</Link>

          <div className="headLink">
          </div>
      </header>

<Switch>
    <Route exact path='/' component={Recipes}/>
    <Route exact path='/new' component={InputForm}/>
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
