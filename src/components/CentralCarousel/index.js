import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Draggable, {DraggableCore} from 'react-draggable';
import Gamco from './project-images/gamco.png'
import Nbl from './project-images/nbl.png'
import Wroteit from './project-images/reddit.png'
import FlatBall from './project-images/flatball.png'
import Safety from './project-images/nypd.png'

import './index.css';

const displaySelect = (team) => {
  if (document.querySelector(`.team-info#`+team).style.display === 'block')
  document.querySelector(`.team-info#`+team).style.display = 'none'
  else{
    document.querySelector(`.team-info#`+team).style.display = 'block'
  }
}

class CentralCarousel extends Component {


  render(){
    return (
      <div className='carousel-section'>

        <div>
          <Carousel>
            <Carousel.Item>
            <div className='project'>
            <div className='project-name'>GAMCO Investors</div>
            <div className='project-desc'>
              <b>A collaborative rebuilt website for a finanical company</b>
              <br/>
              <br/>
              Collaborated with team members to rebuild a complete commercial website for the company,
              using Ruby on Rails and React. Planned and coordinated with team members to optimize work efficiency.
              Custom designed and built frontend of GAMCO Asset Management portion of website.
            </div>
              <a href='https://www.gabelli.com/gamco' target='_blank'>
                <img src={Gamco} id='project-img'/>
              </a>
            </div>
            </Carousel.Item>
              <Carousel.Item>
              <div className='project'>
                <div className='project-name'>Nothing But Luck</div>
                <div className='project-desc'>
                  <b>A member-based social platform for daily fantasy sports players.</b>
                  <br/>
                  <br/>
                  Built frontend using Javascript within a React w/ Redux framework
                  Featured a Ruby on Rails 5 API backend for the persistence of user/post data
                  Incorporated full authentication using JSON Web Token (JWT)
                  Produced complete web app design through a custom-written CSS stylesheet
                </div>
                <a href='https://github.com/JayZonday/nothing-but-luck-FE' target='_blank'>
                  <img src={Nbl} id='project-img'/>
                </a>
              </div>
              </Carousel.Item>
              <Carousel.Item>
              <div className='project'>
              <div className='project-name'>FlatBall</div>
              <div className='project-desc'>
                <b>A Major League Baseball simulation game</b>
                <br/>
                <br/>
                 Built frontend in pure Javascript (Vanilla - OO)
                 Utilized a Ruby on Rails 5 API backend for the persistence of game data
                 Created styling and animations through custom-written CSS stylesheets
              </div>
                <a href='https://github.com/JayZonday/flatball' target='_blank'>
                  <img src={FlatBall} id='project-img'/>
                </a>
              </div>
              </Carousel.Item>
              <Carousel.Item>
              <div className='project'>
              <div className='project-name'>Wrote-it</div>
              <div className='project-desc'>
                <b>A collaborative, unique rendition of the website Reddit</b>
                <br/>
                <br/>
                Built a complete Ruby on Rails 5 Web Application (frontend and backend)
                Created styling and design produced through a custom-written CSS stylesheet
              </div>
                <a href='https://github.com/JayZonday/reddit_app' target='_blank'>
                  <img src={Wroteit} id='project-img'/>
                </a>
              </div>
              </Carousel.Item>
              <Carousel.Item>
              <div className='project'>
              <div className='project-name'>NYC Safety Net</div>
              <div className='project-desc'>
                <b>A collaborative built command line program that scours an NYPD API and gathers crime statistics to give users the current rate of crimes in the five boroughs of New York City</b>
                <br/>
                <br/>
                Built a complete Ruby on Rails 5 Web Application (frontend and backend)
                Created styling and design produced through a custom-written CSS stylesheet
              </div>
                <a href='https://github.com/JayZonday/reddit_app' target='_blank'>
                  <img src={Safety} id='project-img'/>
                </a>
              </div>
              </Carousel.Item>
          </Carousel>
        </div>

      </div>
    );
  }
}

export default CentralCarousel;
