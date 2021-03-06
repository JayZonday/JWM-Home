import CentralHeader from '../CentralHeader'
import CentralBody from '../CentralBody'
import CentralFooter from '../CentralFooter'
import CentralCarousel from '../CentralCarousel'
import WebDevSlab from '../WebDevSlab'
import SideNavbar from '../SideNavbar'
import ArtSlab from '../ArtSlab'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import React, { Component } from 'react';
import './index.css';

class CentralHome extends Component {
  render(){
    return (
      <div>
        <CentralHeader/>
        <CentralBody/>
        <SideNavbar/>
        <CentralCarousel/>
        <WebDevSlab/>
        <ArtSlab/>
      </div>
    );
  }
}

export default CentralHome;
