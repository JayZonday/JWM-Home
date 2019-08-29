import React, { Component } from 'react';
import CentralHome from './components/CentralHome';
import FantasyFootball from './components/FantasyFootball';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  render(){
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={ CentralHome } />
          <Route path='/fantasy-football' exact component={ FantasyFootball } />
        </Switch>
      </Router>
    );
  }
}

export default App;
