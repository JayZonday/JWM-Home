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
          <a className='nav-btn' target='_blank' href="mailto:JMoloughney25@gmail.com">Contact Me</a>
          <button className='nav-btn'>Resume</button>
          <a className='nav-btn' href='https://www.linkedin.com/in/josephmoloughney/' target='_blank'>LinkedIn</a>
          <a className='nav-btn' href='https://github.com/JayZonday' target='_blank'>GitHub</a>
          <a className='nav-btn' href='https://www.youtube.com/channel/UCPQZKbLIPNYr36qVVAwkI6Q?view_as=subscriber' target='_blank'>YouTube</a>
          <button onClick={() => this.handleQOTD()} title='Quote of the Day' className='nav-btn'>QOTD <span id='special-char'>❞</span></button>
          <button onClick={() => this.handleBOTD()} title='Bet of the Day' className='nav-btn'>BOTD <span id='special-char'>♔</span></button>
        </div>

          <div className='nav-logo'>
            <NavLink to='/'>
              <img title="Return Home" className='nav-img' src='https://cdn.pixabay.com/photo/2014/03/25/16/57/clover-297708_960_720.png'/>
            </NavLink>
          </div>

        <Draggable>
          <div className='bet'>
            <button className='close-btn' onClick={() => this.handleBOTD()}>X</button>
            <div id='bet-text'>
              <span id='bet-header-text'>
              <b>Bet of The Day</b>
              <br/>
              December 23, 2019
              </span>
              <hr id='bet-text-divider'/>
              <div id='the-bet'>Greenbay Packers ML +190 (@ Minnesota Vikings)</div>
              <br/>
              <div id='bet-record'>17-6 Since August 8, 2019</div>
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
              <div id='last-bets'>12/6 - Parlay Special - Duke ML & Michigan ML -140 <b id='win'>[Won]</b></div>
              <div id='last-bets'>12/22 - Colts -6.5 -110 (vs. Carolina Panthers) <b id='win'>[Won]</b></div>

            </div>

          </div>
        </Draggable>

        <Draggable>
          <div className='quote'>
            <button className='close-btn' onClick={() => this.handleQOTD()}>X</button>

            <div id='quote-text'>
              <span id='quote-header-text'>
              <b>Quote of The Day</b>
              <br/>
              December 6, 2019
              </span>
              <hr id='quote-text-divider'/>
              <div id='the-quote'>
              “Can you imagine yourself in 10 years if instead of avoiding
              the things you know you should do, you
              actually did them every single day – that’s powerful."
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
