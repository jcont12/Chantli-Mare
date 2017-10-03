import React, { Component } from 'react';
import '../../../App.css';

class AtSea extends Component {
  render(){
    return(
      <div id="activities-atSea">
        <h3> At Sea </h3>
        <div id="activities-p">
          <p><b>Whale Watching</b> We can arrange a boat tour, the winter months are perfect for Humpback whales</p>
          <p><b>Kayaking</b> Take in the sights of our protected bay</p>
          <p><b>Surfing</b> There are a number of breaks close by. Let us know and we can gladly arrange for lessons and board rentals.</p>
          <p><b>Fishing</b> Boat tours can take you for open ocean fishing</p>
          <p><b>Snorkeling and Scuba Diving</b> Enjoy trips to nearby reefs and islands.</p>
        </div>
        <img id="activities-img" src={require("../../../images/Coconuts.jpg")}/>
      </div>
    )
  }
}

export default AtSea
