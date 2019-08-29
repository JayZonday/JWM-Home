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
          Don't know who to start? - You're in LUCK.
        </div>
      </div>
      </div>
    );
  }
}

export default FantasyFootball;
