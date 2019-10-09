import React, { Component } from 'react';
import './index.css';

class WebDesign extends Component {



  render(){
    return (
      <div className= 'main-bg'>
        <div className='web-design-title'>
          <h2 className='vision-title'> JayZonday Vision Designs SandBox </h2>
          <br/>
          <div className='title-desc-design'> JavaScript | React.js | CSS | HTML </div>
        </div>

        <div className='design-2'>
          <div className='design-2-headbar'>
            <div className='design-2-headbtn'>Log In | Sign Up</div>
            <div className='design-2-headbtn'>Order Online</div>
          </div>
          <div className='design-2-header'>
            <h3 className='design-2-title'>Jay's Pizzeria < hr className='design-2-titleline' /></h3>
            <div className='design-2-deal'><div className='the-deal'>Back 2 School Special <br/> 1 Large Pie and 2L Soda <br/> <span className='price'>$19.99</span></div></div>
          </div>
          <div className='design-2-navbar'>
            <div className='design-2-navbtn'>Locations</div>
            <div className='design-2-navbtn'>Menu</div>
            <div className='design-2-navbtn'>Catering</div>
            <div className='design-2-navbtn'>About Us</div>
            <div className='design-2-navbtn'>Contact</div>
          </div>
          <div className='design-2-footer'>
            <div className='design-2-coupons'><div className='design-2-overlay'><div className='design-2-footer-title'>Give Pizza Back</div></div></div>
            <div className='design-2-social'><div className='design-2-overlay'><div className='design-2-footer-title'>Employment</div></div></div>
          </div>
        </div>



        <div className='design-3'>
          <div className='design-3-navbar'>
            <div className='design-3-navbtn'>Mens</div>
            <div className='design-3-navbtn'>Womens</div>
            <div className='design-3-navbtn'>About Us</div>
            <div className='design-3-navbtn'>Contact</div>
            <div className='design-3-navbtn'>Locations</div>
          </div>
          <div className='design-3-search'>
            <input className='search-input'></input>
            <button className='search-btn'>Search</button>
          </div>
          <h3 className='design-3-title'>Back From The Past <br/> <h4 className='design-3-desc'>Jays Vintage Shoppe</h4> </h3>
          <img className='design-3-banner' src='https://images.pexels.com/photos/247929/pexels-photo-247929.jpeg'/>
          <div className='design-3-sidebar'>
            <div className='design-3-sidebtn'>Shirts</div>
            <div className='design-3-sidebtn'>Pants</div>
            <div className='design-3-sidebtn'>Sweatshirts</div>
            <div className='design-3-sidebtn'>T-Shirts</div>
            <div className='design-3-sidebtn'>Jackets</div>
            <div className='design-3-sidebtn'>Accessories</div>
          </div>
          <div className='design-3-subheader'>
            <div className='design-3-lines'>
              <hr className='design-3-line'/>
              <hr className='design-3-line-odd'/>
              <hr className='design-3-line'/>
            </div>
            <div className='design-3-hotitems'>
              <div className='design-3-deal'>Exclusive Deals <br/> <h4> 25% ANY ORDER OVER $75</h4> </div>
            </div>
          </div>
          <div className='design-3-mainitems'>
            <div className='design-3-mainrow'>
              <div className='design-3-item'>
                <img className='design-3-photo' src='https://images.pexels.com/photos/2536584/pexels-photo-2536584.jpeg'/>
              </div>
              <div className='design-3-item'>
                <img className='design-3-photo' src='https://images.pexels.com/photos/3007347/pexels-photo-3007347.jpeg'/>
              </div>
              <div className='design-3-item'>
                <img className='design-3-photo' src='https://images.pexels.com/photos/236284/pexels-photo-236284.jpeg'/>
              </div>
              <div className='design-3-item'>
                <img className='design-3-photo' src='https://images.pexels.com/photos/2798154/pexels-photo-2798154.jpeg'/>
              </div>
            </div>
            <div className='design-3-mainrow'>
              <div className='design-3-item'>
                <img className='design-3-photo' src='https://images.pexels.com/photos/2536584/pexels-photo-2536584.jpeg'/>
              </div>
              <div className='design-3-item'>
                <img className='design-3-photo' src='https://images.pexels.com/photos/3007347/pexels-photo-3007347.jpeg'/>
              </div>
              <div className='design-3-item'>
                <img className='design-3-photo' src='https://images.pexels.com/photos/236284/pexels-photo-236284.jpeg'/>
              </div>
              <div className='design-3-item'>
                <img className='design-3-photo' src='https://images.pexels.com/photos/2798154/pexels-photo-2798154.jpeg'/>
              </div>
            </div>
            <div className='design-3-mainrow'>
              <div className='design-3-item'>
                <img className='design-3-photo' src='https://images.pexels.com/photos/2536584/pexels-photo-2536584.jpeg'/>
              </div>
              <div className='design-3-item'>
                <img className='design-3-photo' src='https://images.pexels.com/photos/3007347/pexels-photo-3007347.jpeg'/>
              </div>
              <div className='design-3-item'>
                <img className='design-3-photo' src='https://images.pexels.com/photos/236284/pexels-photo-236284.jpeg'/>
              </div>
              <div className='design-3-item'>
                <img className='design-3-photo' src='https://images.pexels.com/photos/2798154/pexels-photo-2798154.jpeg'/>
              </div>
            </div>
          </div>
        </div>





        <div className='design-4'>
          <h3 className='design-4-title'>The Woof-Woof Inn <br/> <h4>Jays Dog Daycare</h4> </h3>
        </div>
        <div className='design-5'>
          <h3 className='design-5-title'>Average Jays Gym</h3>
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
