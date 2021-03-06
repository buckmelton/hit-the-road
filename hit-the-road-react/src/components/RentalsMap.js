/* global google */
import {
  default as React,
  Component,
} from "react";

import {
  withGoogleMap,
  GoogleMap,
} from "react-google-maps";

/*
 * Sample From: https://developers.google.com/maps/documentation/javascript/examples/map-simple
 */
const SimpleMapExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  />
));

/*
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
export default class RentalsMap extends Component {

  render() {
    return (
      <p>Rentals Map Goes Here</p>
      // <SimpleMapExampleGoogleMap
      //   containerElement={
      //     <div style={{ height: `100%` }} />
      //   }
      //   mapElement={
      //     <div style={{ height: `100%` }} />
      //   }
      // />
    );
  }
}
