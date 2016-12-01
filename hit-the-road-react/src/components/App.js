import React, { Component } from 'react';
import AppHeader from './AppHeader';
import RentalsMap from './RentalsMap';
import RentalListings from './RentalListings';
import AppFooter from './AppFooter';
import '../css/App.css';
import '../css/normalize.css';
import '../css/skeleton.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <AppHeader />
        <div className="row">
          <div className="one-half column">
            <RentalsMap />
          </div>
          <div className="one-half column">
            <RentalListings />
          </div>
        </div>
        <AppFooter />
      </div>
    );
  }
}

export default App;
