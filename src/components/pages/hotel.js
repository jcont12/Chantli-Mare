import React, { Component } from 'react';
import '../../App.css';
import HotelHistory from './hotelComponents/hotelHistory';
import HotelAmenities from './hotelComponents/hotelAmenities';
import HotelAccomodations from './hotelComponents/hotelAccomodations'

class Hotel extends Component {
  render() {
      return (
        <div id="hotel">
          <HotelHistory />
          <HotelAmenities />
          <HotelAccomodations />
        </div>
      );
    }
}

export default Hotel;
