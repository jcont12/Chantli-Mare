import React, { Component } from 'react';
import '../App.css';

class Header extends Component {
  render() {
      return (
        <header>
          <nav className='menu options'>
            <img id='logo' src={require('../images/logo.png')} alt='Chantli-Mare-logo' />
            <p className='nav-options'> HOME </p>
            <p className='nav-options'> HOTEL </p>
            <p className='nav-options'> DINING </p>
            <p className='nav-options'> ACTIVITIES </p>
            <p className='nav-options'> GALLERY </p>
            <p className='nav-options'> TESTIMONIALS </p>
            <p className='nav-options'> CONTACT </p>
          </nav>
        </header>
      );
    }
}

export default Header;
