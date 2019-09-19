import React, { Component } from 'react'
import Particles from 'react-particles-js';
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
  duration: 600, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


class CentralHeader extends Component {
  render(){
    return (
      <div>
        <div className='title-container'>
          <div className='title-box'>
            <h2 className='title' id='header'>
              <span id='title-letter'>J</span>
              <span id='title-letter'>o</span>
              <span id='title-letter'>s</span>
              <span id='title-letter'>e</span>
              <span id='title-letter'>p</span>
              <span id='title-letter'>h</span>
              <span id='title-dot'> </span>
              <span id='title-letter'>W</span>
              <span id='title-letter'>i</span>
              <span id='title-letter'>l</span>
              <span id='title-letter'>l</span>
              <span id='title-letter'>i</span>
              <span id='title-letter'>a</span>
              <span id='title-letter'>m</span>
              <span id='title-dot'> </span>
              <span id='title-letter'>M</span>
              <span id='title-letter'>o</span>
              <span id='title-letter'>l</span>
              <span id='title-letter'>o</span>
              <span id='title-letter'>u</span>
              <span id='title-letter'>g</span>
              <span id='title-letter'>h</span>
              <span id='title-letter'>n</span>
              <span id='title-letter'>e</span>
              <span id='title-letter'>y</span>
            </h2>
            <div data-aos='fade-up' className='title-desc' >
              <span className='desc-item'>Full Stack Developer</span>
              <span className='desc-item' id='mid'>Artist</span>
              <span className='desc-item'>Sport Enthusiast</span>
            </div>
          </div>
        </div>
        <div id='particles'>
          <Particles
            params={{
            "particles": {
                "number": {
                    "value": 160,
                    "density": {
                        "enable": false
                    }
                },
                "color": {
                    "value": '#2E8B57'
                },
                "size": {
                    "value": 8,
                    "random": true,
                    "anim": {
                        "speed": 1,
                        "size_min": 0.3
                    }
                },
                "line_linked": {
                    "enable": false
                },
                "move": {
                    "random": true,
                    "speed": 2,
                    "direction": "top",
                    "out_mode": "out"
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "bubble"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "repulse"
                    }
                },
                "modes": {
                    "bubble": {
                        "distance": 250,
                        "duration": 2,
                        "size": 0,
                        "opacity": 0
                    },
                    "repulse": {
                        "distance": 400,
                        "duration": 4
                    }
                }
            }
          }} />
        </div>
      </div>
    );
  }
}

export default CentralHeader;
