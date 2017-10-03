import React, { Component } from 'react';
import '../../../App.css';

class HotelAmenities extends Component {
  render() {
    return (
      <div id="hotel-amenities">
      <h3> Amenities </h3>
        <div id="amenities-block-imgs">
          <img className="amenities-img" src={require("../../../images/amenities1.jpg")} />
          <img className="amenities-img" src={require("../../../images/amenities2.jpg")} />
          <img className="amenities-img" src={require("../../../images/amenities3.jpg")} />
          <img className="amenities-img" src={require("../../../images/amenities4.jpg")} />
        </div>
      </div>
    )
  }
}

export default HotelAmenities
