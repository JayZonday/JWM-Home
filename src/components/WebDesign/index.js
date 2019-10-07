import React, { Component } from 'react';
import './index.css';

class WebDesign extends Component {



  render(){
    return (
      <div className= 'main-bg'>
        <div className='web-design-title'>
          <h2 className='vision-title'> JayZonday Vision Designs SandBox </h2>
          <div className='title-desc-design'> JavaScript | CSS | HTML   </div>
        </div>




        <div className='code-design'>
          <h3 className='code-test-title'>Technical Challenge</h3>
          <div className='code-test-div'>
            <button className='code-test-btn'> Test Button</button>
            <div className='test-display'>
            </div>
          </div>
        </div>






        <div className='design-2'>
          <h3 className='design-2-title'>JJs Pizzeria</h3>
        </div>
        <div className='design-3'>
          <h3 className='design-3-title'>JJs Pizzeria</h3>
        </div>
        <div className='design-4'>
          <h3 className='design-4-title'>JJs Pizzeria</h3>
        </div>
        <div className='design-5'>
          <h3 className='design-5-title'>JJs Pizzeria</h3>
        </div>

      </div>
    );
  }
}
export default WebDesign;
