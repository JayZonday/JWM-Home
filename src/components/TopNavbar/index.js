import React, { Component } from 'react';
import './index.css';

class TopNavbar extends Component {

  handleCode = () => {
    document.querySelector('.dev-section').scrollIntoView({behavior: 'smooth', block: 'center'})
  }
  handleArt = () => {
    document.querySelector('.art-section').scrollIntoView({behavior: 'smooth', block: 'center'})
  }
  handleSports = () => {
    document.querySelector('.sports-section').scrollIntoView({behavior: 'smooth', block: 'center'})
  }
  handleTop = () => {
    document.querySelector('.top-nav').scrollIntoView({behavior: 'smooth', block: 'center'})
  }


  render(){
    return (
      <div className='top-nav'>
        <div className='navbar'>
          <button className='nav-btn'>Contact <span id='special-char'>✆</span></button>
          <button className='nav-btn'>Resume</button>
          <button className='nav-btn'><a href='' target='_blank'>Twitter</a></button>
          <button className='nav-btn'><a href='https://www.facebook.com/JM.KID' target='_blank'>Facebook</a></button>
          <button className='nav-btn'><a href='https://www.linkedin.com/in/josephmoloughney/' target='_blank'>LinkedIn</a></button>
          <button className='nav-btn'><a href='https://www.youtube.com/channel/UCPQZKbLIPNYr36qVVAwkI6Q?view_as=subscriber' target='_blank'>YouTube</a></button>
          <button className='nav-btn'><a href='https://github.com/JayZonday' target='_blank'>GitHub</a></button>
          <button className='nav-btn'><a href='https://www.instagram.com/jay_zonday/?hl=en' target='_blank'>Instagram</a></button>
          <button title='Bet of the Day' className='nav-btn'>BOTD <span id='special-char'>♔</span></button>
        </div>
        <div className='nav-logo'>
          <img title="It's all Luck" className='nav-img' src='https://cdn.shopify.com/s/files/1/1685/2975/products/Lucky_Shamrock_green_detail.jpg?v=1549032910'/>
        </div>

        <div className='quicklinks'>
          <div title='Web-Dev Section' onClick={()=> this.handleCode()} className='ql-btn'></div>
          <div title='Art Section' onClick={()=> this.handleArt()} className='ql-btn'>✎</div>
          <div title='Sport Section' onClick={()=> this.handleSports()} className='ql-btn'>✪</div>
          <div title='Top of Page' onClick={()=> this.handleTop()} className='ql-btn'>↟</div>
        </div>
      </div>
    );
  }
}

export default TopNavbar;
