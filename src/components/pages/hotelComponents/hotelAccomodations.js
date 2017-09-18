import React, { Component } from 'react';
import '../../../App.css';

class HotelAccomodations extends Component {
  render(){
    return(
      <div className='hotel-accomodations'>
        <h3> Accomodations </h3>
        <table id='hotel-accomodations-table'>
        	<tr>
        	  <th> Master Suites </th>
        	  <th> Ocean Suites </th>
        	  <th> Patio Room </th>
        	</tr>
        	<tr>
        	  <td> Large ocean-facing suites with beach views. Large outdoor terrace for dining and relaxing. King size bed, TV, A/C, Large Bathroom. (2 Master Suites Available)</td>
        	  <td> Ocean-facing suites with beach views. Outdoor terrace with views to the palm grove. King size bed, TV, A/C. (3 Ocean Suites Available) </td>
        	  <td> Interior Room facing interior patio. King size bed (or 3 single beds upon request), TV, A/C. (1 Patio Room Available)</td>
        	</tr>
          <tr>
            <td> <img className='td-image' src={require('../../../images/Room1.jpg')} /></td>
            <td> <img className='td-image'src={require('../../../images/Room2.jpg')} /></td>
            <td></td>
          </tr>
        </table>
      </div>
    )
  }
}

export default HotelAccomodations
