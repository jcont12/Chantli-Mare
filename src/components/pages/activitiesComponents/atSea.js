import React, { Component } from 'react';
import '../../../App.css';

class AtSea extends Component {
  render(){
    return(
      <div className='activities-atSea'>
        <h3> At Sea </h3>
        <img id='activities-img'src={require('../../../images/Coconuts.jpg')}/>
        <div id='activities-p'>
          <p><bold>Whale Watching</bold> We can arrange a boat tour, the winter months are perfect for Humpback whales</p>
          <p><bold>Kayaking</bold> Take in the sights of our protected bay</p>
          <p><bold>Surfing</bold>There are a number of breaks close by. Let us know and we can gladly arrange for lessons and board rentals.</p>
          <p><bold>Fishing</bold>Boat tours can take you for open ocean fishing</p>
          <p><bold>Snorkeling and Scuba Diving</bold>Enjoy trips to nearby reefs and islands.</p>
        </div>
      </div>
    )
  }
}

export default AtSea
