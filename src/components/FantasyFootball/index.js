import React, { Component } from 'react';
import './index.css';

class FantasyFootball extends Component {

  handleRankings = () => {
    document.querySelector('.ff-rankings-section').scrollIntoView({behavior: 'smooth', block: 'center'})
  }
  handleWire = () => {
    document.querySelector('.ff-waivers-section').scrollIntoView({behavior: 'smooth', block: 'center'})
  }
  handleTrades = () => {
    document.querySelector('.ff-trades-section').scrollIntoView({behavior: 'smooth', block: 'center'})
  }
  handleDaily = () => {
    document.querySelector('.ff-daily-section').scrollIntoView({behavior: 'smooth', block: 'center'})
  }
  handleRbReveal = () => {
    if(document.querySelector('.rb-names').style.display === 'none'){
      document.querySelector('.rb-names').style.display = 'block'
      document.querySelector('.rb-section').style.height = '420px'
    }else{
      document.querySelector('.rb-names').style.display = 'none'
      document.querySelector('.rb-section').style.height = '160px'
    }
  }
  handleWrReveal = () => {
    if(document.querySelector('.wr-names').style.display === 'none'){
      document.querySelector('.wr-names').style.display = 'block'
      document.querySelector('.wr-section').style.height = '420px'
    }else{
      document.querySelector('.wr-names').style.display = 'none'
      document.querySelector('.wr-section').style.height = '160px'
    }
  }
  handleQbReveal = () => {
    if(document.querySelector('.qb-names').style.display === 'none'){
      document.querySelector('.qb-names').style.display = 'block'
      document.querySelector('.qb-section').style.height = '420px'
    }else{
      document.querySelector('.qb-names').style.display = 'none'
      document.querySelector('.qb-section').style.height = '160px'
    }
  }
  handleTeReveal = () => {
    if(document.querySelector('.te-names').style.display === 'none'){
      document.querySelector('.te-names').style.display = 'block'
      document.querySelector('.te-section').style.height = '420px'
    }else{
      document.querySelector('.te-names').style.display = 'none'
      document.querySelector('.te-section').style.height = '160px'
    }
  }

  render(){
    return (
      <div>
        <div className='fantasy-page-header'>
          <h3 className='ff-title'> Fantasy Football </h3>
        </div>
        <div className='ff-intro'>
        <img className='ff-logo' src='https://i.ibb.co/fXThCh4/sham-helm.png'/>
        <hr className='design-lines' id='first' />
        <hr className='design-lines' id='fourth' />
        <hr className='design-lines' id='second' />
        <hr className='design-lines' id='third' />
        <hr className='design-lines' id='fourth' />
          <div className='ff-intro-box'>
            Welcome to JayZonday Visions 2019 Fantasy Football Hub - Catch all the latest news and advice here!
            Desperate for a waiver wire addition?  Need a trade option to target?
            Don't know who to start this week? <br/> You're in <span className='luck'>LUCK</span>
          </div>

          <div className='ff-nav'>
            <div className='ff-nav-btn' id='rankings' onClick={()=> this.handleRankings()}>Weekly Rankings<hr className='ff-nav-btn-underline'/></div>
            <div className='ff-nav-btn' id='waivers' onClick={()=> this.handleWire()}>Waiver Wire<hr className='ff-nav-btn-underline'/></div>
            <div className='ff-nav-btn' id='trades' onClick={()=> this.handleTrades()}>Trading Block<hr className='ff-nav-btn-underline'/></div>
            <div className='ff-nav-btn' id='daily' onClick={()=> this.handleDaily()}>Daily Fantasy<hr className='ff-nav-btn-underline'/></div>
          </div>

        </div>

        <div className='ff-rankings-section'>
          <h3 className='ff-section-title' id='greenbg'> Weekly Rankings</h3>
          <div className='ff-week-desc'>Week 2 (September 12th - 16th)</div>
          <div className='rb-section' id='greenbg'>
            <h3 className='rankings-title'>Running Backs</h3>
              <button className='reveal-btn' onClick={()=> this.handleRbReveal()}><img src='https://www.clipartmax.com/png/full/3-37416_clover-irish-four-leaves-luck-tattoo-white-shamrock-transparent.png' className='reveal-btn-img'/></button>
            <div className='rb-names'>
              <div className='player-name'><span id='rank'>1.</span> Christian McCaffrey [CAR]</div>
              <div className='player-name'><span id='rank'>2.</span> Alvin Kamara [NO]</div>
              <div className='player-name'><span id='rank'>3.</span> Derrick Henry [TEN]</div>
              <div className='player-name'><span id='rank'>4.</span> Dalvin Cook [MIN]</div>
              <div className='player-name'><span id='rank'>5.</span> Ezekiel Elliot [DAL]</div>
              <div className='player-name'><span id='rank'>6.</span> David Johnson [ARI]</div>
              <div className='player-name'><span id='rank'>7.</span> Chris Carson [SEA]</div>
              <div className='player-name'><span id='rank'>8.</span> Leveon Bell [NYJ]</div>
              <div className='player-name'><span id='rank'>9.</span> Saquon Barkley [NYG]</div>
              <div className='player-name'><span id='rank'>10.</span> Todd Gurley II [LAR]</div>
              <div className='player-name'><span id='rank'>11.</span> Nick Chubb [CLE]</div>
              <div className='player-name'><span id='rank'>12.</span> Marlon Mack [IND]</div>
              <div className='player-name'><span id='rank'>13.</span> James Conner [PIT]</div>
              <div className='player-name'><span id='rank'>14.</span> Sony Michel [NE]</div>
              <div className='player-name'><span id='rank'>15.</span> Leonard Fournette [JAX]</div>
              <div className='player-name'><span id='rank'>16.</span> Kerryon Johnson [DET]</div>
              <div className='player-name'><span id='rank'>17.</span> Austin Ekeler [LAC]</div>
              <div className='player-name'><span id='rank'>18.</span> Joe Mixon [CIN]</div>
              <div className='player-name'><span id='rank'>19.</span> Aaron Jones [GB]</div>
              <div className='player-name'><span id='rank'>20.</span> Devonta Freeman [ATL]</div>
              <div className='player-name'><span id='rank'>21.</span> Josh Jacobs [OAK]</div>
              <div className='player-name'><span id='rank'>22.</span> Mark Ingram II [BAL]</div>
              <div className='player-name'><span id='rank'>23.</span> Devin Singletary [BUF]</div>
              <div className='player-name'><span id='rank'>24.</span> Adrian Peterson [WAS]</div>
              <div className='player-name'><span id='rank'>25.</span> Duke Johnson Jr [HOU]</div>
              <div className='player-name'><span id='rank'>26.</span> Damien Williams [KC]</div>
              <div className='player-name'><span id='rank'>27.</span> Phillip Lindsay [DEN]</div>
              <div className='player-name'><span id='rank'>28.</span> David Montgomery [CHI]</div>
              <div className='player-name'><span id='rank'>29.</span> Carlos Hyde [HOU]</div>
              <div className='player-name'><span id='rank'>30.</span> Lesean McCoy [KC]</div>
            </div>
          </div>
          <div className='wr-section' id='greenbg'>
            <h3 className='rankings-title'>Wide Recievers</h3>
            <button className='reveal-btn' onClick={()=> this.handleWrReveal()}><img src='https://www.clipartmax.com/png/full/3-37416_clover-irish-four-leaves-luck-tattoo-white-shamrock-transparent.png' className='reveal-btn-img'/></button>
              <div className='wr-names'>
              <div className='player-name'><span id='rank'>1.</span> DeAndre Hopkins [HOU]</div>
              <div className='player-name'><span id='rank'>2.</span> Julio Jones [ATL]</div>
              <div className='player-name'><span id='rank'>3.</span> Antonio Brown [NE]</div>
              <div className='player-name'><span id='rank'>4.</span> Mike Evans [TB]</div>
              <div className='player-name'><span id='rank'>5.</span> Michael Thomas [NO]</div>
              <div className='player-name'><span id='rank'>6.</span> Keenan Allen [LAC]</div>
              <div className='player-name'><span id='rank'>7.</span> JuJu Smith-Schuster [PIT]</div>
              <div className='player-name'><span id='rank'>8.</span> Davante Adams [GB]</div>
              <div className='player-name'><span id='rank'>9.</span> Amari Cooper [DAL]</div>
              <div className='player-name'><span id='rank'>10.</span> Adam Thielen [MIN]</div>
              <div className='player-name'><span id='rank'>11.</span> Kenny Golladay [DET]</div>
              <div className='player-name'><span id='rank'>12.</span> Sammy Watkins [KC]</div>
              <div className='player-name'><span id='rank'>13.</span> Julian Edelman [NE]</div>
              <div className='player-name'><span id='rank'>14.</span> Josh Gordon [NE]</div>
              <div className='player-name'><span id='rank'>15.</span> Stefon Diggs [MIN]</div>
              <div className='player-name'><span id='rank'>16.</span> Allen Robinson [CHI]</div>
              <div className='player-name'><span id='rank'>17.</span> Cooper Kupp [LAR]</div>
              <div className='player-name'><span id='rank'>18.</span> Robert Woods [LAR]</div>
              <div className='player-name'><span id='rank'>19.</span> Brandin Cooks [LAR]</div>
              <div className='player-name'><span id='rank'>20.</span> TY Hilton [IND]</div>
              <div className='player-name'><span id='rank'>21.</span> Tyrell Williams [OAK]</div>
              <div className='player-name'><span id='rank'>22.</span> Ashlon Jeffery [PHI]</div>
              <div className='player-name'><span id='rank'>23.</span> DJ Moore [CAR]</div>
              <div className='player-name'><span id='rank'>24.</span> Chris Godwin [TB]</div>
              <div className='player-name'><span id='rank'>25.</span> Desean Jackson [PHI]</div>
              <div className='player-name'><span id='rank'>26.</span>  Mike Williams [LAC]</div>
              <div className='player-name'><span id='rank'>27.</span>  Tyler Boyd [CIN]</div>
              <div className='player-name'><span id='rank'>28.</span>  Tyler Lockett [SEA]</div>
              <div className='player-name'><span id='rank'>29.</span>  Marquise Brown [BAL]</div>
              <div className='player-name'><span id='rank'>30.</span>  Dede Westbrook [JAX]</div>
            </div>
          </div>
          <div className='qb-section' id='greenbg'>
            <h3 className='rankings-title'>Quarterbacks</h3>
            <button className='reveal-btn' onClick={()=> this.handleQbReveal()}><img src='https://www.clipartmax.com/png/full/3-37416_clover-irish-four-leaves-luck-tattoo-white-shamrock-transparent.png' className='reveal-btn-img'/></button>
          <div className='qb-names'>
            <div className='player-name'><span id='rank'>1.</span> Patrick Mahomes [KC]</div>
            <div className='player-name'><span id='rank'>2.</span> Lamar Jackson [BAL]</div>
            <div className='player-name'><span id='rank'>3.</span> Tom Brady [NE]</div>
            <div className='player-name'><span id='rank'>4.</span> Aaron Rodgers [GB]</div>
            <div className='player-name'><span id='rank'>5.</span> Drew Brees [NO]</div>
            <div className='player-name'><span id='rank'>6.</span> Dak Prescott [DAL]</div>
            <div className='player-name'><span id='rank'>7.</span> Deshaun Watson [HOU]</div>
            <div className='player-name'><span id='rank'>8.</span> Carson Wentz [PHI]</div>
            <div className='player-name'><span id='rank'>9.</span> Cam Newton [CAR]</div>
            <div className='player-name'><span id='rank'>10.</span> Russell Wilson [SEA]</div>
            <div className='player-name'><span id='rank'>11.</span> Ben Roethlisberger [PIT]</div>
            <div className='player-name'><span id='rank'>12.</span> Philip Rivers [LAC]</div>
            <div className='player-name'><span id='rank'>13.</span> Jared Goff [LAR]</div>
            <div className='player-name'><span id='rank'>14.</span> Matthew Stafford [DET]</div>
            <div className='player-name'><span id='rank'>15.</span> Matt Ryan [ATL]</div>
          </div>
          </div>
          <div className='te-section' id='greenbg'>
            <h3 className='rankings-title'>Tight Ends</h3>
            <button className='reveal-btn' onClick={()=> this.handleTeReveal()}><img src='https://www.clipartmax.com/png/full/3-37416_clover-irish-four-leaves-luck-tattoo-white-shamrock-transparent.png' className='reveal-btn-img'/></button>
            <div className='te-names'>
              <div className='player-name'><span id='rank'>1.</span> Travis Kelce [KC]</div>
              <div className='player-name'><span id='rank'>2.</span> Zach Ertz [PHI]</div>
              <div className='player-name'><span id='rank'>3.</span> George Kittle [SF]</div>
              <div className='player-name'><span id='rank'>4.</span> Evan Engram [NYG]</div>
              <div className='player-name'><span id='rank'>5.</span> OJ Howard [TB]</div>
              <div className='player-name'><span id='rank'>6.</span> Hunter Henry [LAC]</div>
              <div className='player-name'><span id='rank'>7.</span> Mark Andrews [BAL]</div>
              <div className='player-name'><span id='rank'>8.</span> Delanie Walker [TEN]</div>
              <div className='player-name'><span id='rank'>9.</span> David Njoku [CLE]</div>
              <div className='player-name'><span id='rank'>10.</span> Jared Cook [NO]</div>
              <div className='player-name'><span id='rank'>11.</span> Vance McDonald [PIT]</div>
              <div className='player-name'><span id='rank'>12.</span> Darren Waller [OAK]</div>
              <div className='player-name'><span id='rank'>13.</span> Greg Olsen [CAR]</div>
              <div className='player-name'><span id='rank'>14.</span> Jimmy Graham [GB]</div>
              <div className='player-name'><span id='rank'>15.</span> Vernon Davis [WAS]</div>
            </div>
          </div>
        </div>

        <div className='ff-waivers-section'>
          <h3 className='ff-section-title' id='whitebg'> Weekly Waiver Wire </h3>
          <div className='ff-week-desc'>Week 2 (September 12th - 16th)</div>
          <div className='rb-section' id='whitebg'>
            <h3 className='waiver-title'>Running Backs</h3>
              <div>1. Giovani Bernard [CIN]</div>
              <div>2. Chris Thompson [WAS]</div>
              <div>3. Adrian Peterson [WAS]</div>
              <div>4. Ronald Jones [TB]</div>
              <div>5. Malcolm Brown [LAR]</div>
          </div>
          <div className='wr-section' id='whitebg'>
            <h3 className='waiver-title'>Wide Recievers</h3>
              <div>1. John Ross III [CIN]</div>
              <div>2. Marquise Brown [BAL]</div>
              <div>3. DJ Shark [JAX]</div>
              <div>4. Randall Cobb [DAL]</div>
              <div>5. Terry McLaurin [WAS]</div>
          </div>
          <div className='qb-section' id='whitebg'>
            <h3 className='waiver-title'>Quarterbacks</h3>
              <div>1. Matthew Stafford [DET]</div>
              <div>2. Marcus Mariota [TEN]</div>
              <div>3. Case Keenum [WAS]</div>
              <div>4. Mitchell Trubisky [CHI]</div>
              <div>5. Kyler Murray [ARI]</div>
          </div>
          <div className='te-section' id='whitebg'>
            <h3 className='waiver-title'>Tight Ends</h3>
              <div>1. Vernon Davis [WAS]</div>
              <div>2. Jimmy Graham [GB]</div>
              <div>3. Mark Andrews [BAL]</div>
              <div>4. T.J. Hockenson [DET]</div>
              <div>5. Jason Witten [DAL]</div>
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
          <div className='ff-week-desc'>Week 2 (September 15th)</div>
          <div className='rb-section' id='whitebg'>
            <h3 className='waiver-title'>Running Backs</h3>
            <div>1. Christian McCaffrey [CAR]</div>
            <div>2. Alvin Kamara [NO]</div>
            <div>3. Derrick Henry [TEN]</div>
            <div>4. Dalvin Cook [MIN]</div>
            <div>5. Ezekiel Elliot [DAL]</div>
            <div>6. David Johnson [ARI]</div>
            <div>7. Chris Carson [SEA]</div>
            <div>8. Leveon Bell [NYJ]</div>
            <div>9. Saquon Barkley [NYG]</div>
            <div>10. Todd Gurley II [LAR]</div>
          </div>
          <div className='wr-section' id='whitebg'>
            <h3 className='waiver-title'>Wide Recievers</h3>
            <div>1. DeAndre Hopkins [HOU]</div>
            <div>2. Julio Jones [ATL]</div>
            <div>3. Antonio Brown [NE]</div>
            <div>4. Mike Evans [TB]</div>
            <div>5. Michael Thomas [NO]</div>
            <div>6. Keenan Allen [LAC]</div>
            <div>7. JuJu Smith-Schuster [PIT]</div>
            <div>8. Davante Adams [GB]</div>
            <div>9. Amari Cooper [DAL]</div>
            <div>10. Adam Thielen [MIN]</div>
          </div>
          <div className='qb-section' id='whitebg'>
            <h3 className='waiver-title'>Quarterbacks</h3>
            <div>1. Patrick Mahomes [KC]</div>
            <div>2. Lamar Jackson [BAL]</div>
            <div>3. Tom Brady [NE]</div>
            <div>4. Aaron Rodgers [GB]</div>
            <div>5. Drew Brees [NO]</div>
            <div>6. Dak Prescott [DAL]</div>
          </div>
          <div className='te-section' id='whitebg'>
            <h3 className='waiver-title'>Tight Ends</h3>
            <div>1. Travis Kelce [KC]</div>
            <div>2. Zach Ertz [PHI]</div>
            <div>3. George Kittle [SF]</div>
            <div>4. Evan Engram [NYG]</div>
            <div>5. OJ Howard [TB]</div>
          </div>
        </div>


      </div>
    );
  }
}

export default FantasyFootball;
