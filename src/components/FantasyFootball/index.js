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
          <div className='ff-week-desc'>Week 2 (September 12th - 16th)</div>
          <div className='rb-section' id='greenbg'>
            <h3 className='rankings-title'>Running Backs</h3>
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
              <div>11. Nick Chubb [CLE]</div>
              <div>12. Marlon Mack [IND]</div>
              <div>13. James Conner [PIT]</div>
              <div>14. Sony Michel [NE]</div>
              <div>15. Leonard Fournette [JAX]</div>
              <div>16. Kerryon Johnson [DET]</div>
              <div>17. Austin Ekeler [LAC]</div>
              <div>18. Giovani Bernard [CIN]</div>
              <div>19. Aaron Jones [GB]</div>
              <div>20. Devonta Freeman [ATL]</div>
          </div>
          <div className='wr-section' id='greenbg'>
            <h3 className='rankings-title'>Wide Recievers</h3>
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
              <div>11. Kenny Golladay [DET]</div>
              <div>12. Sammy Watkins [KC]</div>
              <div>13. Julian Edelman [NE]</div>
              <div>14. Josh Gordon [NE]</div>
              <div>15. Stefon Diggs [MIN]</div>
              <div>16. Allen Robinson [CHI]</div>
              <div>17. Cooper Kupp [LAR]</div>
              <div>18. Robert Woods [LAR]</div>
              <div>19. Brandin Cooks [LAR]</div>
              <div>20. TY Hilton [IND]</div>
          </div>
          <div className='qb-section' id='greenbg'>
            <h3 className='rankings-title'>Quarterbacks</h3>
            <div>1. Patrick Mahomes [KC]</div>
            <div>2. Lamar Jackson [BAL]</div>
            <div>3. Tom Brady [NE]</div>
            <div>4. Aaron Rodgers [GB]</div>
            <div>5. Drew Brees [NO]</div>
            <div>6. Dak Prescott [DAL]</div>
            <div>7. Deshaun Watson [HOU]</div>
            <div>8. Carson Wentz [PHI]</div>
            <div>9. Cam Newton [CAR]</div>
            <div>10. Russell Wilson [SEA]</div>
            <div>11. Ben Roethlisberger [PIT]</div>
            <div>12. Philip Rivers [LAC]</div>
            <div>13. Jared Goff [LAR]</div>
            <div>14. Matthew Stafford [DET]</div>
            <div>15. Matt Ryan [ATL]</div>
          </div>
          <div className='te-section' id='greenbg'>
            <h3 className='rankings-title'>Tight Ends</h3>
              <div>1. Travis Kelce [KC]</div>
              <div>2. Zach Ertz [PHI]</div>
              <div>3. George Kittle [SF]</div>
              <div>4. Evan Engram [NYG]</div>
              <div>5. OJ Howard [TB]</div>
              <div>6. Hunter Henry [LAC]</div>
              <div>7. Mark Andrews [BAL]</div>
              <div>8. Delanie Walker [TEN]</div>
              <div>9. David Njoku [CLE]</div>
              <div>10. Jared Cook [NO]</div>
              <div>11. Vance McDonald [PIT]</div>
              <div>12. Darren Waller [OAK]</div>
              <div>13. Greg Olsen [CAR]</div>
              <div>14. Jimmy Graham [GB]</div>
              <div>15. Vernon Davis [WAS]</div>
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
