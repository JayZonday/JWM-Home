import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import './index.css';

class CentralCarousel extends Component {
  render(){
    return (
      <div className='carousel-section'>
        <h2 className='title' id='highlights'>Highlight Reel</h2>
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
                <div className='team'>Dallas Cowboys</div>
                <div className='team'>Los Angeles Lakers</div>
                <div className='team'>New York Yankees</div>
                <div className='team'>New Jersey Devils</div>
                <div className='team'>Duke Blue Devils</div>
                <div className='team'>Notre Dame Fighting Irish</div>
                <div className='team'>Waldwick Warriors</div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default CentralCarousel;
