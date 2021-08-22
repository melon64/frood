import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import RecipePage from "./components/RecipePage/RecipePage";
import Auth from './components/Auth/Auth';
import Fridge from "./components/Fridge/Fridge";
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/recipes" exact component={() => <RecipePage className='recipespage'/>} />
          <Route path="/auth" exact component={() => <Auth/>} />
          <Route path="/fridge" exact component={() => <Fridge/>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;