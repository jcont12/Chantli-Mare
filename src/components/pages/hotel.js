import React, { Component } from 'react';
import '../../App.css';
import HotelHistory from './hotel/hotelHistory';
import HotelAmenities from './hotel/hotelAmenities';
import HotelAccomodations from './hotel/hotelAccomodations'

class Hotel extends Component {
  render() {
      return (
        <div className='hotel'>
          <HotelHistory />
          <HotelAmenities />
          <HotelAccomodations />
        </div>
      );
    }
}

export default Hotel;
