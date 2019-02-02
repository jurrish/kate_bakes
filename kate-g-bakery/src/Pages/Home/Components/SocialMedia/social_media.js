import React, { Component } from 'react';

import fbLogo from './Images/facebook_icon.png';
import igLogo from './Images/instagram_icon.png';
import twitterLogo from './Images/twitter_icon.png';

import './social_media.scss';

class SocialMedia extends Component {
  render(){
    return(
      <div className="social-media-container">

        <div className="facebook-icon">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={ fbLogo } alt="facebook-icon"/>
          </a>
        </div>

        <div className="instagram-icon">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={ igLogo } alt="instagram-icon"/>
          </a>
        </div>

        <div className="twitter-icon">
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={ twitterLogo } alt="twitter-icon" />
          </a>
        </div>

      </div>
    )
  }
}

export default SocialMedia;
