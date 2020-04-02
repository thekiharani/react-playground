import React from 'react';
import './App.scss';

import Recipes from './Recipe/Recipes';
import Nav from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About';
import Post from './Components/Post';
import PostView from './Components/PostView';

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
          <Route path="/recipes" component={Recipes} />
          <Route path="/blog" exact component={Post} />
          <Route path="/post/:id" exact component={PostView} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
