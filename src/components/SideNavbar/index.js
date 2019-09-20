import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Draggable, {DraggableCore} from 'react-draggable';
import './index.css';

class SideNavbar extends Component {

  handleCode = () => {
    document.querySelector('.dev-section').scrollIntoView({behavior: 'smooth', block: 'center'})
  }
  handleArt = () => {
    document.querySelector('.art-section').scrollIntoView({behavior: 'smooth', block: 'center'})
  }
  handleSports = () => {
    document.querySelector('.sports-section').scrollIntoView({behavior: 'smooth', block: 'center'})
  }
  handleReel = () => {
    document.querySelector('.carousel-section').scrollIntoView({behavior: 'smooth', block: 'center'})
  }
  handleTop = () => {
    document.querySelector('.top-nav').scrollIntoView({behavior: 'smooth', block: 'center'})
  }

  render(){
    return (
      <div>
        <Draggable>
          <div className='quicklinks'>
            <div title='Top of Page' onClick={()=> this.handleTop()} className='ql-btn'>⌅</div>
            <div title='Highlight Reel' onClick={()=> this.handleReel()} className='ql-btn'>✪</div>
            <div title='Web-Dev Section' onClick={()=> this.handleCode()} className='ql-btn'></div>
            <div title='Art Section' onClick={()=> this.handleArt()} className='ql-btn'>✎</div>
            <div title='Sport Section' onClick={()=> this.handleSports()} className='ql-btn'>♛</div>

          </div>
        </Draggable>
      </div>
    );
  }
}

export default SideNavbar;
