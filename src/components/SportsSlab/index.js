import React, { Component } from 'react';
import './index.css';

class SportSlab extends Component {
  render(){
    return (
      <div className='sports-section'>
        <h2 className='title' id='sports'>Sports Hub - Nothing But Luck</h2>

        <div className='ml-advice'>ML Advice
          <div className='football-takes'> Football ML & Fanduel & Season-long</div>
          <div className='basketball-takes'> Basketball ML & Fanduel</div>
          <div className='baseball-takes'> Baseball ML</div>
        </div>

        <div className='hot-takes'>Nothing But Hot Takes
        <div className='football-takes'> Football Takes</div>
        <div className='basketball-takes'> Basketball Takes</div>
        <div className='baseball-takes'> Baseball Takes</div>
        </div>



        <div className='fantasy-sports'>Fantasy Sports
          <div className='fantasy-football'>Fantasy Football</div>
          <div className='fantasy-football'>Fantasy Basketball</div>
          <div className='fantasy-football'>Fantasy Baseball</div>
        </div>

      </div>
    );
  }
}
export default SportSlab;
