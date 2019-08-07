import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1200, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'bottom', // defines which position of the element regarding to window should trigger the animation

});

class CentralBody extends Component {
  render(){
    return (
      <div className='body-section'>
        <div data-aos='zoom-in' className='bio-logo'>
          <img className='bio-img' src='https://images.pexels.com/photos/5049/forest-trees-fog-foggy.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'/>
        </div>
        <hr  className='bio-line' id='first'/>
        <hr  className='bio-line' id='second'/>
        <div className='mini-bio'>
          A Criminal Justice Graduate turned highly eager and motivated <b id='career'>Full-Stack Web Developer</b> looking
          to apply my wide range of skills to create and build beautiful and intelligently designed programs that can help
          change and shape the way we think about tomorrow.
        </div>
      </div>
    );
  }
}

export default CentralBody;
