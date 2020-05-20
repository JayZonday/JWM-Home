import React, { Component } from 'react';
import './index.css';






class CentralFooter extends Component {

  configDate(){
    let month
    let date = new Date().getMonth()
    switch(date) {
      case 0:
        month = "January";
        break;
      case 1:
        month = "February";
        break;
      case 2:
         month = "March";
        break;
      case 3:
        month = "April";
        break;
      case 4:
        month = "May";
        break;
      case 5:
        month = "June";
        break;
      case 6:
        month = "July";
        break;
      case 7:
        month = "August";
        break;
      case 8:
        month = "September";
        break;
      case 9:
        month = "October";
        break;
      case 10:
        month = "November";
        break;
      default:
        month = 'December'
        break;
    }
    return month
  }

  render(){
    return (
      <div className='footer-section'>
        <div className='signature'>Latest Update {this.configDate()} - Designed & Created by <span id='signname'>JayZonday</span></div>
      </div>
    );
  }
}
export default CentralFooter;
