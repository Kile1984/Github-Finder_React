import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../Header/Navbar/Navbar';
import Alert from '../Alert/Alert';
import './App.module.scss';
import Home from '../pages/Home';
import About from '../pages/About';
import User from '../User/User';
import NotFound from '../pages/NotFound';

import GithubState from '../../context/github/GithubState';
import AlertState from '../../context/alert/AlertState';

const App = () => {

  return (
    <GithubState>
      <AlertState>
        <Router>
          <Navbar />
          <Alert/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path='/about' component={About} />
            <Route exact path='/user/:login' component={User} />
            <Route component={NotFound}/>
          </Switch>
        </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;
