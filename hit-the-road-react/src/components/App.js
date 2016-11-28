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
        <RentalsMap />
        <RentalListings />
        <AppFooter />
      </div>
    );
  }
}

export default App;
