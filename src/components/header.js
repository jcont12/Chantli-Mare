import React, { Component } from 'react';
import '../App.css';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">
          <img src={require('../images/logo.png')} alt='Chantli-Mare-logo' />
        </div>
        <nav className='menu options'>
          <p id='home'> Home </p>
          <p id='hotel'> Hotel </p>
          <p id='dining'> Dining </p>
          <p id='activities'> Activities </p>
          <p id='gallery'> Gallery </p>
          <p id='testimonials'> Testimonials </p>
          <p id='contact'> Contact </p>
        </nav>
      </header>
    );
  }
}

export default Header;
