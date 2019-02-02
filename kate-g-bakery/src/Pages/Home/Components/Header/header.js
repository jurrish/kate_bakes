import React, { Component } from 'react';
import Navbar from './Navbar/navbar.js';
// import logo from '../../../../images/kate_web_logo.jpg';
import logo from './kate_web_logo.jpg';


// import logo from './logo.png'; // Tell Webpack this JS file uses this image
//
// console.log(logo); // /logo.84287d09.png

// function Header() {
//   // Import result is the URL of your image
//   return <img src={logo} alt="Logo" />;
// }


import './header.scss';

// console.log(logo);

class Header extends Component {
  render(){
    return(
      <div className="sticky">
        <header className="header">
          <div id="header-text-container">
            <h1 id="header-text">Kate's Great Bakes!</h1>
          </div>
          <div className="clip-art-container">

          </div>
          <div id="logo-image-container">
            <img src={ logo } alt="Logo"/>
          </div>
        </header>
        <Navbar />
      </div>
    )
  }
}

export default Header;
