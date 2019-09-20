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
          <button className='nav-btn'><a target='_blank' href="mailto:JMoloughney25@gmail.com">Contact</a> <span id='special-char'>✉</span></button>
          <button className='nav-btn'>Resume</button>
          <button className='nav-btn'><a href='https://www.linkedin.com/in/josephmoloughney/' target='_blank'>LinkedIn</a></button>
          <button className='nav-btn'><a href='https://github.com/JayZonday' target='_blank'>GitHub</a></button>
          <button className='nav-btn'><a href='https://www.youtube.com/channel/UCPQZKbLIPNYr36qVVAwkI6Q?view_as=subscriber' target='_blank'>YouTube</a></button>
          <button onClick={() => this.handleQOTD()} title='Quote of the Day' className='nav-btn'>QOTD <span id='special-char'>❞</span></button>
          <button onClick={() => this.handleBOTD()} title='Bet of the Day' className='nav-btn'>BOTD <span id='special-char'>♔</span></button>
        </div>

          <div className='nav-logo'>
            <NavLink to='/'>
            <img title="It's all Luck" className='nav-img' src='https://cdn.shopify.com/s/files/1/1685/2975/products/Lucky_Shamrock_green_detail.jpg?v=1549032910'/>
            </NavLink>
          </div>

        <Draggable>
          <div className='bet'>

            <div id='bet-text'>
              <span id='bet-header-text'>
              Bet of The Day
              <br/>
              September 20, 2019
              </span>
              <hr id='bet-text-divider'/>
              <div id='the-bet'>CFB: Utah (@ USC) -3.5 -115</div>
              <br/>
              <div id='bet-record'>6-3 Since August 8, 2019</div>
              <div id='last-bets'>8/8 - San Francisco Giants ML +100 <b>[Won]</b></div>
              <div id='last-bets'>8/9 - New York Mets ML +115 <b>[Won]</b></div>
              <div id='last-bets'>8/11 - Philadelphia Phillies ML -115 <b>[Lost]</b></div>
              <div id='last-bets'>8/18 - New York Yankees ML +105 <b>[Lost]</b></div>
              <div id='last-bets'>8/20 - St. Louis Cardinals ML +100 <b>[Won]</b></div>
              <div id='last-bets'>8/26 - Colorado Rockies ML +140 <b>[Won]</b></div>
              <div id='last-bets'>8/27 - New York Mets ML EVEN <b>[Lost]</b></div>
              <div id='last-bets'>9/5 - Greenbay Packers ML +150 <b>[Won]</b></div>
              <div id='last-bets'>9/16 - Cleveland Browns -6.5 -110 <b>[Won]</b></div>

            </div>
          </div>
        </Draggable>

        <Draggable>
          <div className='quote'>

            <div id='quote-text'>
              <span id='quote-header-text'>
              Quote of The Day
              <br/>
              September 16, 2019
              </span>
              <hr id='quote-text-divider'/>
              <div id='the-quote'>“When you dance, your purpose is not to get to a certain place on the floor. It’s to enjoy each step along the way.”<br/><br/><span>~ Wayne Dyer</span></div>
              <br/>
              <div id='last-quote'></div>
              <div id='last-quote'></div>

            </div>
          </div>
        </Draggable>


      </div>
    );
  }
}

export default TopNavbar;
