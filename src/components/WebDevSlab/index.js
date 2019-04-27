import React, { Component } from 'react';
import './index.css';

class WebDevSlab extends Component {
  render(){
    return (
      <div className='dev-section'>
      <hr className='dev-design-line' id='first'/>
      <hr className='dev-design-line' id='second'/>
        <h2 className='title' id='dev'>Web Developement</h2>
        <div className='dev-info-container'>
          <div className='dev-fields'>
            <h3 className='skill-title'> Core Skills </h3>
            <hr id='dev-info-line'/>
            <div className='skill'>Ruby</div>
            <div className='skill'>JavaScript</div>
            <div className='skill'>React.js</div>
            <div className='skill'>Ruby on Rails</div>
          </div>
          <div className='dev-fields'>
            <h3 className='skill-title'> Desired Industries </h3>
            <hr id='dev-info-line'/>
            <div className='skill'>Ruby</div>
            <div className='skill'>JavaScript</div>
            <div className='skill'>React.js</div>
            <div className='skill'>Ruby on Rails</div>
          </div>
          <div className='dev-fields'>
            <h3 className='skill-title'> On The Horizon </h3>
            <hr id='dev-info-line'/>
            <div className='skill'>Ruby</div>
            <div className='skill'>JavaScript</div>
            <div className='skill'>React.js</div>
            <div className='skill'>Ruby on Rails</div>
          </div>
          <div className='dev-fields'>
            <h3 className='skill-title'> Educational Journey </h3>
            <hr id='dev-info-line'/>
            <div className='skill'>Ruby</div>
            <div className='skill'>JavaScript</div>
            <div className='skill'>React.js</div>
            <div className='skill'>Ruby on Rails</div>
          </div>
        </div>
      </div>
    );
  }
}
export default WebDevSlab;
