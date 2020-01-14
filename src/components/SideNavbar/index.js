import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Draggable, {DraggableCore} from 'react-draggable';
import './index.css';




class SideNavbar extends Component {

  handleCode = () => {
    if(document.querySelector('.dev-section').style.display === 'block'){
      document.querySelector('.dev-section').style.display = 'none'
    }else{
      document.querySelector('.dev-section').style.display = 'block'
      document.querySelector('.art-section').style.display = 'none'
      document.querySelector('.sports-section').style.display = 'none'
      document.querySelector('.carousel-section').style.display = 'none'
      document.querySelector('.dev-section').scrollIntoView({behavior: 'smooth', block: 'center'})
    }
  }
  handleArt = () => {
    if(document.querySelector('.art-section').style.display === 'block'){
      document.querySelector('.art-section').style.display = 'none'
    }else{
      document.querySelector('.art-section').style.display = 'block'
      document.querySelector('.dev-section').style.display = 'none'
      document.querySelector('.sports-section').style.display = 'none'
      document.querySelector('.carousel-section').style.display = 'none'
      document.querySelector('.art-section').scrollIntoView({behavior: 'smooth', block: 'center'})
    }
  }
  handleReel = () => {
    if(document.querySelector('.carousel-section').style.display === 'block'){
      document.querySelector('.carousel-section').style.display = 'none'
    }else{
      document.querySelector('.carousel-section').style.display = 'block'
      document.querySelector('.art-section').style.display = 'none'
      document.querySelector('.sports-section').style.display = 'none'
      document.querySelector('.dev-section').style.display = 'none'
      document.querySelector('.carousel-section').scrollIntoView({behavior: 'smooth', block: 'center'})
    }
  }
  handleTop = () => {
    document.querySelector('.top-nav').scrollIntoView({behavior: 'smooth', block: 'center'})
  }

  render(){
    return (
      <div>
          <div className='quicklinks'>
            <div title='Highlight Reel' onClick={()=> this.handleReel()} className='ql-btn'>✪</div>
            <div title='Web-Dev Section' onClick={()=> this.handleCode()} className='ql-btn'></div>
            <div title='Art Section' onClick={()=> this.handleArt()} className='ql-btn'>✎</div>
          </div>
      </div>
    );
  }
}

export default SideNavbar;
