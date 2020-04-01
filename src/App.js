import React from 'react';
import './App.scss';

import Recipes from './Recipe/Recipes';
import Nav from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About';
import Shop from './Components/Shop';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Recipe from './Recipe/Recipe';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
          <Route path="/recipes" component={Recipes} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
