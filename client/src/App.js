import React from 'react';
import logo from './logo.svg';
import './App.css';
import Recipes from './components/Recipes'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Code Kitchen</h1>
        <p>
          Your place to save recipes
        </p>

      </header>
<Recipes/>

    </div>
  );
}

export default App;
