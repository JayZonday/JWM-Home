import React, { Component } from 'react';
import './index.css';

class CentralFooter extends Component {
  render(){
    return (
      <div className='footer-section'>
        <h2 className='title' id='footer'>JayZonday Visions <img src='https://www.clipartmax.com/png/full/3-37416_clover-irish-four-leaves-luck-tattoo-white-shamrock-transparent.png' id='club'/> </h2>
        <div className='signature'>Latest Update August 2019 - Designed & Created by <span id='signname'>JayZonday</span></div>
      </div>
    );
  }
}
export default CentralFooter;
