import CentralHeader from '../CentralHeader'
import CentralBody from '../CentralBody'
import CentralFooter from '../CentralFooter'
import CentralCarousel from '../CentralCarousel'
import WebDevSlab from '../WebDevSlab'
import SportsSlab from '../SportsSlab'
import ArtSlab from '../ArtSlab'
import React, { Component } from 'react';
import './index.css';

class CentralHome extends Component {
  render(){
    return (
      <div>
        <CentralHeader/>
        <CentralBody/>
        <CentralCarousel/>
        <WebDevSlab/>
        <ArtSlab/>
        <SportsSlab/>
      </div>
    );
  }
}

export default CentralHome;
