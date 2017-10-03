import React, { Component } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <nav id="menu-options">
          <img id="logo" src={require("../../images/logo.png")} alt="Chantli-Mare-logo" />
          <Link to="/" className="nav-options" onClick={this.props.triggerHome}> HOME </Link>
          <Link to="/Hotel" className="nav-options" onClick={this.props.triggerHotel}> HOTEL </Link>
          <Link to="/Dining" className="nav-options" onClick={this.props.triggerDining}> DINING </Link>
          <Link to="/Activities" className="nav-options" onClick={this.props.triggerActivities}> ACTIVITIES </Link>
          <Link to="/Gallery" className="nav-options" onClick={this.props.triggerGallery}> GALLERY </Link>
          <Link to="/Testimonials" className="nav-options" onClick={this.props.triggerTestimonials}> TESTIMONIALS </Link>
          <Link to="/Contact" className="nav-options" onClick={this.props.triggerContact}> CONTACT </Link>
        </nav>
      </header>
    );
  }
}

export default Header;
