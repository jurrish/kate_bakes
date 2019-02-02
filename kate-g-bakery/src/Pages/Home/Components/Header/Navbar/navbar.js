import React, { Component } from 'react';

import './navbar.scss';

class Navbar extends Component {
  render(){
    return(
      <div className="navbar-container">
        <ul>
          <li>Home</li>
          <li>Cake Menu</li>
          <li>Treat Menu</li>
          <li>Contact & Catering</li>
          <li>Gallery</li>
          <li>About Us</li>
        </ul>
      </div>
    )
  }
}

export default Navbar;
