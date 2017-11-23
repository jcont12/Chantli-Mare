import React, { Component } from 'react';
import '../../App.css';
import HotelHistory from './hotelComponents/hotelHistory';
import HotelAmenities from './hotelComponents/hotelAmenities';
import HotelAccomodations from './hotelComponents/hotelAccomodations'
import Header from '../headerComponents/header';

class Hotel extends Component {
  render() {
      return (
        <div id="hotel">
        <Header/>
        <div className="crop">
           <img className="hotel-cover" src={require("../../images/Stay_with_us.jpg")} alt="Hotel-View" />
           <h1 className="cover-title"> Hotel </h1>
        </div>
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
