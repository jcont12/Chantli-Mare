import React, { Component } from 'react';
import '../../App.css';
import HotelHistory from './hotelComponents/hotelHistory';
import HotelAmenities from './hotelComponents/hotelAmenities';
import HotelAccomodations from './hotelComponents/hotelAccomodations'

class Hotel extends Component {
  render() {
      return (
        <div id="hotel">
        <div className="h1-container">
          <h1> Our intimate boutique hotel is the perfect refuge from your troubles. </h1>
        </div>
          <HotelHistory />
          <HotelAmenities />
          <HotelAccomodations />
        </div>
      );
    }
}

export default Hotel;
