import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Draggable, {DraggableCore} from 'react-draggable';
import './index.css';

class TopNavbar extends Component {


  handleBOTD = () => {
    if(document.querySelector('.bet').style.display === 'block'){
      document.querySelector('.bet').style.display = 'none'
    }else{
      document.querySelector('.bet').style.display = 'block'
    }
  }
  handleQOTD = () => {
    if(document.querySelector('.quote').style.display === 'block'){
      document.querySelector('.quote').style.display = 'none'
    }else{
      document.querySelector('.quote').style.display = 'block'
    }
  }



  render(){
    return (
      <div className='top-nav'>
        <div className='navbar'>

        <div className='nav-logo'>
          <NavLink to='/'>
            <img title="Return Home" className='nav-img' src='https://cdn.pixabay.com/photo/2014/03/25/16/57/clover-297708_960_720.png'/>
          </NavLink>
        </div>
          <a className='nav-btn' href="https://mailto:JMoloughney25@gmail.com" target='_blank' >Contact Me</a>
          <a className='nav-btn' href='https://www.linkedin.com/in/josephmoloughney/' target='_blank'>LinkedIn</a>
          <a className='nav-btn' href='https://github.com/JayZonday' target='_blank'>GitHub</a>
          <a className='nav-btn' href='https://www.youtube.com/channel/UCPQZKbLIPNYr36qVVAwkI6Q?view_as=subscriber' target='_blank'>YouTube</a>
        </div>


      </div>
    );
  }
}

export default TopNavbar;
