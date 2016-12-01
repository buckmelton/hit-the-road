import React, { Component } from 'react';
import logo from '../../public/images/hit-the-road.jpg';
import '../css/App.css';
import '../css/normalize.css';
import '../css/skeleton.css';

class AppHeader extends Component {
  render() {
    return (
      <div className="App-header">
        <img className="logo" src={logo} alt="Hit The Road" />
        <h5 className="tagline">Find Vacation Rentals Within a Half-Day's Drive</h5>
      </div>
    );
  }
}

export default AppHeader;
