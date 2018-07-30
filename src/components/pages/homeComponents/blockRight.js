import React, { Component } from 'react';
import '../../../App.css';
import { Link } from 'react-router-dom';

class BlockRight extends Component {
  render() {
    return(
      <div id="background-home-blocks">
          <div id="home-block-right">
          <h3> Discover the Coast </h3>
          <Link to="/Activities"><img className="home-block-img" src={require("../../../images/Discover_the_coast.jpg")} /> </Link>
          <p>{"Mexico's Costalegre is renowned for its virgin soft sandy beaches. There is always something to keep you busy, wether it is El Tamarindo's golf course throught the rainforest, nature trails through the mangroves, whale watching, surfing lessons or a relaxing massage. The hotels surroundings over a trove of experiences for our guests."}</p>
          <Link to="/Activities" className="nav-options"> Activities > </Link>
        </div>
    </div>
    )
  }
}

export default BlockRight
