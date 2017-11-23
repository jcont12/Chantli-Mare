import React, { Component } from 'react';
import '../../../App.css';
import { Link } from 'react-router-dom';

class BlockLeft extends Component {
  render() {
    return (
      <div id="home-block-left">
        <h3> Stay With Us </h3>
        <Link to="/Hotel"><img className="home-block-img" src={require("../../../images/Stay_with_us.jpg")} /></Link>
        <p>Come and relax in our beautiful boutique hotel. Located in a secluded beachfront location, this 6 room hotel delivers a cozy, intimate atmosphere where you can relax and indulge in a restful vacation. Every room has its unique decoration that mixes the modern and the traditional. Pass the day realixing on our terraces or take a dip in our pool.</p>
        <Link to="/Hotel" className="nav-options"> The Hotel > </Link>
      </div>
    )
  }
}

export default BlockLeft
