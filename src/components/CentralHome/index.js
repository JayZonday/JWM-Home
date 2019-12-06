import CentralHeader from '../CentralHeader'
import CentralBody from '../CentralBody'
import CentralFooter from '../CentralFooter'
import CentralCarousel from '../CentralCarousel'
import WebDevSlab from '../WebDevSlab'
import SportsSlab from '../SportsSlab'
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
        <SideNavbar/>
        <CentralBody/>
        
        <CentralCarousel/>
        <WebDevSlab/>
        <ArtSlab/>
        <SportsSlab/>
      </div>
    );
  }
}

export default CentralHome;
