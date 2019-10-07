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
            <div className='skill'>CSS - UX/UI Design</div>
            <div className='skill'>SQL & Oracle Databases </div>

          </div>
          <div data-aos='fade-right' className='dev-fields'>
            <h3 className='skill-title'> Desired Industries </h3>
            <hr id='dev-info-line'/>
            <div className='skill'>Sports</div>
            <div className='skill'>Automotive</div>
            <div className='skill'>Law & Security</div>
            <div className='skill'>Health, Food & Fitness</div>

          </div>
          <div data-aos='fade-left' className='dev-fields'>
            <h3 className='skill-title'> On The Horizon </h3>
            <hr id='dev-info-line'/>
            <div className='skill'>Find a new FSD role in NJ/NYC</div>
            <div className='skill'>Complete Nothing But Luck</div>
            <div className='skill'>Start Web-Design Sandbox </div>
          </div>
          <div  data-aos='fade-up-left' className='dev-fields'>
            <h3 className='skill-title'> Educational Journey </h3>
            <hr id='dev-info-line'/>
            <div className='skill'>Flatiron School</div>
            <div className='skill'>Stockton University</div>
            <div className='skill'>Waldwick High School</div>
          </div>

        </div>
        <NavLink to='/web-designs' className='web-design-btn'><div>Explore Web Designs</div></NavLink>
      </div>
    );
  }
}
export default WebDevSlab;
