import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import './index.css';

class CentralCarousel extends Component {
  render(){
    return (
      <div className='carousel-section'>
        <h2 data-aos='fade-down' className='title' id='highlights'>Highlight Reel</h2>
        <div className='carousel-container'>
          <Carousel>
            <Carousel.Item>
            <div className='project-container'>
              <div className='project'>Nothing But Luck</div>
              <div className='project'>FlatBall</div>
              <div className='project'>Wrote-it</div>
              <div className='project'>NYC Safety Net</div>
              <div className='project'>GAMCO Asset Management</div>
            </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className='art-container'>
              <div className='artwork'>Image 1</div>
              <div className='artwork'>Image 2</div>
              <div className='artwork'>Image 3</div>
              <div className='artwork'>Image 4</div>
              <div className='artwork'>Image 5</div>
              <div className='artwork'>Image 6</div>
              <div className='artwork'>Image 7</div>
            </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className='team-container'>
                <div className='team-sect-title'> Favorite Teams </div>
                <div className='team'><img id='sports-logo' src='https://images.vexels.com/media/users/3/141848/isolated/preview/b141601c09d9296a6e6d4083d6960039-dallas-cowboys-american-football-by-vexels.png'/>Dallas Cowboys</div>
                <div className='team'><img id='sports-logo' src='https://www.stickpng.com/assets/images/58419d0aa6515b1e0ad75a6c.png'/>Los Angeles Lakers</div>
                <div className='team'><img id='sports-logo' src='https://www.stickpng.com/assets/images/58419c7ba6515b1e0ad75a62.png'/>Brooklyn Nets</div>
                <div className='team'><img id='sports-logo' src='https://cdn.freebiesupply.com/images/large/2x/new-york-yankees-logo-transparent.png'/>New York Yankees</div>
                <div className='team'><img id='sports-logo' src='https://www.stickpng.com/assets/images/5a4fbb83da2b4f099b95da16.png'/>New Jersey Devils</div>
                <div className='team'><img id='sports-logo' src='https://cdn.freebiesupply.com/logos/large/2x/duke-blue-devils-1-logo-png-transparent.png'/>Duke Blue Devils</div>
                <div className='team'><img id='sports-logo' src='https://cdn.freebiesupply.com/logos/large/2x/notre-dame-fighting-irish-2-logo-png-transparent.png'/>Notre Dame Fighting Irish</div>
                <div className='team'><img id='sports-logo' src='https://www.waldwickschools.org/cms/lib/NJ01912972/Centricity/Template/GlobalAssets/images///HS/HS%20Warrior%20Logo.png'/>Waldwick Warriors</div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default CentralCarousel;
