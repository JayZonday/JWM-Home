import React, { Component } from 'react';
import './index.css';

class ArtSlab extends Component {
  render(){
    return (
      <div className='art-section'>
        <h2 className='title' id='art'>Art Gallery</h2>
        <div className='gallery-container'>
          <div className='art-piece'>
            <img/>
          </div>
          <div className='art-piece'>
            <img/>
          </div>
          <div className='art-piece'>
            <img/>
          </div>
          <div className='art-piece'>
            <img/>
          </div>
        </div>
      </div>
    );
  }
}
export default ArtSlab;
