import React, { Component } from 'react';
import Draggable, {DraggableCore} from 'react-draggable';
import Image from 'react-bootstrap/Image'
import './index.css';

class ArtSlab extends Component {



  render(){
    return (
      <div className='art-section'>
        <h2 className='title' id='art'>Art Gallery</h2>
        <div className='gallery-container'>
          <Draggable>
            <div className='art-piece'>
              <img id='art-img' src='https://i.ibb.co/xqPGx0y/12-C2-EC2-C-748-D-4-D89-9218-CAF2-E6029-F8-B.jpg'/>
            </div>
          </Draggable>
          <Draggable>
            <div className='art-piece'>
              <img id='art-img' src='https://i.ibb.co/D7qNbSn/311161-C7-88-B1-4-EFB-B2-B6-1-B7-BC74-FA0-D9.jpg'/>
            </div>
          </Draggable>
          <Draggable>
            <div className='art-piece'>
              <img id='art-img' src='https://i.ibb.co/SdMT7T5/2-BFC4-FDE-CCB9-44-EF-BF36-3-C11-B7063-EFB.jpg'/>
            </div>
          </Draggable>
          <Draggable>
            <div className='art-piece'>
              <img id='art-img' src='https://i.ibb.co/y5x8pmH/5112102-E-C3-BC-4-E90-A01-E-51-A1305-B2-D18.jpg'/>
            </div>
          </Draggable>
        </div>
        <div className='gallery-container'>
          <Draggable>
            <div className='art-piece'>
              <img id='art-img' src='https://i.ibb.co/h8Ds7Kg/C825-FFC4-1984-42-B5-A845-555-A3-A4192-A5.jpg'/>
            </div>
          </Draggable>
          <Draggable>
            <div className='art-piece' id='mobile-remove'>
              <img id='art-img' src='https://i.ibb.co/N2PFgGw/08743182-4-C07-4224-9-B75-7-B970-A2-B3-B89.jpg'/>
            </div>
          </Draggable>
          <Draggable>
            <div className='art-piece' id='mobile-remove'>
              <img id='art-img' src='https://i.ibb.co/2K0sh64/BB857-DB8-943-B-4-F05-A6-E9-DC6-B66-FC6254.jpg'/>
            </div>
          </Draggable>
          <Draggable>
            <div className='art-piece' id='mobile-remove'>
              <img id='art-img' src='https://i.ibb.co/CPb60fq/77736930-8-D8-C-4793-BB2-E-1167-DC3-B6-F0-D.jpg'/>
            </div>
          </Draggable>
        </div>
      </div>
    );
  }
}
export default ArtSlab;
