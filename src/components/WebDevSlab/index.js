import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

class WebDevSlab extends Component {
  render(){
    return (
      <div className='dev-section'>
      <hr className='dev-design-line' id='first'/>
      <hr className='dev-design-line' id='second'/>
        <h2 data-aos='zoom-in' className='title' id='dev'>Web Developement</h2>
        <div className='dev-info-container'>
          <div data-aos='fade-up-right' className='dev-fields'>
            <h3 className='skill-title'> Core Skills </h3>
            <hr id='dev-info-line'/>
            <div className='skill'>JavaScript</div>
            <div className='skill'>React.js</div>
            <div className='skill'>Ruby on Rails</div>
            <NavLink to='/web-designs'><div className='skill'>CSS - UX/UI Design</div></NavLink>
            <div className='skill'>SQL & Oracle Databases </div>

          </div>
          <div data-aos='fade-right' className='dev-fields'>
            <h3 className='skill-title'> Desired Industries </h3>
            <hr id='dev-info-line'/>
            <div className='skill'>Sports</div>
            <div className='skill'>Health & Fitness</div>
            <div className='skill'>Automotive</div>
            <div className='skill'>Tech</div>
            <div className='skill'>Finance</div>

          </div>
          <div data-aos='fade-left' className='dev-fields'>
            <h3 className='skill-title'> On The Horizon </h3>
            <hr id='dev-info-line'/>
            <div className='skill'>Establish & Plan new project</div>
            <div className='skill'>Find a new FSD role in NYC</div>
            <div className='skill'>Complete Nothing But Luck</div>
          </div>
          <div  data-aos='fade-up-left' className='dev-fields'>
            <h3 className='skill-title'> Educational Journey </h3>
            <hr id='dev-info-line'/>
            <div className='skill'>Flatiron School</div>
            <div className='skill'>Stockton University</div>
            <div className='skill'>Waldwick High School</div>
          </div>
        </div>
      </div>
    );
  }
}
export default WebDevSlab;
