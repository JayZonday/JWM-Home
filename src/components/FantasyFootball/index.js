import React, { Component } from 'react';
import './index.css';

class FantasyFootball extends Component {
  render(){
    return (
      <div>
        <div className='fantasy-page-header'>
          <h3 className='ff-title'> Fantasy Football </h3>
        </div>
        <div className='ff-intro'>
          <div className='ff-intro-box'>
            Welcome to JayZonday Visions 2019 Fantasy Football Hub - Catch all the latest news and advice here!
            Desperate for a waiver wire addition? - Need to know if a trade is fair? -
            Don't know who to start? <br/> You're in LUCK.
          </div>

          <div className='ff-nav'>
            <div className='ff-nav-btn' id='rankings'>Weekly Rankings</div>
            <div className='ff-nav-btn' id='waivers'>Waiver Wire</div>
            <div className='ff-nav-btn' id='trades'>Trading Block</div>
            <div className='ff-nav-btn' id='daily'>Daily Fantasy</div>
          </div>

        </div>

        <div className='ff-rankings-section'>
        </div>
        <div className='ff-waivers-section'>
        </div>
        <div className='ff-trades-section'>
        </div>
        <div className='ff-daily-section'>
        </div>


      </div>
    );
  }
}

export default FantasyFootball;
