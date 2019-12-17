import React, { Component } from 'react';
import CentralHome from './components/CentralHome';
import FantasyFootball from './components/FantasyFootball';
import WebDesign from './components/WebDesign';
import TopNavbar from './components/TopNavbar'
import CentralFooter from './components/CentralFooter'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

class App extends Component {


  render(){
    console.log(this.props)
    return (

      <Router>
      <TopNavbar/>
        <Switch>
          <Route path='/' exact component={ CentralHome } />
          <Route path='/fantasy-football' exact component={ FantasyFootball } />
          <Route path='/web-designs' exact component={ WebDesign } />
        </Switch>
        <CentralFooter/>
      </Router>
    );
  }
}

export default App;
