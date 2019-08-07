import React, { Component } from 'react';
import './index.css';

class ArtSlab extends Component {
  render(){
    return (
      <div className='art-section'>
        <h2 className='title' id='art'>Art Gallery</h2>
        <div className='gallery-container'>
          <div className='art-piece'>
            <img id='art-img' src='https://i.ibb.co/xqPGx0y/12-C2-EC2-C-748-D-4-D89-9218-CAF2-E6029-F8-B.jpg'/>
          </div>
          <div className='art-piece'>
            <img id='art-img' src='https://i.ibb.co/D7qNbSn/311161-C7-88-B1-4-EFB-B2-B6-1-B7-BC74-FA0-D9.jpg'/>
          </div>
          <div className='art-piece'>
            <img id='art-img' src='https://i.ibb.co/SdMT7T5/2-BFC4-FDE-CCB9-44-EF-BF36-3-C11-B7063-EFB.jpg'/>
          </div>
          <div className='art-piece'>
            <img id='art-img' src='https://i.ibb.co/y5x8pmH/5112102-E-C3-BC-4-E90-A01-E-51-A1305-B2-D18.jpg'/>
          </div>
        </div>
      </div>
    );
  }
}
export default ArtSlab;
