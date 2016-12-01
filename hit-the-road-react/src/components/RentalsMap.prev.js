import React, { Component } from 'react';
// import GoogleApiComponent from 'google-maps-react';
import '../css/App.css';
import '../css/normalize.css';
import '../css/skeleton.css';

// Google Maps API key: AIzaSyCFwE9ezzuQGddycwRrZ1K3BvRzFVQGvvg
const __GAPI_KEY__ = "AIzaSyCFwE9ezzuQGddycwRrZ1K3BvRzFVQGvvg";

class RentalsMap extends Component {
  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    return (
      <div>Map will go here</div>
    );
  }
}

export default RentalsMap;

// export default GoogleApiComponent({
//   apiKey: __GAPI_KEY__
// })(RentalsMap)
