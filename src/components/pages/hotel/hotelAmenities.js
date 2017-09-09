import React, { Component } from 'react';
import '../../../App.css';

class HotelAmenities extends Component {
  render() {
    return (
      <div className='hotel-amenities'>
      <h3> 'Amenities' </h3>
        <img className='amenities-pictures' src={require('../../../images/Flowers.jpg')} />
        <img className='amenities-pictures' src={require('../../../images/Food1.jpg')} />
        <img className='amenities-pictures' src={require('../../../images/Food2.jpg')} />
        <img className='amenities-pictures' src={require('../../../images/Food3.jpg')} />
      </div>
    )
  }
}

export default HotelAmenities
