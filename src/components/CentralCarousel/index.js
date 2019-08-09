import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Draggable, {DraggableCore} from 'react-draggable';
import './index.css';

class CentralCarousel extends Component {

  handleLakers = () => {
    document.querySelector('.team-info#lakers').style.display = 'block'
  }
  handleYankees = () => {
    document.querySelector('.team-info#yankees').style.display = 'block'
  }
  handleCowboys = () => {
    document.querySelector('.team-info#cowboys').style.display = 'block'
  }
  handleBrooklyn = () => {
    document.querySelector('.team-info#brooklyn').style.display = 'block'
  }
  handleDevils = () => {
    document.querySelector('.team-info#devils').style.display = 'block'
  }
  handleDuke = () => {
    document.querySelector('.team-info#duke').style.display = 'block'
  }
  handleNotreDame = () => {
    document.querySelector('.team-info#notre').style.display = 'block'
  }
  handleWarriors = () => {
    document.querySelector('.team-info#warriors').style.display = 'block'
  }
  handleClose = () => {
    document.querySelector('.team-info').style.display = 'none'
  }


  render(){
    return (
      <div className='carousel-section'>

        <Draggable>
          <div className='team-info' id='lakers'>Lakers Modal <button id='close-btn' onClick={()=>this.handleClose()}>x</button></div>
        </Draggable>
        <Draggable>
          <div className='team-info' id='brooklyn'>Brooklyn Modal <button id='close-btn' onClick={()=>this.handleClose()}>x</button></div>
        </Draggable>
        <Draggable>
          <div className='team-info' id='yankees'>Yankees Modal <button id='close-btn' onClick={()=>this.handleClose()}>x</button></div>
        </Draggable>
        <Draggable>
          <div className='team-info' id='cowboys'>Cowboys Modal <button id='close-btn' onClick={()=>this.handleClose()}>x</button></div>
        </Draggable>
        <Draggable>
          <div className='team-info' id='notre'>Notre Dame Modal <button id='close-btn' onClick={()=>this.handleClose()}>x</button></div>
        </Draggable>
        <Draggable>
          <div className='team-info' id='duke'>Duke Modal <button id='close-btn' onClick={()=>this.handleClose()}>x</button></div>
        </Draggable>
        <Draggable>
          <div className='team-info' id='devils'>Devils Modal <button id='close-btn' onClick={()=>this.handleClose()}>x</button></div>
        </Draggable>


        <h2 data-aos='fade-down' className='title' id='highlights'>Highlight Reel</h2>
        <div className='carousel-container'>
          <Carousel>
            <Carousel.Item>
            <div className='project-container'>
              <div className='project'><a href='https://youtu.be/lCnRoMmzVCE' target='_blank'><img src='https://i.ibb.co/X47CS0f/Screen-Shot-2019-08-07-at-4-52-27-PM.png' id='project-img'/></a> Nothing But Luck</div>
              <div className='project'><a href='https://youtu.be/EabkravC05k' target='_blank'><img src='https://i.ibb.co/DY777Y2/Screen-Shot-2019-08-07-at-4-53-19-PM.png' id='project-img'/></a> FlatBall</div>
              <div className='project'>Wrote-it</div>
              <div className='project'>NYC Safety Net</div>
              <div className='project'>GAMCO Asset Management</div>
            </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className='art-container'>
            <div className='dallas-appreciation-title'></div>
              <div className='artwork'><img src='https://i.ibb.co/TKSC609/4-E695593-8-B8-A-4636-B22-D-84-F9-B912-C740.jpg' id='dallas-img'/></div>
              <div className='artwork'><img src='https://i.ibb.co/pRtDzmR/DF8-C2189-9596-432-D-BEDE-D0-BD63-EE5795.jpg' id='dallas-img'/></div>
              <div className='artwork'><img src='https://i.ibb.co/8MG09Yy/Dallas.jpg' id='dallas-img'/></div>
              <div className='artwork'><img src='https://i.ibb.co/rtSKS6x/BF8-A6828-2258-4-F85-91-E1-76-BABA7-BAC4-C.jpg' id='dallas-img'/></div>
              <div className='artwork'><img src='https://i.ibb.co/RGKQfKf/2-C609489-502-C-4-C4-F-AC72-C752-A9-DEFBEB.jpg' id='dallas-img'/></div>
              <div className='artwork'><img src='https://i.ibb.co/YcrynV9/21-D8-FCC8-0333-437-B-99-A5-69826-BC06-F7-C.jpg' id='dallas-img'/></div>
            </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className='team-container'>
                <div className='team-sect-title'></div>
                <div className='team'><img onClick={() => this.handleCowboys()} id='sports-logo' src='https://images.vexels.com/media/users/3/141848/isolated/preview/b141601c09d9296a6e6d4083d6960039-dallas-cowboys-american-football-by-vexels.png'/><span id='team-name'>Dallas Cowboys</span></div>
                <div className='team'><img onClick={() => this.handleLakers()} id='sports-logo' src='https://www.stickpng.com/assets/images/58419d0aa6515b1e0ad75a6c.png'/><span id='team-name'>Los Angeles Lakers</span></div>
                <div className='team'><img onClick={() => this.handleBrooklyn()} id='sports-logo' src='https://www.stickpng.com/assets/images/58419c7ba6515b1e0ad75a62.png'/><span  id='team-name'>Brooklyn Nets</span></div>
                <div className='team'><img onClick={() => this.handleYankees()} id='sports-logo' src='https://www.stickpng.com/assets/images/584d4b740a44bd1070d5d494.png'/><span  id='team-name'>New York Yankees</span></div>
                <div className='team'><img onClick={() => this.handleDevils()} id='sports-logo' src='https://www.stickpng.com/assets/images/5a4fbb83da2b4f099b95da16.png'/><span  id='team-name'>New Jersey Devils</span></div>
                <div className='team'><img onClick={() => this.handleDuke()} id='sports-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Duke_Blue_Devils_logo.svg/1212px-Duke_Blue_Devils_logo.svg.png'/><span id='team-name'>Duke Blue Devils</span></div>
                <div className='team'><img onClick={() => this.handleNotreDame()} id='sports-logo' src='https://upload.wikimedia.org/wikipedia/en/thumb/9/91/Notre_Dame_Leprechaun_logo.svg/220px-Notre_Dame_Leprechaun_logo.svg.png'/><span id='team-name'>Notre Dame Irish</span></div>
                <div className='team'><img onClick={() => this.handleWarriors()} id='sports-logo' src='https://www.waldwickschools.org/cms/lib/NJ01912972/Centricity/Template/GlobalAssets/images///HS/HS%20Warrior%20Logo.png'/><span id='team-name'>Waldwick Warriors</span></div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>

      </div>
    );
  }
}

export default CentralCarousel;
