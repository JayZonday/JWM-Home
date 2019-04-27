import React, { Component } from 'react';
import './index.css';

class CentralFooter extends Component {
  render(){
    return (
      <div className='footer-section'>
        <h2 className='title' id='footer'>JayZonday Visions <span id='club'> ♣</span></h2>
        <div className='signature'>Latest Update April 2019 - Designed & Built by <span id='signname'>JayZonday</span></div>
      </div>
    );
  }
}
export default CentralFooter;
