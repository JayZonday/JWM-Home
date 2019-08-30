import React, { Component } from 'react';
import './index.css';

class FantasyFootball extends Component {
  render(){
    return (
      <div>
        <div className='fantasy-page-header'>
          <h3 className='ff-title'> Fantasy Football </h3>
        </div>
        <div className='ff-intro'>
          <div className='ff-intro-box'>
            Welcome to JayZonday Visions 2019 Fantasy Football Hub - Catch all the latest news and advice here!
            Desperate for a waiver wire addition?  Need a trade option to target?
            Don't know who to start this week? <br/> You're in <span className='luck'>LUCK</span>
          </div>

          <div className='ff-nav'>
            <div className='ff-nav-btn' id='rankings'>Weekly Rankings<hr className='ff-nav-btn-underline'/></div>
            <div className='ff-nav-btn' id='waivers'>Waiver Wire<hr className='ff-nav-btn-underline'/></div>
            <div className='ff-nav-btn' id='trades'>Trading Block<hr className='ff-nav-btn-underline'/></div>
            <div className='ff-nav-btn' id='daily'>Daily Fantasy<hr className='ff-nav-btn-underline'/></div>
          </div>

        </div>

        <div className='ff-rankings-section'>
          <h3 className='ff-section-title' id='greenbg'> Weekly Rankings</h3>
          <div className='ff-week-desc'>Week 1 (September 5th - 9th)</div>
          <div className='rb-section'>
            <h3 className='rankings-title'>Running Backs</h3>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
              <div>7</div>
              <div>8</div>
              <div>9</div>
              <div>10</div>
              <div>11</div>
              <div>12</div>
              <div>13</div>
              <div>14</div>
              <div>15</div>
          </div>
          <div className='wr-section'>
            <h3 className='rankings-title'>Wide Recievers</h3>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
              <div>7</div>
              <div>8</div>
              <div>9</div>
              <div>10</div>
              <div>11</div>
              <div>12</div>
              <div>13</div>
              <div>14</div>
              <div>15</div>
          </div>
          <div className='qb-section'>
            <h3 className='rankings-title'>Quarterbacks</h3>
            <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
              <div>7</div>
              <div>8</div>
              <div>9</div>
              <div>10</div>
              <div>11</div>
              <div>12</div>
              <div>13</div>
              <div>14</div>
              <div>15</div>
          </div>
          <div className='te-section'>
            <h3 className='rankings-title'>Tight Ends</h3>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
              <div>7</div>
              <div>8</div>
              <div>9</div>
              <div>10</div>
              <div>11</div>
              <div>12</div>
              <div>13</div>
              <div>14</div>
              <div>15</div>
          </div>
        </div>

        <div className='ff-waivers-section'>
          <h3 className='ff-section-title' id='whitebg'> Weekly Waiver Wire </h3>
          <div className='ff-week-desc'>Week 1 (September 5th - 9th)</div>
          <div className='rb-section'>
            <h3 className='waiver-title'>Running Backs</h3>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
          </div>
          <div className='wr-section'>
            <h3 className='waiver-title'>Wide Recievers</h3>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
          </div>
          <div className='qb-section'>
            <h3 className='waiver-title'>Quarterbacks</h3>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
          </div>
          <div className='te-section'>
            <h3 className='waiver-title'>Tight Ends</h3>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
          </div>
        </div>

        <div className='ff-trades-section'>
          <h3 className='ff-section-title' id='greenbg'> Trading Block </h3>
          <div className='buy-section'>
            <h3 className='trade-title'>Buy Low</h3>
          </div>
          <div className='sell-section'>
            <h3 className='trade-title'>Sell High</h3>
          </div>
        </div>

        <div className='ff-daily-section'>
          <h3 className='ff-section-title' id='whitebg'> Daily Fantasy</h3>
          <div className='ff-week-desc'>Week 1 (September 8th)</div>
          <div className='rb-section'>
            <h3 className='waiver-title'>Running Backs</h3>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
              <div>7</div>
              <div>8</div>
              <div>9</div>
              <div>10</div>
          </div>
          <div className='wr-section'>
            <h3 className='waiver-title'>Wide Recievers</h3>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
              <div>7</div>
              <div>8</div>
              <div>9</div>
              <div>10</div>
          </div>
          <div className='qb-section'>
            <h3 className='waiver-title'>Quarterbacks</h3>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
          </div>
          <div className='te-section'>
            <h3 className='waiver-title'>Tight Ends</h3>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
          </div>
        </div>


      </div>
    );
  }
}

export default FantasyFootball;
