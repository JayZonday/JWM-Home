import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

class SportSlab extends Component {
  render(){
    return (
      <div className='sports-section'>
        <h2 className='title' id='sports'>Sports Hub - Nothing But Luck</h2>


        <NavLink to='/fantasy-football'><div className='fantasy-sport' id='ff'><span className='sport-btn-title' id='ff'>Fantasy Football</span></div></NavLink>
        <div className='fantasy-sport' id='fbb'><span className='sport-btn-title' id='fbb'>Fantasy Basketball</span></div>
        <div className='fantasy-sport' id='fb'><span className='sport-btn-title' id='fb'>Fantasy Baseball</span></div>
        <div className='fantasy-sport' id='nbl'><span className='sport-btn-title' id='nbl'>NBL <br/>[ Not Avaliable ]</span></div>


      </div>
    );
  }
}
export default SportSlab;
