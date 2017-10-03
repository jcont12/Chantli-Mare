import React, { Component } from 'react';
import '../../../App.css';

class HotelHistory extends Component {
  render() {
    return(
      <div id="hotel-history">
        <h3> History </h3>
        <img id="hotel-history-img" src={require("../../../images/owners.jpg")} />
        <p id="hotel-history-p"> Originally built in the 1970s as a private vacation residence, the owners followed their lifelong dream of establishing their own hotel and restaurant, not to mention moving permanently to such a beautiful location. Having so many memories here they decided to upgrade the hotel while still maintaining the intimate level of the property. Roy and Ibett now enjoy hosting our guests, their motto being “arrive a stranger and leave as family”</p>
      </div>
    )
  }
}

export default HotelHistory
