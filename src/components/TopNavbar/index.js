import React, { Component } from 'react';
import Draggable, {DraggableCore} from 'react-draggable';
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
  handleReel = () => {
    document.querySelector('.carousel-section').scrollIntoView({behavior: 'smooth', block: 'center'})
  }
  handleTop = () => {
    document.querySelector('.top-nav').scrollIntoView({behavior: 'smooth', block: 'center'})
  }
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
          <button className='nav-btn'><a target='_blank' href="mailto:JMoloughney25@gmail.com">Contact</a><span id='special-char'>✆</span></button>
          <button className='nav-btn'>Resume</button>
          <button className='nav-btn'><a href='' target='_blank'>Twitter</a></button>
          <button className='nav-btn'><a href='https://www.linkedin.com/in/josephmoloughney/' target='_blank'>LinkedIn</a></button>
          <button className='nav-btn'><a href='https://github.com/JayZonday' target='_blank'>GitHub</a></button>
          <button className='nav-btn'><a href='https://www.youtube.com/channel/UCPQZKbLIPNYr36qVVAwkI6Q?view_as=subscriber' target='_blank'>YouTube</a></button>
          <button className='nav-btn'><a href='https://www.instagram.com/jay_zonday/?hl=en' target='_blank'>Instagram</a></button>
          <button onClick={() => this.handleQOTD()} title='Quote of the Day' className='nav-btn'>QOTD <span id='special-char'>❞</span></button>
          <button onClick={() => this.handleBOTD()} title='Bet of the Day' className='nav-btn'>BOTD <span id='special-char'>♔</span></button>
        </div>
        <div className='nav-logo'>
          <img title="It's all Luck" className='nav-img' src='https://cdn.shopify.com/s/files/1/1685/2975/products/Lucky_Shamrock_green_detail.jpg?v=1549032910'/>
        </div>

        <Draggable>
          <div className='bet'>

            <div id='bet-text'>
              <span id='bet-header-text'>
              Bet of The Day
              <br/>
              August 18, 2019
              </span>
              <hr id='bet-text-divider'/>
              <div id='the-bet'>New York Yankees ML +105 (vs Cleveland Indians)</div>
              <br/>
              <div id='bet-record'>2-1 Since August 8, 2019</div>
              <div id='last-bets'>8/8 - San Francisco Giants ML +100 (vs Philadelphia Phillies) <b>[Won]</b></div>
              <div id='last-bets'>8/9 - New York Mets ML +115 (vs Washington Nationals) <b>[Won]</b></div>
              <div id='last-bets'>8/11 - Philadelphia Phillies ML -115 (@ San Francisco Giants) <b>[Lost]</b></div>

            </div>
          </div>
        </Draggable>

        <Draggable>
          <div className='quote'>

            <div id='quote-text'>
              <span id='quote-header-text'>
              Quote of The Day
              <br/>
              August 17, 2019
              </span>
              <hr id='quote-text-divider'/>
              <div id='the-quote'>"If I have seen further it is by standing on the shoulders of Giants" <br/><span>~ Isaac Newton</span></div>
              <br/>
              <div id='last-quote'></div>
              <div id='last-quote'></div>

            </div>
          </div>
        </Draggable>

        <div className='quicklinks'>
          <div title='Top of Page' onClick={()=> this.handleTop()} className='ql-btn'>⌅</div>
          <div title='Highlight Reel' onClick={()=> this.handleReel()} className='ql-btn'>✪</div>
          <div title='Web-Dev Section' onClick={()=> this.handleCode()} className='ql-btn'></div>
          <div title='Art Section' onClick={()=> this.handleArt()} className='ql-btn'>✎</div>
          <div title='Sport Section' onClick={()=> this.handleSports()} className='ql-btn'>♛</div>

        </div>
      </div>
    );
  }
}

export default TopNavbar;
