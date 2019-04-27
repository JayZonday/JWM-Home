import CentralHeader from '../CentralHeader'
import CentralBody from '../CentralBody'
import CentralFooter from '../CentralFooter'
import CentralCarousel from '../CentralCarousel'
import WebDevSlab from '../WebDevSlab'
import SportsSlab from '../SportsSlab'
import ArtSlab from '../ArtSlab'
import TopNavbar from '../TopNavbar'
import React, { Component } from 'react';
import './index.css';

class CentralHome extends Component {
  render(){
    return (
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
    );
  }
}

export default CentralHome;
