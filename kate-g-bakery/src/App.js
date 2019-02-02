import React, { Component } from 'react';
import Home from './Pages/Home/home.js';

import './App.scss';
import './Pages/Home/Home.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
