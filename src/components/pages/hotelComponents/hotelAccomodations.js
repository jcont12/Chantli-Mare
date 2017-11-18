import React, { Component } from 'react';
import '../../../App.css';

class HotelAccomodations extends Component {
  render(){
    return(
      <div id="hotel-accomodations">
        <h3> Accomodations </h3>
        <table id="hotel-accomodations-table">
        	<tr>
        	  <th className="hotel-accomodations-th"> Master Suites </th>
        	  <th className="hotel-accomodations-th"> Ocean Suites </th>
        	  <th className="hotel-accomodations-th"> Patio Room </th>
        	</tr>
        	<tr>
        	  <td className="hotel-accomodations-td"> Large ocean-facing suites with beach views. Large outdoor terrace for dining and relaxing. King size bed, TV, A/C, Large Bathroom. (2 Master Suites Available)</td>
        	  <td className="hotel-accomodations-td"> Ocean-facing suites with beach views. Outdoor terrace with views to the palm grove. King size bed, TV, A/C. (3 Ocean Suites Available) </td>
        	  <td className="hotel-accomodations-td"> Interior Room facing interior patio. King size bed (or 3 single beds upon request), TV, A/C. (1 Patio Room Available)</td>
        	</tr>
          <tr>
            <td className="hotel-accomodations-td"> <img className="td-image" src={require("../../../images/Room5.jpg")} /></td>
            <td className="hotel-accomodations-td"> <img className="td-image"src={require("../../../images/Room2.jpg")} /></td>
            <td className="hotel-accomodations-td"> <img className="td-image"src={require("../../../images/Room1.jpg")} /></td>
          </tr>
        </table>
      </div>
    )
  }
}

export default HotelAccomodations
