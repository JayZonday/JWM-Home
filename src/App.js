import React, { Component } from 'react';
import CentralHome from './components/CentralHome';
import TopNavbar from './components/TopNavbar'
import CentralFooter from './components/CentralFooter'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {


  render(){
    console.log(this.props)
    return (

      <Router>
      <TopNavbar/>
        <Switch>
          <Route path='/' exact component={ CentralHome } />
        </Switch>
        <CentralFooter/>
      </Router>
    );
  }
}

export default App;
