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
      case 7:
        month = "August";
      case 8:
        month = "September";
      case 9:
        month = "October";
      case 10:
        month = "November";
      case 11:
        month = "December";
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
