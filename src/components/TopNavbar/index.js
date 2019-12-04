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
              <img title="Return Home" className='nav-img' src='http://www.pngmart.com/files/10/Clover-PNG-Transparent.png'/>
            </NavLink>
          </div>

        <Draggable>
          <div className='bet'>
            <button className='close-btn' onClick={() => this.handleBOTD()}>X</button>
            <div id='bet-text'>
              <span id='bet-header-text'>
              Bet of The Day
              <br/>
              December 4, 2019
              </span>
              <hr id='bet-text-divider'/>
              <div id='the-bet'></div>
              <br/>
              <div id='bet-record'>15-6 Since August 8, 2019</div>
              <div id='last-bets'>8/8 - San Francisco Giants ML +100 <b id='win'>[Won]</b></div>
              <div id='last-bets'>8/9 - New York Mets ML +115 <b id='win'>[Won]</b></div>
              <div id='last-bets'>8/11 - Philadelphia Phillies ML -115 <b id='lost'>[Lost]</b></div>
              <div id='last-bets'>8/18 - New York Yankees ML +105 <b id='lost'>[Lost]</b></div>
              <div id='last-bets'>8/20 - St. Louis Cardinals ML +100 <b id='win'>[Won]</b></div>
              <div id='last-bets'>8/26 - Colorado Rockies ML +140 <b id='win'>[Won]</b></div>
              <div id='last-bets'>8/27 - New York Mets ML EVEN <b id='lost'>[Lost]</b></div>
              <div id='last-bets'>9/5 - Greenbay Packers ML +150 <b id='win'>[Won]</b></div>
              <div id='last-bets'>9/16 - Cleveland Browns -6.5 -110 <b id='win'>[Won]</b></div>
              <div id='last-bets'>10/7 - New York Yankees -1.5 +108 <b id='win'>[Won]</b></div>
              <div id='last-bets'>10/11 - Washington Nationals ML +112 <b id='win'>[Won]</b></div>
              <div id='last-bets'>10/12 - Kentucky Wildcats -7 -110 <b id='lost'>[Lost]</b></div>
              <div id='last-bets'>10/14 - Washington Nationals ML -135 <b id='win'>[Won]</b></div>
              <div id='last-bets'>10/15 - New York Yankees ML +140 <b id='lost'>[Lost]</b></div>
              <div id='last-bets'>10/16 - Pittsburgh Penguins ML -115 <b id='win'>[Won]</b></div>
              <div id='last-bets'>10/21 - New England Patriots -5.5 1-Half -115 <b id='win'>[Won]</b></div>
              <div id='last-bets'>10/22 - Los Angeles Lakers -3 -110 <b id='lost'>[Lost]</b></div>
              <div id='last-bets'>10/24 - Atlanta Hawks ML -106 <b id='win'>[Won]</b></div>
              <div id='last-bets'>10/30 - Golden State Warriors ML +170 <b id='win'>[Won]</b></div>
              <div id='last-bets'>11/1 - Wake Forest -3.5 1H -115 <b id='win'>[Won]</b></div>
              <div id='last-bets'>11/18 - Kansas City & under 52.5 points +170 <b id='win'>[Won]</b></div>

            </div>

          </div>
        </Draggable>

        <Draggable>
          <div className='quote'>
            <button className='close-btn' onClick={() => this.handleQOTD()}>X</button>

            <div id='quote-text'>
              <span id='quote-header-text'>
              Quote of The Day
              <br/>
              November 18, 2019
              </span>
              <hr id='quote-text-divider'/>
              <div id='the-quote'>
              “The purpose of life is finding the largest burden that you can bear and bearing it.”
                <br/><br/>
                <span>~ Jordan Peterson</span></div>
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
