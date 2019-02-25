import React, { Component } from 'react';

// import fbLogo from '../SocialMedia/Images/facebook_icon.png';
// import igLogo from '../SocialMedia/Images/instagram_icon.png';
// import twitterLogo from '../SocialMedia/Images/twitter_icon.png';

import SocialMedia from '../SocialMedia/social_media.js';

// import '../SocialMedia/social_media.scss';
import './footer.scss';

class Footer extends Component {
  render(){
    // console.log(this.props.title);
    // console.log(this.props);
    return(
      <div className="footer-container">

        <SocialMedia />

      </div>
    )
  }
}

export default Footer;
