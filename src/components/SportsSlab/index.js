import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

class SportSlab extends Component {
  render(){
    return (
      <div className='sports-section'>
        <h2 className='title' id='sports'>Sports Hub - Nothing But Luck</h2>


        <div className='fantasy-sport'> Football ML & Fanduel</div>
        <div className='fantasy-sport'> Basketball ML & Fanduel</div>
        <div className='fantasy-sport'> Baseball ML</div>



        <div className='fantasy-sport'> Football Takes</div>
        <div className='fantasy-sport'> Basketball Takes</div>
        <div className='fantasy-sport'> Baseball Takes</div>





        <NavLink to='/fantasy-football'><div className='fantasy-sport'>Fantasy Football</div></NavLink>
        <div className='fantasy-sport'>Fantasy Basketball</div>
        <div className='fantasy-sport'>Fantasy Baseball</div>
        <div className='fantasy-sport' id='nbl'>NBL [not available yet]</div>


      </div>
    );
  }
}
export default SportSlab;
