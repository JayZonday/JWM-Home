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











        <div className='design-2'>
          <div className='design-2-header'>
            <h3 className='design-2-title'>JJs Pizzeria < hr className='design-2-titleline' /></h3>
            <div className='design-2-deal'><div className='the-deal'> 1 Large Pie and 2L Soda <span className='price'>$19.99</span></div></div>
          </div>
          <div className='design-2-navbar'>
            <div className='design-2-navbtn'>About Us</div>
            <div className='design-2-navbtn'>Locations</div>
            <div className='design-2-navbtn'>Menu</div>
            <div className='design-2-navbtn'>Catering</div>
            <div className='design-2-navbtn'>Employment</div>
          </div>
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
        <div className='code-design'>
          <h3 className='code-test-title'>Technical Challenge</h3>
          <div className='code-test-div'>
            <button className='code-test-btn'> Test Button</button>
            <div className='test-display'>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
export default WebDesign;
