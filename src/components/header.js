import React, { Component } from 'react';
import '../App.css';

class Header extends Component {
  render() {
    return (
      <header>
        <img id='logo' src={require('../images/logo.png')} alt='Chantli-Mare-logo' />
        <nav className='menu options'>
          <p id='home'> HOME </p>
          <p id='hotel'> HOTEL </p>
          <p id='dining'> DINING </p>
          <p id='activities'> ACTIVITIES </p>
          <p id='gallery'> GALLERY </p>
          <p id='testimonials'> TESTIMONIALS </p>
          <p id='contact'> CONTACT </p>
        </nav>
      </header>
    );
  }
}

export default Header;
