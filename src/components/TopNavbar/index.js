import React, { Component } from 'react';
import './index.css';

class TopNavbar extends Component {
  render(){
    return (
      <div className='top-nav'>
        <div className='navbar'>
          <button className='nav-btn'>Contact <span id='special-char'>✆</span></button>
          <button className='nav-btn'>Resume</button>
          <button className='nav-btn'>Twitter</button>
          <button className='nav-btn'>Facebook</button>
          <button className='nav-btn'>LinkedIn</button>
          <button className='nav-btn'>YouTube</button>
          <button className='nav-btn'>GitHub</button>
          <button className='nav-btn'>Instagram</button>
          <button title='Bet of the Day' className='nav-btn'>BOTD <span id='special-char'>♔</span></button>
        </div>
        <div className='nav-logo'>
          <img title="It's all Luck" className='nav-img' src='https://cdn.shopify.com/s/files/1/1685/2975/products/Lucky_Shamrock_green_detail.jpg?v=1549032910'/>
        </div>

        <div className='quicklinks'>
          <div title='Web-Dev Section' className='ql-btn'></div>
          <div title='Art Section' className='ql-btn'>✎</div>
          <div title='Sport Section' className='ql-btn'>✪</div>
        </div>
      </div>
    );
  }
}

export default TopNavbar;
