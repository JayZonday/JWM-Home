import React, { Component } from 'react';
import './index.css';

var day
var configDate = () => {
  switch(new Date().getMonth()) {
    case 0:
      day = "January";
      break;
    case 1:
      day = "February";
      break;
    case 2:
       day = "March";
      break;
    case 3:
      day = "April";
      break;
    case 4:
      day = "May";
      break;
    case 5:
      day = "June";
      break;
    case 6:
      day = "July";
  }
  return day
}



class CentralFooter extends Component {
  render(){
    return (
      <div className='footer-section'>
        <div className='signature'>Latest Update configDate - Designed & Created by <span id='signname'>JayZonday</span></div>
      </div>
    );
  }
}
export default CentralFooter;
