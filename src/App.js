import React, { Component } from 'react';
import CentralHome from './components/CentralHome';
import CentralHeader from './components/CentralHeader'
import CentralBody from './components/CentralBody'
import CentralFooter from './components/CentralFooter'
import CentralCarousel from './components/CentralCarousel'
import WebDevSlab from './components/WebDevSlab'
import SportsSlab from './components/SportsSlab'
import ArtSlab from './components/ArtSlab'
import TopNavbar from './components/TopNavbar'
import FantasyFootball from './components/FantasyFootball';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  render(){
    return (
      <Router>
      <Route path='/fantasy-football' exact component={ FantasyFootball } />
        <div>
        <TopNavbar/>
        <CentralHeader/>
        <CentralBody/>
        <CentralCarousel/>
        <WebDevSlab/>
        <ArtSlab/>
        <SportsSlab/>
        <CentralFooter/>

        </div>
      </Router>
    );
  }
}

export default App;
